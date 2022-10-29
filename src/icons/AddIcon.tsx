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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.016 4a1 1 0 0 0-2 0v4.016H4a1 1 0 0 0 0 2h4.016v4.016a1 1 0 0 0 2 0v-4.016h4.016a1 1 0 0 0 0-2h-4.016V4Z"
      fill="currentcolor"
    />
  </svg>
)

const SvgAddIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgAddIcon
