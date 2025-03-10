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
      fillRule="evenodd"
      d="M2.5 3.468C2.5 3.21 2.724 3 3 3h2.17c.72 0 1.338.48 1.472 1.144l1.69 8.365c.045.221.25.381.49.381h8.165c.276 0 .5.21.5.469 0 .258-.224.468-.5.468H8.823c-.72 0-1.339-.48-1.473-1.143L5.66 4.318a.49.49 0 0 0-.49-.381H3c-.276 0-.5-.21-.5-.469"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18 5.342H6.41l1.086 5.481h9.578c.24 0 .445-.16.49-.38l.927-4.545c.059-.289-.177-.556-.49-.556M10.089 15.856c0 .632-.546 1.144-1.22 1.144s-1.22-.512-1.22-1.144.546-1.144 1.22-1.144 1.22.512 1.22 1.144M16.627 15.856c0 .632-.547 1.144-1.22 1.144-.674 0-1.22-.512-1.22-1.144s.546-1.144 1.22-1.144 1.22.512 1.22 1.144"
    />
  </svg>
)

const SvgCart = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgCart
