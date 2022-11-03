// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fontSize="1.5em"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.154 7H6v6.461h4.154V7ZM5 6v8.461h6.154V6H5Z"
      fill="currentcolor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.809 3.5h6.554v8.692H10.77v-1h1.593V4.5H7.809v1.772h-1V3.5Z"
      fill="currentcolor"
    />
  </svg>
)

const SvgCopyIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgCopyIcon
