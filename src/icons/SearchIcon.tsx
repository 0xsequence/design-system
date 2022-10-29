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
      d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 10.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414Z"
      fill="currentcolor"
    />
  </svg>
)

const SvgSearchIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgSearchIcon
