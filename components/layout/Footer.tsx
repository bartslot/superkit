import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated link groups: removed Product, removed Contact; added Legal
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'GitHub', href: 'https://github.com/zeeshana07x' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'License', href: '/license' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  ];

  return (
    <footer className="border-t border-secondary-700 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Description */}
            <div className="col-span-1 lg:col-span-2">
              <Link
                href="/"
                className="mb-6 inline-block relative transition-transform duration-300 hover:scale-105 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300"
              >
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
            <div className="col-span-1 lg:col-span-2">
              <div className="grid grid-cols-2 gap-8">
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
                            className="text-sm text-secondary-400 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-current hover:text-primary-300 hover:after:w-full after:transition-all after:duration-300"
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
