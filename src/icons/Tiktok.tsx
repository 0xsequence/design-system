// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

import { iconVariants } from './iconVariants'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.227 0h-3.37v13.623c0 1.623-1.297 2.957-2.91 2.957s-2.91-1.334-2.91-2.957c0-1.594 1.268-2.898 2.823-2.956v-3.42c-3.428.057-6.193 2.869-6.193 6.376C1.667 17.16 4.49 20 7.976 20c3.485 0 6.309-2.87 6.309-6.377V6.638a7.8 7.8 0 0 0 4.465 1.507v-3.42C16.215 4.638 14.227 2.55 14.227 0"
    />
  </svg>
)

const SvgTiktok = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgTiktok
