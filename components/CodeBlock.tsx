// components/CodeBlock.tsx
import { useState } from "react";

interface CodeBlockProps {
  children: string;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative group">
      <pre className="overflow-x-auto rounded-lg bg-gray-800 p-4 text-sm text-gray-100">
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="
          absolute top-2 right-2
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          border border-gray-400
          bg-transparent
          px-2 py-1 text-xs font-medium
          rounded
          focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-300
        "
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
