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
      d="M15.384 5.007a4 4 0 0 1-1.704-2.613 4 4 0 0 1-.066-.727h-2.793l-.004 11.483c-.047 1.286-1.079 2.318-2.343 2.318-.393 0-.764-.1-1.09-.277a2.42 2.42 0 0 1-1.258-2.132c0-1.328 1.053-2.408 2.348-2.408.241 0 .473.04.692.11V7.838a5 5 0 0 0-.692-.052c-2.835 0-5.14 2.366-5.14 5.274a5.31 5.31 0 0 0 2.194 4.318c.835.602 1.85.956 2.946.956 2.834 0 5.14-2.366 5.14-5.274V7.236A6.53 6.53 0 0 0 17.5 8.518V5.653a3.8 3.8 0 0 1-2.116-.646"
    />
  </svg>
)

const SvgTiktokIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgTiktokIcon
