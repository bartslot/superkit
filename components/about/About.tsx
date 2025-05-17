// components/About.tsx
"use client";

import React from "react";
import Link from "next/link";

export function About() {
  return (
    <div className="max-w-xl w-full bg-card rounded-lg p-8 shadow-md space-y-6">
      <h1 className="text-4xl font-bold text-center">About Me</h1>

      <p className="text-lg">
        I&apos;m <strong>Zeeshan Ali</strong>, an 18‑year‑old indie hacker and freelance developer.
      </p>

      <div className="space-y-2">
        <p>
          <strong>Twitter:</strong>{" "}
          <Link
            href="https://twitter.com/zeeshana07x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @zeeshana07x
          </Link>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <Link
            href="https://github.com/zeeshana07x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/zeeshana07x
          </Link>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="https://github.com/sponsors/zeeshana07x?o=superkit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition"
        >
          Sponsor SuperKit
        </Link>

        <Link
          href="https://www.buymeacoffee.com/zeeshana07x"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm font-medium rounded-md bg-yellow-400 text-card-foreground hover:bg-yellow-500/90 transition"
        >
          Buy Me a Coffee ☕
        </Link>
      </div>
    </div>
  );
}
