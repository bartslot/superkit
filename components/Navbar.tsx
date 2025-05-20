// File: components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Wrench } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-primary-600" />
            <span className="font-bold text-xl">QuickTools</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/tools" className="text-secondary-600 hover:text-secondary-900">
              All Tools
            </Link>
            <Link href="/about" className="text-secondary-600 hover:text-secondary-900">
              About
            </Link>
            <Link href="/contact" className="text-secondary-600 hover:text-secondary-900">
              Contact
            </Link>
            <Link href="/feedback" className="btn btn-primary">
              Feedback
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-600 hover:text-secondary-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/tools" 
              className="block text-secondary-600 hover:text-secondary-900"
              onClick={() => setIsMenuOpen(false)}
            >
              All Tools
            </Link>
            <Link 
              href="/about" 
              className="block text-secondary-600 hover:text-secondary-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-secondary-600 hover:text-secondary-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/feedback" 
              className="block btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}