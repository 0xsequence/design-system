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
      fillRule="evenodd"
      d="M18.987 2.599C19.73 1.856 21 2.382 21 3.432v16.636c0 1.05-1.27 1.576-2.013.833l-3.02-3.02A6.43 6.43 0 0 0 11.426 16H7.25a4.25 4.25 0 0 1 0-8.5h4.175a6.43 6.43 0 0 0 4.542-1.882zM19 5.414l-1.618 1.618A8.4 8.4 0 0 1 15.5 8.45v6.602a8.4 8.4 0 0 1 1.882 1.417L19 18.086zM13.5 9.24c-.673.171-1.37.26-2.075.26H7.25a2.25 2.25 0 0 0 0 4.5h4.175c.705 0 1.402.089 2.075.26z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m9.106 20.447-1.763-3.525q.443.077.907.078h1.368l1.277 2.553a1 1 0 1 1-1.79.894"
    />
  </svg>
)

const SvgMegaphoneIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgMegaphoneIcon
