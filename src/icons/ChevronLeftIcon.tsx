import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const ChevronLeftIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path opacity="0.9" d="M7 1L2 5.98155L7 11" stroke="currentcolor" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  )
})
