import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupabaseProvider from '@/components/SupabaseProvider';

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'SuperKit - Next.js Starter Kit',
  description: 'A powerful starter kit for Next.js with TypeScript and Tailwind CSS',
  keywords: ['next.js', 'react', 'typescript', 'tailwind css', 'starter kit'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={work_sans.variable}>
      <body className="flex min-h-screen flex-col">
        {/* SupabaseProvider is client-only, so layout stays a server component */}
        <SupabaseProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
