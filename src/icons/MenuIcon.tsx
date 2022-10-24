import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const MenuIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect width="15" height="1.8" fill="currentcolor" />
      <rect y="7.19989" width="15" height="1.8" fill="currentcolor" />
    </svg>
  )
})
