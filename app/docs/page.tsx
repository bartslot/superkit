import type { Metadata } from "next";
import DocsComponent from "@/components/DocsComponent";

export const metadata: Metadata = {
  title: "Documentation - SuperKit",
  description: "Documentation for SuperKit - Next.js starter kit with Supabase and Paddle integration",
};

export default function DocsPage() {
  return <DocsComponent />;
}