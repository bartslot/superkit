// components/layout/Footer.tsx
'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Roadmap', href: '/roadmap' },
        { label: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'GitHub', href: 'https://github.com/zeeshana07x/superkit' },
      ],
    },
  ];
  
  return (
    <footer className="border-t border-secondary-700 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand & Description */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="mb-6 inline-block">
                <span className="text-2xl font-bold text-primary-300">
                  SuperKit
                </span>
              </Link>
              <p className="mb-4 max-w-md text-sm text-secondary-400">
                A modern, lightweight starter kit for Next.js with TypeScript and
                Tailwind CSS. Build with confidence using the latest web
                technologies.
              </p>
              <p className="text-sm text-secondary-500">
                &copy; {currentYear} SuperKit. All rights reserved.
              </p>
            </div>
            
            {/* Link Groups */}
            <div className="col-span-1 lg:col-span-3">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {footerLinks.map((category) => (
                  <div key={category.title} className="mt-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-300">
                      {category.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {category.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-secondary-400 transition-colors hover:text-primary-300"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}