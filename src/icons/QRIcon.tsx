import { memo } from 'react'

interface SVGProps {
  style?: any
  className?: string
}

export const QRIcon = memo(({ style, className }: SVGProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0)">
        <path d="M0.431152 0V4.13194H4.61711V0H0.431152ZM3.42112 2.95139H1.62714V1.18056H3.42112V2.95139Z" fill="currentcolor" />
        <path
          d="M0.431152 10.0347V14.1666H4.61711V10.0347H0.431152ZM3.42112 12.9861H1.62714V11.2152H3.42112V12.9861Z"
          fill="currentcolor"
        />
        <path d="M10.5972 0V4.13194H14.7831V0H10.5972ZM13.5871 2.95139H11.7932V1.18056H13.5871V2.95139Z" fill="currentcolor" />
        <path d="M13.5871 5.3125V8.85417H10.5972V10.0347H14.7831V5.3125H13.5871Z" fill="currentcolor" />
        <path d="M10.5972 11.2153V14.1667H11.7932V12.3959H13.5871V14.1667H14.7831V11.2153H10.5972Z" fill="currentcolor" />
        <path d="M5.81299 0V1.18056H8.20496V4.13194H9.40095V0H5.81299Z" fill="currentcolor" />
        <path
          d="M8.20496 5.3125V7.67361H5.81299V11.2153H8.20496V14.1667H9.40095V10.0347H7.00898V8.85417H9.40095V6.49306H10.5969V7.67361H11.7929V5.3125H8.20496Z"
          fill="currentcolor"
        />
        <path d="M7.00898 12.396H5.81299V14.1668H7.00898V12.396Z" fill="currentcolor" />
        <path d="M4.61722 7.67383H2.82324V8.85438H4.61722V7.67383Z" fill="currentcolor" />
        <path d="M5.8131 2.36133V5.31272H0.431152V8.85438H1.62714V6.49327H7.00909V2.36133H5.8131Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14.3519" height="14.1667" transform="translate(0.431152)" />
        </clipPath>
      </defs>
    </svg>
  )
})
