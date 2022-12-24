// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.66 2.136 2.387 11.004c-.388.261-.505.809-.26 1.224a.82.82 0 0 0 .672.414l.004.004.005.004h2.946c.567 0 1.114-.223 1.537-.625l4.634-4.412a.687.687 0 0 1 .848-.115c.35.205.477.675.284 1.049l-1.637 2.807c-.61 1.044-.402 2.407.484 3.193l3.194 2.831.293.257.24.227.08.058.075.04a.342.342 0 0 0 .16.04h.222c.46 0 .831-.397.831-.887V2.893c0-.48-.356-.87-.8-.887a.785.785 0 0 0-.54.13Z"
      fill="currentColor"
    />
  </svg>
)

const SvgSendIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgSendIcon
