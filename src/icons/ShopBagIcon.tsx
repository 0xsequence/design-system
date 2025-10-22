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
      d="M7 7a5 5 0 0 1 10 0h2.2c.994 0 1.8.895 1.8 2v11c0 1.105-.806 2-1.8 2H4.8c-.994 0-1.8-.895-1.8-2V9c0-1.105.806-2 1.8-2zm5-3a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3m7.2 6c0-.552-.403-1-.9-1H17v1.5a1 1 0 1 1-2 0V9H9v1.5a1 1 0 1 1-2 0V9H5.7c-.497 0-.9.448-.9 1v9c0 .552.403 1 .9 1h12.6c.497 0 .9-.448.9-1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgShopBagIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgShopBagIcon
