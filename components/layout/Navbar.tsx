'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const user = useUser();
  const supabase = useSupabaseClient();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowDropdown(false);
  };

  return (
    <nav className="flex items-center bg-background text-foreground px-4 py-3 md:px-8">
      {/* Desktop Navigation */}
      <ul className="hidden items-center space-x-8 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300',
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href))
                  ? 'text-primary-300'
                  : 'text-secondary-400 hover:text-primary-300'
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="rounded-full border border-secondary-700 p-1 hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                {user.user_metadata.avatar_url ? (
                  <Image
                    src={user.user_metadata.avatar_url}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                )}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 rounded-md bg-popover shadow-lg z-30 opacity-0 animate-in fade-in slide-in-from-top-5 duration-200">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-secondary-800 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md border border-secondary-600 text-secondary-400 hover:bg-secondary-800 hover:shadow-lg hover:translate-y-[-2px] text-sm font-medium transition-all duration-200 h-10 py-2 px-4"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <button
        onClick={toggleMobileMenu}
        className="ml-2 rounded-md p-2 text-secondary-400 md:hidden hover:bg-secondary-800 transition-colors duration-200"
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-20 bg-card px-4 py-2 shadow-lg animate-in slide-in-from-top-5 duration-300">
          <ul className="space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-2 text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300',
                    pathname === item.href ||
                    (item.href !== '/' && pathname?.startsWith(item.href))
                      ? 'text-primary-300'
                      : 'text-secondary-400 hover:text-primary-300'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://github.com/zeeshana07x/Drift"
                className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-all duration-200 hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-background text-foreground hover:bg-secondary-800 h-10 py-2 px-4"
              >
                GitHub
              </Link>
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full inline-flex items-center justify-center rounded-md border border-secondary-600 text-secondary-400 hover:bg-secondary-800 hover:translate-y-[-2px] text-sm font-medium transition-all duration-200 h-10 py-2 px-4"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex w-full items-center justify-center rounded-md border border-secondary-600 text-secondary-400 hover:bg-secondary-800 hover:translate-y-[-2px] text-sm font-medium transition-all duration-200 h-10 py-2 px-4"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}