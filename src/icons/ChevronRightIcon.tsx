// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '../components/Box/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7 13 4-4-4-4"
      stroke="currentcolor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgChevronRightIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgChevronRightIcon
