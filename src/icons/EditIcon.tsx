// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '../utils/classnames.js'

import { iconVariants } from './iconVariants.js'
import type { IconProps } from './types.js'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.325 21.675q-.43-.43-.291-1.014l1.11-5.304L15.864 2.639Q16.501 2 17.446 2q.944 0 1.583.639L21.36 4.97q.639.64.639 1.583 0 .945-.639 1.583L8.643 20.855l-5.304 1.111q-.583.139-1.014-.291m1.948-1.948 3.377-.707 8.655-8.655-2.67-2.67L4.98 16.35zM14.695 6.635l2.67 2.67 2.582-2.582a.3.3 0 0 0 .032-.038l.002-.002.005-.01c0-.002.014-.035.014-.119a.3.3 0 0 0-.014-.12l-.007-.011a.3.3 0 0 0-.032-.037l-2.332-2.333a.3.3 0 0 0-.038-.032l-.003-.002-.009-.005a.3.3 0 0 0-.12-.014c-.083 0-.116.013-.119.014l-.012.007a.3.3 0 0 0-.037.032z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgEditIcon = ({ className, size, ...props }: IconProps) => (
  <Svg
    className={cn(
      iconVariants({
        size,
      }),
      className
    )}
    {...props}
  />
)

export default SvgEditIcon
