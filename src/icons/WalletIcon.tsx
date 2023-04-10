// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 6.852H5.87c-.48 0-.87-.36-.87-.803 0-.443.39-.802.87-.802h8.63V4H5.495C4.117 4 3 5.03 3 6.302v7.396C3 14.969 4.117 16 5.495 16H17V6.852ZM13.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
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
