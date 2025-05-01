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
      d="M18.46 6.009a4.8 4.8 0 0 1-2.044-3.136A5 5 0 0 1 16.337 2h-3.351l-.006 13.78c-.056 1.543-1.294 2.782-2.812 2.782-.471 0-.916-.121-1.306-.332a2.9 2.9 0 0 1-1.51-2.559c0-1.594 1.263-2.89 2.816-2.89.29 0 .568.049.832.133v-3.51a6 6 0 0 0-.832-.062c-3.4 0-6.168 2.84-6.168 6.33a6.37 6.37 0 0 0 2.634 5.18A6.03 6.03 0 0 0 10.169 22c3.401 0 6.168-2.84 6.168-6.329V8.684A7.83 7.83 0 0 0 21 10.222V6.784a4.55 4.55 0 0 1-2.54-.775"
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
