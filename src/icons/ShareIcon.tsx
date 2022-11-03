// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fontSize="inherit"
    overflow="visible"
    {...props}
  >
    <path
      d="M15 11v2.667A1.334 1.334 0 0 1 13.667 15H4.333A1.334 1.334 0 0 1 3 13.667V11M12.333 6.333 9 3 5.667 6.333M9 3v8"
      stroke="currentcolor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgShareIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgShareIcon
