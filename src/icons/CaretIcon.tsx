import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const CaretIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M12.0001 16.6667L7.0926 9.16675L16.9076 9.16675L12.0001 16.6667Z" fill="currentcolor" />
    </svg>
  )
})
