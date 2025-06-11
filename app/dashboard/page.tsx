import type { Metadata } from "next";
import DocsComponent from "@/components/docs/DocsComponent";

export const metadata: Metadata = {
  title: "Dashboard - Drift",
  description: "Documentation for Drift - Next.js starter kit with Supabase and Paddle integration",
};

export default function DashboardPage() {
  return <DocsComponent />;
}