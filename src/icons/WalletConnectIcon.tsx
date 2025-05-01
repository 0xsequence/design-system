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
      d="M6.097 7.94c3.258-3.475 8.548-3.475 11.806 0l.393.421a.46.46 0 0 1 0 .629l-1.342 1.43a.198.198 0 0 1-.297 0l-.538-.574c-2.278-2.425-5.96-2.425-8.238 0l-.576.615a.198.198 0 0 1-.297 0l-1.341-1.43a.46.46 0 0 1 0-.629zm14.584 2.956 1.196 1.272a.46.46 0 0 1 0 .628l-5.385 5.741a.4.4 0 0 1-.588 0l-3.822-4.076a.1.1 0 0 0-.145 0l-3.822 4.076a.4.4 0 0 1-.588 0l-5.404-5.74a.46.46 0 0 1 0-.63l1.196-1.27a.4.4 0 0 1 .589 0l3.821 4.075a.1.1 0 0 0 .146 0l3.821-4.076a.4.4 0 0 1 .589 0l3.821 4.076a.1.1 0 0 0 .146 0l3.821-4.076a.42.42 0 0 1 .608 0"
    />
  </svg>
)

const SvgWalletConnectIcon = ({
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

export default SvgWalletConnectIcon
