import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function CheckoutHeader() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" passHref>
        <button
          aria-label="Go back"
          className="h-8 w-8 p-0 rounded-sm bg-[#182222] border border-border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
      </Link>
      <h1 className="text-bold text-2xl">⚡uperKit</h1>
    </div>
);
}
