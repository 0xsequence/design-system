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
      d="M6 7a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.707 2.293a1 1 0 1 0-1.414 1.414l1.836 1.837A2 2 0 0 0 20 8.937V18.5a1.5 1.5 0 0 1-2.999 0v-2.6a5 5 0 0 0-4-4.9V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6.93c1.165.412 2 1.524 2 2.83v2.6a3.5 3.5 0 1 0 7 0V6.989a1 1 0 0 0-.076-.372l-.424-.492-.27-.309zM4 4h7v16H4z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgGasTankIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgGasTankIcon
