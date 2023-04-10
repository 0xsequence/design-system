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
    <circle cx={6.192} cy={7.733} r={2.883} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.6 12.088a6.03 6.03 0 0 0-2.408-.491c-2.827 0-5.123 1.875-5.147 4.196h5.71v-.01c.016-1.5.736-2.781 1.845-3.695Zm.948.532c1.087.769 1.779 1.904 1.792 3.173H7.755c.004-.345.058-.68.156-1 .263-.859.845-1.613 1.637-2.173Z"
      fill="currentColor"
    />
    <circle cx={12.903} cy={7.733} r={2.883} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.05 15.793H7.755c.025-2.32 2.32-4.195 5.148-4.195 2.827 0 5.123 1.874 5.147 4.195Z"
      fill="currentColor"
    />
  </svg>
)

const SvgContactsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgContactsIcon
