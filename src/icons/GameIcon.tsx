// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '~/utils/classnames.js'

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
      d="M12.969 5.75a2 2 0 1 0-1.938 0q-.03.12-.031.25v6a1 1 0 1 0 2 0V6q0-.13-.031-.25"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.188 10.322 9 7.74v2.189l-4.187 1.86 7.212 3.607 7.162-3.184L15 10.119V7.882l5.894 2.947A2 2 0 0 1 22 12.618v3.264a2 2 0 0 1-1.106 1.789l-8 4a2 2 0 0 1-1.788 0l-8-4A2 2 0 0 1 2 15.882V12.15a2 2 0 0 1 1.188-1.828M20 14.04l-7.163 3.183a2 2 0 0 1-1.706-.039L4 13.618v2.264l8 4 8-4z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgGameIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgGameIcon
