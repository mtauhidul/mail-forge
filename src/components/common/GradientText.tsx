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
  return (
    // @ts-expect-error dynamic tag
    <Tag className={`text-gradient ${className}`}>{children}</Tag>
  )
}
