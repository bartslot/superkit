// components/CodeBlock.tsx
import { useState } from "react";
import Button from "../components/ui/button";

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
      <Button
        onClick={handleCopy}
        size="sm"
        variant="outline"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
