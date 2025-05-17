"use client";

import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const DocsComponent = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            SuperKit Documentation
          </h1>
          <p className="text-lg md:text-xl text-secondary">
            A fully configured Next.js starter kit with Supabase and Paddle
            integration
          </p>
        </header>

        <nav className="sticky top-4 bg-card rounded-lg p-4 mb-8 border border-border shadow-sm">
          <h2 className="font-medium text-center mb-3">Quick Navigation</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { href: "#features", label: "Features" },
              { href: "#prerequisites", label: "Prerequisites" },
              { href: "#getting-started", label: "Getting Started" },
              { href: "#env-variables", label: "Environment Variables" },
              { href: "#auth-flow", label: "Authentication" },
              { href: "#paddle", label: "Paddle" },
              { href: "#contributing", label: "Contributing" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-primary hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="space-y-12">
          <section id="features" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Features
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Next.js App Router</strong> with file-based routing and
                layouts
              </li>
              <li>
                <strong>TypeScript</strong> config out of the box
              </li>
              <li>
                <strong>TailwindCSS</strong> with dark mode support
              </li>
              <li>
                <strong>Supabase</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Email/password sign-up & sign-in</li>
                  <li>Google authentication</li>
                  <li>Session persistence</li>
                  <li>Example CRUD with Supabase client</li>
                </ul>
              </li>
              <li>
                <strong>Paddle Payments</strong>
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Hosted checkout integration</li>
                  <li>Webhook handling for license management</li>
                </ul>
              </li>
              <li>
                <strong>Responsive</strong> design and mobile-friendly
                components
              </li>
              <li>
                <strong>ESLint</strong>, <strong>Prettier</strong>, and{" "}
                <strong>Husky</strong> pre-commit checks
              </li>
            </ul>
          </section>

          <section id="prerequisites" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Prerequisites
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <Link
                  href="https://nodejs.org/"
                  className="text-primary hover:underline"
                >
                  Node.js
                </Link>{" "}
                v18+
              </li>
              <li>
                <Link
                  href="https://pnpm.io/"
                  className="text-primary hover:underline"
                >
                  pnpm
                </Link>{" "}
                (or npm/yarn)
              </li>
              <li>
                A{" "}
                <Link
                  href="https://app.supabase.com/"
                  className="text-primary hover:underline"
                >
                  Supabase
                </Link>{" "}
                project
              </li>
              <li>
                A{" "}
                <Link
                  href="https://vendors.paddle.com/"
                  className="text-primary hover:underline"
                >
                  Paddle
                </Link>{" "}
                vendor account
              </li>
            </ul>
          </section>

          <section id="getting-started" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Getting Started
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Clone the repo
                </h3>
                <CodeBlock>
                  {`git clone https://github.com/zeeshana07x/superkit.git
cd superkit`}
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Install dependencies
                </h3>
                <CodeBlock>
                  {`npm install
# or
pnpm install`}
                </CodeBlock>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Set up environment
                </h3>
                <p>
                  Copy .env.example to .env.local and fill in your keys (see
                  Environment Variables section).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  4. Run in development
                </h3>
                <CodeBlock>
                  {`npm run dev
# or
pnpm dev`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section id="env-variables" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Environment Variables
            </h2>
            <p className="mb-4">
              Create a .env.local file at the project root:
            </p>
            <CodeBlock>
              {`# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Paddle
NEXT_PUBLIC_PADDLE_ENV=sandbox # or production
PADDLE_API_KEY=
PADDLE_NOTIFICATION_WEBHOOK_SECRET=
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=`}
            </CodeBlock>
          </section>

          <section id="auth-flow" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Authentication Flow
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Email/Password Authentication
                </h3>
                <p>
                  SuperKit comes with email/password authentication
                  pre-configured through Supabase.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Google Authentication
                </h3>
                <p className="mb-4">
                  To enable Google authentication with Supabase:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to your Supabase project dashboard</li>
                  <li>
                    Navigate to <strong>Authentication → Providers</strong>
                  </li>
                  <li>
                    Enable <strong>Google</strong> provider
                  </li>
                  <li>
                    Create a Google OAuth application in the{" "}
                    <Link
                      href="https://console.cloud.google.com/"
                      className="text-primary hover:underline"
                    >
                      Google Cloud Console
                    </Link>
                  </li>
                  <li>
                    Add your authorized redirect URI from Supabase to your
                    Google OAuth app
                  </li>
                  <li>
                    Copy the <strong>Client ID</strong> and{" "}
                    <strong>Client Secret</strong> from Google to Supabase
                  </li>
                  <li>Save your changes</li>
                  <li>
                    Update your app to include the Google sign-in button using
                    the Supabase auth helpers
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section id="paddle" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Paddle Integration
            </h2>
            <p className="mb-4">
              SuperKit integrates Paddle for payment processing and subscription
              management. Key features include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Three-tier pricing page that's fully localized for 200+ markets
                using Paddle.js
              </li>
              <li>Integrated checkout experience built with Paddle Checkout</li>
              <li>
                Automatic syncing of customer and subscription data between
                Paddle and your app using webhooks
              </li>
              <li>
                Ready-made screens for customers to manage their payments and
                subscriptions
              </li>
            </ul>
            <p className="mt-4">
              For more details on setup, refer to the{" "}
              <Link
                href="https://developer.paddle.com/build/nextjs-supabase-vercel-starter-kit"
                className="text-primary hover:underline"
              >
                Paddle documentation
              </Link>
              .
            </p>
          </section>

          <section id="contributing" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">
              Contributing
            </h2>
            <p className="mb-4">
              We ❤️ contributions! Whether it's reporting bugs, suggesting new
              features, improving documentation, or submitting code, your input
              is welcome.
            </p>

            <h3 className="text-xl font-semibold mb-2">How to Contribute</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Fork the repository</strong> - Click the "Fork" button
                at the top-right of the SuperKit repo page to create your own
                copy.
              </li>
              <li>
                <strong>Clone your fork locally</strong>
                <CodeBlock>
                  {`git clone https://github.com/zeeshana07x/superkit.git
cd superkit`}
                </CodeBlock>
              </li>
              <li>
                <strong>Create a new branch</strong>
                <CodeBlock>
                  {`git checkout -b feat/your-feature-name`}
                </CodeBlock>
                <p className="text-sm mt-1">
                  Use a descriptive branch name, e.g. fix/navbar-scroll or
                  feat/paddle-webhook.
                </p>
              </li>
              <li>
                <strong>Make your changes</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  <li>Follow the existing code style</li>
                  <li>Add or update code as needed</li>
                  <li>Update documentation in README.md</li>
                </ul>
              </li>
              <li>
                <strong>Commit your work</strong>
                <CodeBlock>
                  {`git add .
git commit -m "feat: describe your feature or fix"`}
                </CodeBlock>
              </li>
              <li>
                <strong>Push your branch to GitHub</strong>
                <CodeBlock>
                  {`git push origin feat/your-feature-name`}
                </CodeBlock>
              </li>
              <li>
                <strong>Open a Pull Request</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1 text-sm">
                  <li>Navigate to your fork on GitHub</li>
                  <li>Click "Compare & pull request"</li>
                  <li>
                    Fill out the PR template, explaining what you changed and
                    why
                  </li>
                </ul>
              </li>
            </ol>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Reporting Issues</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Please search existing issues before opening a new one</li>
                <li>
                  Use a clear, descriptive title and include steps to reproduce
                  bugs or screenshots if applicable
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Code of Conduct</h3>
              <p>
                This project follows the{" "}
                <Link
                  href="https://www.contributor-covenant.org/"
                  className="text-primary hover:underline"
                >
                  Contributor Covenant Code of Conduct
                </Link>{" "}
                to ensure a welcoming and respectful community for all
                contributors.
              </p>
            </div>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p>
            Made with ❤️ & vibe by 
            <span className="font-bold">
              <Link href="https://github.com/zeeshana07x/"> Zeeshan</Link>
            </span>
          </p>
          <p className="mt-2 text-sm text-secondary">
          &copy; {currentYear} SuperKit. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DocsComponent;
