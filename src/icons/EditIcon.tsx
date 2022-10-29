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
      d="M15 5.927 12.073 3l-2.028 2.028 2.927 2.927L15 5.927ZM3 15l3.22-.293 5.54-5.54L8.833 6.24l-5.54 5.54L3 15Z"
      fill="currentcolor"
    />
  </svg>
)

const SvgEditIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgEditIcon
