import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const ScanIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <line x1="6" y1="11" x2="16" y2="11" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11" y1="7" x2="11" y2="15" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 1H4C2.34315 1 1 2.34315 1 4V6M16 1H18C19.6569 1 21 2.34315 21 4V6M6 21H4C2.34315 21 1 19.6569 1 18V16M16 21H18C19.6569 21 21 19.6569 21 18V16"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
})
