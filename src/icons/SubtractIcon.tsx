import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const SubtractIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="-1 -1 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect
        x="-0.199421"
        y="-0.199421"
        width="11.6545"
        height="1.90061"
        transform="matrix(0.999996 -0.00289014 -0.00289014 0.999996 1.5419 6.03653)"
        strokeWidth="0.4"
        fill="currentcolor"
      />
    </svg>
  )
})
