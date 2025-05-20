// File: src/components/Footer.tsx
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary-200 py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">QuickTools</span>
            </Link>
            <p className="mt-2 text-sm text-secondary-600">
              Simple utility tools to boost your productivity
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold mb-3">Tools</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/tools/logo-creator" className="text-secondary-600 hover:text-secondary-900">
                    Logo Creator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/url-shortener" className="text-secondary-600 hover:text-secondary-900">
                    URL Shortener
                  </Link>
                </li>
                <li>
                  <Link href="/tools/color-palette" className="text-secondary-600 hover:text-secondary-900">
                    Color Palette
                  </Link>
                </li>
                <li>
                  <Link href="/tools/password-generator" className="text-secondary-600 hover:text-secondary-900">
                    Password Generator
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/about" className="text-secondary-600 hover:text-secondary-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-secondary-600 hover:text-secondary-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-secondary-600 hover:text-secondary-900">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-900">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-secondary-900">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-secondary-200" />
        
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <span className="text-sm text-secondary-600">
            © {new Date().getFullYear()} QuickTools. All rights reserved.
          </span>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link href="/contact" className="text-sm text-secondary-600 hover:text-secondary-900">
              Contact
            </Link>
            <Link href="/feedback" className="text-sm text-secondary-600 hover:text-secondary-900">
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}