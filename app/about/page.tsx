// app/about/page.tsx
import React from "react";
import { About } from "@/components/about/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - SuperKit",
  description: "Learn about Zeeshan Ali: 18‑year‑old indie hacker and freelance developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-4">
      <About />
    </div>
  );
}
