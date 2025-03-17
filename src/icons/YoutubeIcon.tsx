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
      d="M17.986 5.989a2.09 2.09 0 0 0-1.473-1.474C15.213 4.167 10 4.167 10 4.167s-5.212 0-6.511.348A2.09 2.09 0 0 0 2.015 5.99C1.667 7.288 1.667 10 1.667 10s0 2.712.348 4.011a2.09 2.09 0 0 0 1.474 1.474c1.299.348 6.511.348 6.511.348s5.212 0 6.511-.348a2.09 2.09 0 0 0 1.474-1.474c.348-1.299.348-4.011.348-4.011s0-2.712-.348-4.011zm-9.653 6.51V7.5l4.33 2.5z"
    />
  </svg>
)

const SvgYoutubeIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgYoutubeIcon
