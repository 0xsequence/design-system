import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const SettingsIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M6 5.375H5.875V5.5V6.25C5.875 6.59659 5.59659 6.875 5.25 6.875H4.75C4.40341 6.875 4.125 6.59659 4.125 6.25V5.5V5.375H4H3.375C3.23779 5.375 3.125 5.26221 3.125 5.125V4.875C3.125 4.73779 3.23779 4.625 3.375 4.625H4H4.125V4.5V3.75C4.125 3.40341 4.40341 3.125 4.75 3.125H5.25C5.59659 3.125 5.875 3.40341 5.875 3.75V4.5V4.625H6H10.625C10.7622 4.625 10.875 4.73779 10.875 4.875V5.125C10.875 5.26221 10.7622 5.375 10.625 5.375H6ZM10 9.375H9.875V9.5V10.25C9.875 10.5966 9.59659 10.875 9.25 10.875H8.75C8.40341 10.875 8.125 10.5966 8.125 10.25V9.5V9.375H8H3.375C3.23779 9.375 3.125 9.26221 3.125 9.125V8.875C3.125 8.73779 3.23779 8.625 3.375 8.625H8H8.125V8.5V7.75C8.125 7.40341 8.40341 7.125 8.75 7.125H9.25C9.59659 7.125 9.875 7.40341 9.875 7.75V8.5V8.625H10H10.625C10.7622 8.625 10.875 8.73779 10.875 8.875V9.125C10.875 9.26221 10.7622 9.375 10.625 9.375H10ZM1.5 0.125H12.5C13.2591 0.125 13.875 0.740911 13.875 1.5V12.5C13.875 13.2591 13.2591 13.875 12.5 13.875H1.5C0.740911 13.875 0.125 13.2591 0.125 12.5V1.5C0.125 0.740911 0.740911 0.125 1.5 0.125ZM1.6875 12.625H12.3125C12.4847 12.625 12.625 12.4847 12.625 12.3125V1.6875C12.625 1.51534 12.4847 1.375 12.3125 1.375H1.6875C1.51534 1.375 1.375 1.51534 1.375 1.6875V12.3125C1.375 12.4847 1.51534 12.625 1.6875 12.625Z"
        fill="currentcolor"
      />
    </svg>
  )
})
