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
      d="M15.612 3.867c.221 0 .455.012.68.036h.007a6.2 6.2 0 0 1 4.053 2.173l.19.233a6.37 6.37 0 0 1 1.317 4.167 6.4 6.4 0 0 1-1.847 4.252l-.018.018-.02.017-6.02 5.486-.002.002-.014.014a2.97 2.97 0 0 1-4.02.003l-6.032-5.495-.037-.035a6.4 6.4 0 0 1-1.847-4.269l-.004-.3a6.4 6.4 0 0 1 1.51-4.092 6.23 6.23 0 0 1 4.053-2.173l.005-.001a6.19 6.19 0 0 1 4.36 1.18l.004.001.005-.002a6.12 6.12 0 0 1 3.676-1.215m0 2c-.9 0-1.76.28-2.488.823l-.007.006-1.186.87-1.187-.87-.005-.004a4.19 4.19 0 0 0-2.955-.801 4.23 4.23 0 0 0-2.748 1.476v.002A4.42 4.42 0 0 0 4 10.396a4.4 4.4 0 0 0 1.259 2.923l6.005 5.472.004.003c.369.34.935.341 1.306.005l.004-.003.017-.015 6.004-5.472a4.4 4.4 0 0 0 1.26-2.914v-.006a4.37 4.37 0 0 0-.904-2.86l-.13-.16A4.2 4.2 0 0 0 16.08 5.89a5 5 0 0 0-.468-.023"
    />
  </svg>
)

const SvgHeartIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgHeartIcon
