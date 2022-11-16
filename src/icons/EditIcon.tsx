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
      d="M17 6.415 13.585 3 11.22 5.366l3.415 3.415L17 6.415ZM3 17l3.756-.342 6.464-6.463L9.805 6.78l-6.464 6.464L3 17Z"
      fill="currentColor"
    />
  </svg>
)

const SvgEditIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgEditIcon
