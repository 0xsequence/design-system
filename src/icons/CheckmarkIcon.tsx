import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const CheckmarkIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M12.5022 0.09375C12.5633 0.03125 12.6245 0 12.7467 0C12.8384 0 12.9301 0.03125 13.0218 0.09375L13.8777 1C13.9389 1.0625 14 1.15625 14 1.25C14 1.375 13.9389 1.46875 13.8777 1.53125L4.70742 10.9062C4.64629 10.9687 4.55458 11 4.46288 11C4.34061 11 4.24891 10.9687 4.18777 10.9062L0.122271 6.71875C0.0305677 6.65625 0 6.59375 0 6.46875C0 6.375 0.0305677 6.28125 0.122271 6.1875L0.978166 5.3125C1.0393 5.25 1.131 5.1875 1.25328 5.1875C1.34498 5.1875 1.43668 5.25 1.49782 5.3125L4.46288 8.34375L12.5022 0.09375Z"
        fill="currentcolor"
      />
    </svg>
  )
})
