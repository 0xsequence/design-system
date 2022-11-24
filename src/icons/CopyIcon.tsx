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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.395 7.109h-5.96v9.431h5.96V7.11ZM4 5.649V18h8.83V5.65H4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.595 2H16v12.688h-3.72v-1.46h2.285V3.46H8.03v2.587H6.595V2Z"
      fill="currentColor"
    />
  </svg>
)

const SvgCopyIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgCopyIcon
