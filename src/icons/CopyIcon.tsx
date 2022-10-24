import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const CopyIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="0.5" y="4.03857" width="9.15385" height="12.9615" stroke="currentcolor" />
      <path d="M9.51916 13.6923H12.6922V1H3.80762V4.17308" stroke="currentcolor" />
    </svg>
  )
})
