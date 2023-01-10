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
      d="M6.212 15.3h8.413c-.52-2.486-2.206-4.308-4.207-4.308-2 0-3.687 1.822-4.206 4.309Z"
      fill="currentColor"
    />
    <circle cx={10.418} cy={7.381} r={2.681} fill="currentColor" />
  </svg>
)

const SvgProfileIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgProfileIcon
