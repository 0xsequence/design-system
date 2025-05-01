// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

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
      d="M10.135 3.21c.707-1.613 3.023-1.613 3.73 0l1.797 4.095 4.495.424c1.771.167 2.487 2.343 1.153 3.507l-3.385 2.955.982 4.356c.387 1.717-1.486 3.062-3.019 2.168L12 18.445l-3.888 2.27c-1.533.894-3.406-.45-3.019-2.168l.982-4.356-3.385-2.955c-1.334-1.164-.618-3.34 1.153-3.507l4.495-.424zm3.661 4.895L12 4.01l-1.796 4.095A2.03 2.03 0 0 1 8.53 9.306l-4.495.424 3.385 2.954c.555.484.8 1.229.639 1.944l-.982 4.356 3.888-2.269a2.05 2.05 0 0 1 2.068 0l3.888 2.27-.982-4.357a2 2 0 0 1 .64-1.944l3.384-2.954-4.495-.424a2.03 2.03 0 0 1-1.673-1.201"
      clipRule="evenodd"
    />
  </svg>
)

const SvgStarIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgStarIcon
