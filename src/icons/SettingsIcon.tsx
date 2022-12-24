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
      d="M15.299 12.88a1.2 1.2 0 0 1 .083-.698 1.2 1.2 0 0 1 1.098-.728h.066a1.455 1.455 0 1 0 0-2.909h-.124a1.2 1.2 0 0 1-1.098-.727V7.76a1.2 1.2 0 0 1 .24-1.324l.043-.043a1.455 1.455 0 1 0-2.058-2.058l-.043.043a1.2 1.2 0 0 1-1.324.24 1.2 1.2 0 0 1-.728-1.098v-.065a1.454 1.454 0 1 0-2.909 0v.123a1.2 1.2 0 0 1-.727 1.098H7.76a1.2 1.2 0 0 1-1.324-.24l-.043-.043A1.455 1.455 0 1 0 4.335 6.45l.043.044a1.2 1.2 0 0 1 .24 1.323 1.2 1.2 0 0 1-1.098.786h-.065a1.455 1.455 0 1 0 0 2.909h.123a1.2 1.2 0 0 1 1.098.727 1.2 1.2 0 0 1-.24 1.324l-.043.043a1.455 1.455 0 1 0 2.058 2.059l.044-.044a1.2 1.2 0 0 1 1.323-.24 1.2 1.2 0 0 1 .786 1.098v.066a1.455 1.455 0 0 0 2.909 0v-.124a1.2 1.2 0 0 1 .727-1.098 1.2 1.2 0 0 1 1.324.24l.043.043a1.455 1.455 0 1 0 2.059-2.058l-.044-.043a1.2 1.2 0 0 1-.323-.626ZM12.182 10a2.182 2.182 0 1 1-4.364 0 2.182 2.182 0 0 1 4.364 0Z"
      fill="currentColor"
    />
  </svg>
)

const SvgSettingsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgSettingsIcon
