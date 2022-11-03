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
      d="m13 5-8 8M5 5l8 8"
      stroke="currentcolor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgCloseIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgCloseIcon
