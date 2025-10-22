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
      d="M8.5 12.75a.75.75 0 0 1-.75-.75v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 1.5 0v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-.75.75M14.781 8.531a.75.75 0 0 0 1.5 0V8.5a.75.75 0 0 0-1.5 0zM15.531 12.75a.75.75 0 0 1-.75-.75v-.031a.75.75 0 1 1 1.5 0V12a.75.75 0 0 1-.75.75M13.031 10.25a.75.75 0 0 0 1.5 0v-.031a.75.75 0 1 0-1.5 0zM17.281 11a.75.75 0 0 1-.75-.75v-.031a.75.75 0 1 1 1.5 0v.031a.75.75 0 0 1-.75.75"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m1.956 16.5.551-7.443A6 6 0 0 1 8.491 3.5h6.974a6 6 0 0 1 5.984 5.557L22 16.5c.196 2.642-2.878 4.222-4.912 2.527L13.456 16H10.5l-3.632 3.027c-2.035 1.695-5.108.115-4.912-2.527m2.546-7.295-.552 7.443c-.065.88.96 1.407 1.638.842l3.632-3.026A2 2 0 0 1 10.5 14h2.956a2 2 0 0 1 1.28.464l3.632 3.026c.678.566 1.703.039 1.638-.842l-.552-7.443A4 4 0 0 0 15.465 5.5H8.491A4 4 0 0 0 4.5 9.205"
      clipRule="evenodd"
    />
  </svg>
)

const SvgControllerIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgControllerIcon
