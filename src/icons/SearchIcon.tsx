import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const SearchIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <ellipse cx="5.7619" cy="6.59131" rx="4.7619" ry="4.88281" strokeWidth="2" stroke="currentcolor" />
      <line
        y1="-1"
        x2="9.54853"
        y2="-1"
        transform="matrix(0.698187 0.715915 -0.698187 0.715915 7.6665 10.4976)"
        strokeWidth="2"
        strokeLinejoin="round"
        stroke="currentcolor"
      />
    </svg>
  )
})
