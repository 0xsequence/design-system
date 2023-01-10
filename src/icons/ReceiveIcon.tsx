// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.668 11.418v5.75h13.5v-5.75h-1.5v4.25h-10.5v-4.25h-1.5Zm11.28-2.47-1.06-1.06-2.72 2.72v-8.19h-1.5v8.19l-2.72-2.72-1.06 1.06 4.53 4.53 4.53-4.53Z"
      fill="currentColor"
    />
  </svg>
)

const SvgReceiveIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgReceiveIcon
