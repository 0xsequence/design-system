// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 11.667v2.889c0 .383-.14.75-.39 1.02-.25.272-.59.424-.943.424H5.333c-.353 0-.692-.152-.942-.423S4 14.939 4 14.556v-2.89m9.333-5.055L10 3m0 0L6.667 6.611M10 3v8.667"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const SvgShareIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgShareIcon
