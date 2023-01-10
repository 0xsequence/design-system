// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M9.668 3v3.07a3.978 3.978 0 0 0-1.498.621L6 4.52l-1.06 1.06 2.17 2.172a3.978 3.978 0 0 0-.62 1.498h-3.07v1.5h3.07c.103.547.318 1.054.62 1.498L4.94 14.42l1.06 1.061L8.17 13.31c.444.302.951.517 1.498.62V17h1.5v-3.07a3.98 3.98 0 0 0 1.499-.621l2.17 2.171 1.061-1.06-2.17-2.172c.301-.443.516-.951.62-1.498h3.07v-1.5h-3.07a3.976 3.976 0 0 0-.62-1.498l2.17-2.171-1.06-1.061-2.171 2.171a3.978 3.978 0 0 0-1.499-.62V3zm-1.75 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const SvgSunIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgSunIcon
