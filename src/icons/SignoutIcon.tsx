// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
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
      d="M8.333 16H5.444c-.383 0-.75-.14-1.02-.39-.272-.25-.424-.59-.424-.943V5.333c0-.353.152-.692.423-.942S5.061 4 5.444 4h2.89m5.055 9.333L17 10m0 0-3.611-3.333M17 10H8.333"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgSignoutIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgSignoutIcon
