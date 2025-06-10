import Link from 'next/link';
import { ReactNode } from 'react';

interface ComingSoonProps {
  /** Optional title for the page (e.g. "Blog", "Dashboard") */
  title?: string;
  /** Optional extra children to render below the message */
  children?: ReactNode;
}

export default function ComingSoon({ title = 'This page', children }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-4">
        🚧 {title} Coming Soon!
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        We’re busy building something awesome. Hang tight and check back soon!  
      </p>

      {children && <div className="mb-8">{children}</div>}

      <p className="text-sm text-gray-500 mb-1">
        Drift is <span className="font-semibold">open source</span> on{' '}
        <Link href="https://github.com/zeeshana07x/Drift" className="underline text-primary-500 hover:text-primary-600">
          GitHub
        </Link>
        — feel free to 💖 contribute!
      </p>
      <p className="text-sm text-gray-400">
        Got ideas? Open an issue or PR, and let’s make it happen together!
      </p>
    </div>
  );
}
