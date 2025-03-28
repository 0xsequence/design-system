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
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.5 8A1.5 1.5 0 0 0 7 9.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 8.5 8M11 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0M15.5 8A1.5 1.5 0 0 0 14 9.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 15.5 8"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.227 2A7.227 7.227 0 0 0 2 9.227v5.47c0 1.548 1.7 2.48 3 1.67v2.367A3.266 3.266 0 0 0 8.266 22h7.468A3.266 3.266 0 0 0 19 18.734v-2.367c1.3.81 3-.122 3-1.67v-5.47A7.227 7.227 0 0 0 14.773 2zM17 18.734c0 .7-.567 1.266-1.266 1.266H15v-2a1 1 0 1 0-2 0v2h-2v-2a1 1 0 1 0-2 0v2h-.734C7.566 20 7 19.433 7 18.734v-2.431c0-1.548-1.7-2.48-3-1.67V9.227A5.227 5.227 0 0 1 9.227 4h5.546A5.227 5.227 0 0 1 20 9.227v5.406c-1.3-.81-3 .122-3 1.67z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgSkullIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSkullIcon
