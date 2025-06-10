import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "License - Drift",
  description: "Privacy Policy for Drift - Next.js starter kit",
};

export default function LicensePage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">License</h1>
        <p className="mb-4">
          MIT License
        </p>
        <p className="mb-4">
          Copyright (c) {currentYear} Drift
        </p>
        <p className="mb-4">
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the &ldquo;Software&rdquo;), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
        </p>
        <p className="mb-4">
          THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
          THE SOFTWARE.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-sm text-primary-300 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}