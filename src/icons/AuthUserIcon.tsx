// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="M2 4a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H4v4a1 1 0 0 1-2 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.71 12.715a3.5 3.5 0 1 0-5.42 0c-1.122.628-2.046 1.627-2.674 2.819a1 1 0 1 0 1.769.932C9.205 14.911 10.565 14 12 14s2.796.91 3.616 2.466a1 1 0 1 0 1.769-.932c-.628-1.192-1.552-2.19-2.675-2.82M13.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20 22a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2zM22 4a2 2 0 0 0-2-2h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0zM4 22a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2z"
    />
  </svg>
)

const SvgAuthUserIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgAuthUserIcon
