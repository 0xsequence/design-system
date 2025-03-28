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
      d="M6.293 2.293A1 1 0 0 0 6 3v5a1 1 0 0 0 1 1h2.865l1.367 1.641a1 1 0 0 0 1.536 0L14.135 9H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-.707.293m4.463 4.801A1 1 0 0 0 10.333 7H8V4h8v3h-2.333a1 1 0 0 0-.769.359L12 8.438l-.9-1.08a1 1 0 0 0-.344-.264"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.192 16.737a3.5 3.5 0 1 0-5.383 0c-1.436.848-2.47 2.348-2.792 4.08A1 1 0 0 0 3 22h18a1 1 0 0 0 .983-1.183c-.323-1.732-1.356-3.232-2.791-4.08q.095-.113.18-.235a3.5 3.5 0 1 0-5.563.235A5.8 5.8 0 0 0 12 18.44a5.8 5.8 0 0 0-1.808-1.702M7.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m9 2c-1.293 0-2.478.78-3.112 2h6.224c-.634-1.22-1.82-2-3.112-2m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-9 2c-1.293 0-2.478.78-3.112 2h6.224c-.634-1.22-1.82-2-3.112-2"
      clipRule="evenodd"
    />
  </svg>
)

const SvgContactDiscussionIcon = ({
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

export default SvgContactDiscussionIcon
