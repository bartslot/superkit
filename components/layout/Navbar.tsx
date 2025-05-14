// components/layout/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="flex items-center bg-background text-foreground px-4 py-3 md:px-8">
      {/* Desktop Navigation */}
      <ul className="hidden items-center space-x-8 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary-300',
                pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(item.href))
                  ? 'text-primary-300'
                  : 'text-secondary-400'
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            href="/login"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-secondary-600 text-secondary-400 hover:bg-secondary-800 h-10 py-2 px-4"
          >
            Login
          </Link>
        </li>
      </ul>

      {/* Mobile Navigation & Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="ml-2 rounded-md p-2 text-secondary-400 md:hidden hover:bg-secondary-800 transition-colors"
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          // Close icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-20 bg-card px-4 py-2 shadow-lg">
          <ul className="space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors hover:text-primary-300',
                    pathname === item.href ||
                      (item.href !== '/' && pathname?.startsWith(item.href))
                      ? 'text-primary-300'
                      : 'text-secondary-400'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="https://github.com/zeeshana07x/superkit"
                className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-background text-foreground hover:bg-secondary-800 h-10 py-2 px-4"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link 
                href="/login"
                className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-secondary-600 text-secondary-400 hover:bg-secondary-800 h-10 py-2 px-4"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}