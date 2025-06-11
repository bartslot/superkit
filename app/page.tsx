"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Pricing } from "@/components/pricing/Pricing";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function HomePage() {
  const supabase = createClient();
  useUserInfo(supabase); // Removed destructuring to avoid unused `user`
  const [country] = useState("US"); // Removed `setCountry` since unused

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target instanceof HTMLAnchorElement &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const targetId = target.getAttribute("href")!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const features = [
    {
      title: "Next.js App Router",
      description:
        "Built with the latest Next.js features like App Router and Server Components",
      icon: "🚀",
    },
    {
      title: "TypeScript Support",
      description:
        "Fully typed codebase with TypeScript for better developer experience",
      icon: "📝",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: "🎨",
    },
    {
      title: "Vercel Ready",
      description:
        "Optimized for deployment on Vercel without any configuration",
      icon: "⚡",
    },
  ];

  const gitSnippet = `  # 1. Clone the Drift repo
  git clone https://github.com/zeeshana07x/Drift.git my-app
  cd my-app
  
  # 2. Install dependencies
  npm install
  # (or yarn install)
  
  # 3. Run the development server
  npm run dev
  # (or yarn dev)`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-700 to-primary-300 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Drift
                <span className="block text-primary-300">
                  Stoploss Tracker
                </span>
              </h1>
              <p className="text-lg text-primary-100">
                Drift connects your Broker account and protects your positions. It changes your stoploss so it maximizes your profits.             </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#features"
                  className="inline-flex items-center text-black justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary hover:bg-primary/90 h-11 px-8 text-base"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* GitHub Clone Snippet */}
            <div className="relative transform transition-transform duration-300 hover:scale-105">
              <CodeBlock>{gitSnippet}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="section py-16 bg-background text-foreground scroll-mt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Features</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-400">
              Everything you need to build modern web applications with Next.js
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start p-6 bg-background border border-secondary-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-300 text-2xl text-background">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-secondary-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="section bg-background text-foreground py-16 scroll-mt-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Pricing country={country} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-700 py-16 text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Ready to start building?
            </h2>
            <p className="mb-8 text-lg text-secondary-300">
              Get started with Drift today and build your next great project.
            </p>
            <Link
              href="https://github.com/zeeshana07x/Drift"
              className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-8 bg-primary-300 text-background hover:bg-primary-400 h-11 rounded-md text-base transform transition-transform duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
