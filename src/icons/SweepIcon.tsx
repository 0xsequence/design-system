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
      d="M16.88 2.575a1 1 0 0 1 .545 1.306L14.2 11.71l2.808 2.407c.274.236.465.572.51.953.433 3.697-1.727 6.249-3.31 7.181a1.46 1.46 0 0 1-1.308.08l-2.367-.996c.11-.243.2-.514.255-.777l.004-.017c.07-.344.081-.673.004-.906-.191.084-.438.197-.709.321-.443.203-.949.435-1.37.614l-3.881-1.634c-.669-.281-.926-.917-.93-1.428a1.67 1.67 0 0 1 .754-1.42c1.39-.886 1.925-2.418 1.908-3.454C6.556 11.879 7.13 11 8.123 11h4.207l3.245-7.88a1 1 0 0 1 1.306-.545m-4.24 17.478c.037-.679-.151-1.518-.583-2.383-.252-.506-.9-.607-1.37-.294-.734.488-1.362.828-1.91 1.05l-2.489-1.048c1.313-1.06 1.99-2.52 2.204-3.804L15.56 16.4c-.133 1.977-1.261 3.359-2.14 3.98z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M7.436 3.304a.465.465 0 0 0-.872 0l-.536 1.449a.47.47 0 0 1-.275.275l-1.45.536a.465.465 0 0 0 0 .872l1.45.536a.47.47 0 0 1 .275.275l.536 1.45c.15.404.722.404.872 0l.536-1.45a.47.47 0 0 1 .275-.275l1.45-.536a.465.465 0 0 0 0-.872l-1.45-.536a.47.47 0 0 1-.275-.275z"
    />
  </svg>
)

const SvgSweepIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSweepIcon
