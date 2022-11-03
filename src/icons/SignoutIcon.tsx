// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fontSize="inherit"
    overflow="visible"
    {...props}
  >
    <path
      d="M7 15H4.333A1.334 1.334 0 0 1 3 13.667V4.333A1.333 1.333 0 0 1 4.333 3H7M11.667 12.333 15 9l-3.333-3.333M15 9H7"
      stroke="currentcolor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgSignoutIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgSignoutIcon
