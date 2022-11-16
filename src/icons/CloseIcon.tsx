// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5 5 15M5 5l10 10"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgCloseIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgCloseIcon
