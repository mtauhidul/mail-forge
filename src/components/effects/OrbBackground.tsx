interface OrbBackgroundProps {
  className?: string
  orb1ClassName?: string
  orb2ClassName?: string
}

export function OrbBackground({
  className = '',
  orb1ClassName = '',
  orb2ClassName = '',
}: OrbBackgroundProps) {
  return (
    <div className={`orb-container ${className}`} aria-hidden="true">
      <div className={`orb orb-1 ${orb1ClassName}`} />
      <div className={`orb orb-2 ${orb2ClassName}`} />
    </div>
  )
}
