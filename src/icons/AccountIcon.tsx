import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const AccountIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="-2 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M6.25 7.14286C8.22266 7.14286 9.82143 5.54409 9.82143 3.57143C9.82143 1.59877 8.22266 0 6.25 0C4.27734 0 2.67857 1.59877 2.67857 3.57143C2.67857 5.54409 4.27734 7.14286 6.25 7.14286ZM8.75 8.03572H8.28404C7.66462 8.32031 6.97545 8.48214 6.25 8.48214C5.52455 8.48214 4.83817 8.32031 4.21596 8.03572H3.75C1.67969 8.03572 0 9.7154 0 11.7857V12.9464C0 13.6858 0.599888 14.2857 1.33929 14.2857H11.1607C11.9001 14.2857 12.5 13.6858 12.5 12.9464V11.7857C12.5 9.7154 10.8203 8.03572 8.75 8.03572Z"
        fill="currentcolor"
      />
    </svg>
  )
})
