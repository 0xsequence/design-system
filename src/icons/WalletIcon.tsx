// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.75 5.816V1.783L3.11 4.601v11.813h14.997V5.816H15.75Zm-1.5 0V3.654l-9.64 2.15v.012h9.64Zm-9.64 1.5v7.598h11.997V7.316H4.611ZM15 11.1a1.158 1.158 0 1 1-2.316 0 1.158 1.158 0 0 1 2.316 0Z"
      fill="currentColor"
    />
  </svg>
)

const SvgWalletIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgWalletIcon
