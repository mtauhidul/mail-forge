interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'accent' | 'success' | 'warning' | 'muted'
  dot?: boolean
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  accent:
    'bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--border-accent)]',
  success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  muted: 'bg-[var(--surface)] text-[var(--text-muted)] border-[var(--border)]',
}

export function Badge({
  children,
  className = '',
  variant = 'accent',
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {children}
    </span>
  )
}
