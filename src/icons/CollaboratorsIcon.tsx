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
      fillRule="evenodd"
      d="M14.71 7.715a3.5 3.5 0 1 0-5.42 0c-1.123.628-2.047 1.627-2.675 2.819a1 1 0 1 0 1.77.932C9.205 9.911 10.564 9 12 9s2.796.91 3.615 2.466a1 1 0 1 0 1.77-.932c-.628-1.192-1.552-2.19-2.675-2.819M13.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 16.5c0 .77-.248 1.48-.669 2.058A6.4 6.4 0 0 1 12 19.571a6.4 6.4 0 0 1 1.669-1.013 3.5 3.5 0 1 1 5.663 0q.091.038.182.08c.907.411 1.689 1.006 2.27 1.742a1 1 0 0 1-1.568 1.24C19.476 20.685 18.12 20 16.5 20c-1.612 0-2.962.678-3.703 1.605a1 1 0 0 1-.367.298 1 1 0 0 1-1.226-.298C10.462 20.678 9.112 20 7.5 20c-1.62 0-2.976.685-3.715 1.62a1 1 0 1 1-1.57-1.24c.621-.785 1.47-1.41 2.454-1.822A3.5 3.5 0 1 1 11 16.5M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
)

const SvgCollaboratorsIcon = ({
  className,
  size = 'sm',
  ...props
}: IconProps) => (
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

export default SvgCollaboratorsIcon
