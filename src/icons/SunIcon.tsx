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
      d="M4.633 10.75a5.878 5.878 0 0 1 .008-1.5H2.202v1.5h2.431ZM5.814 6.456A5.854 5.854 0 0 1 6.88 5.401L5.139 3.66l-1.06 1.06 1.735 1.736ZM4.078 15.28l1.711-1.711c.306.398.662.755 1.058 1.063L5.14 16.34l-1.06-1.06ZM9.668 15.802v2.414h1.5V15.8a5.876 5.876 0 0 1-1.5.003ZM13.98 14.623l1.718 1.717 1.06-1.06-1.721-1.723c-.305.4-.66.758-1.056 1.066ZM16.184 10.75h2.45v-1.5h-2.457a5.882 5.882 0 0 1 .007 1.5ZM15.012 6.467l1.747-1.747-1.061-1.06-1.75 1.75c.399.305.756.66 1.064 1.057ZM11.168 4.258V1.784h-1.5v2.472a5.875 5.875 0 0 1 1.5.002Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.418 12.504a2.504 2.504 0 1 0 0-5.008 2.504 2.504 0 0 0 0 5.008Zm0 1.5a4.004 4.004 0 1 0 0-8.008 4.004 4.004 0 0 0 0 8.008Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgSunIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSunIcon
