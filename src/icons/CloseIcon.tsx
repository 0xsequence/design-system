import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const CloseIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect
        width="15.0435"
        height="2.00581"
        transform="matrix(0.70506 -0.709147 0.70506 0.709147 0 10.668)"
        fill="currentcolor"
      />
      <rect
        width="15.0435"
        height="2.00581"
        transform="matrix(0.70506 0.709147 -0.70506 0.709147 1.41455 0)"
        fill="currentcolor"
      />
    </svg>
  )
})
