interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function GradientText({
  children,
  className = '',
  as: Tag = 'span',
}: GradientTextProps) {
  const El = Tag as React.ElementType
  return <El className={`text-gradient ${className}`}>{children}</El>
}
