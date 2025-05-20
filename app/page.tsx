import { ToolCard } from '@/components/features/dashboard/ToolCard';
import { Link as LinkIcon } from 'lucide-react';

export default function DashboardPage() {
  const tools = [
    {
      title: 'URL Shortener',
      description: 'Shorten long URLs into more manageable links. Fast and easy to use.',
      href: '/url-shortener',
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      tags: ['Utility', 'Links'],
    },
    // Add more tools here as they are developed
    // {
    //   title: 'JSON Formatter',
    //   description: 'Format and validate JSON data. Supports syntax highlighting.',
    //   href: '/json-formatter',
    //   icon: <Code className="h-8 w-8 text-primary" />,
    //   tags: ['Development', 'Data'],
    // },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">Welcome to Toolbox</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Your collection of handy utilities designed to simplify common tasks. Select a tool below to get started.
      </p>
      
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
              tags={tool.tags}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No tools available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
