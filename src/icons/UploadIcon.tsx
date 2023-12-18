// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 11.444v5.112h12v-5.112h-1.333v3.778H5.333v-3.777H4Zm1.973-3.973.943.943 2.418-2.417v7.28h1.333v-7.28l2.417 2.417.943-.943L10 3.444 5.973 7.471Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgUploadIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgUploadIcon
