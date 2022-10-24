import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const SwapIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M23 21L8 21C5.79086 21 4 19.2091 4 17L4 15"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2998 24.2002L23.7998 20.7002L20.2998 17.2002"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.7998 7L19.7998 7C22.0089 7 23.7998 8.79086 23.7998 11L23.7998 12"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 3.3999L4 6.8999L7.5 10.3999"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})
