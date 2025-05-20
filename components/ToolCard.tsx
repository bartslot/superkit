// File: src/components/ToolCard.tsx
import Link from 'next/link'
import { ArrowRight, Palette, Link as LinkIcon, Droplet, Lock } from 'lucide-react'

type Tool = {
  id: string
  name: string
  description: string
  icon: string
  link: string
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const getIcon = () => {
    switch (tool.icon) {
      case 'Palette':
        return <Palette className="h-6 w-6 text-primary-500" />
      case 'Link':
        return <LinkIcon className="h-6 w-6 text-primary-500" />
      case 'Droplet':
        return <Droplet className="h-6 w-6 text-primary-500" />
      case 'Lock':
        return <Lock className="h-6 w-6 text-primary-500" />
      default:
        return <ArrowRight className="h-6 w-6 text-primary-500" />
    }
  }

  return (
    <Link href={tool.link}>
      <div className="card h-full hover:shadow-md transition-shadow border-l-4 border-l-primary-500">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
        <p className="text-secondary-600 text-sm mb-4">{tool.description}</p>
        <div className="flex items-center text-primary-600 text-sm font-medium">
          Use Tool <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}