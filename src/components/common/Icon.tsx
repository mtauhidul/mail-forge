/**
 * Central icon registry — maps string keys to Lucide line icons.
 * All icons render at the given size in the current color (inherit or passed via className/style).
 */
import {
  BookOpen,
  Briefcase,
  ClipboardList,
  Clock,
  GitBranch,
  Globe,
  Headphones,
  LayoutGrid,
  Mail,
  MessageCircleWarning,
  PenLine,
  RefreshCw,
  Rocket,
  Search,
  Sliders,
  Sparkles,
  TrendingDown,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const iconMap: Record<string, LucideIcon> = {
  // Problem
  clock: Clock,
  refresh: RefreshCw,
  warning: MessageCircleWarning,
  globe: Globe,
  'trending-down': TrendingDown,

  // How It Works
  clipboard: ClipboardList,
  pen: PenLine,
  sparkles: Sparkles,

  // Features
  'layout-grid': LayoutGrid,
  sliders: Sliders,
  'globe-2': Globe,
  mail: Mail,
  'git-branch': GitBranch,
  zap: Zap,

  // Use Cases
  rocket: Rocket,
  briefcase: Briefcase,
  'book-open': BookOpen,
  search: Search,
  headphones: Headphones,
}

interface IconProps {
  name: string
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function Icon({ name, size = 20, className = '', style }: IconProps) {
  const LucideComponent = iconMap[name]
  if (!LucideComponent) return null
  return (
    <LucideComponent
      width={size}
      height={size}
      strokeWidth={1.75}
      className={className}
      style={style}
    />
  )
}
