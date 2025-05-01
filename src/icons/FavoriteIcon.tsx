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
      d="m6 18.763 4.278-3.301a2.82 2.82 0 0 1 3.444 0L18 18.763V5.086C18 4.554 17.532 4 16.8 4H7.2C6.468 4 6 4.554 6 5.086zM4 5.086v16.141c0 .647.776 1.007 1.3.602l6.2-4.784a.82.82 0 0 1 1 0l6.2 4.784c.524.405 1.3.045 1.3-.602V5.087C20 3.381 18.567 2 16.8 2H7.2C5.433 2 4 3.382 4 5.086"
      clipRule="evenodd"
    />
  </svg>
)

const SvgFavoriteIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgFavoriteIcon
