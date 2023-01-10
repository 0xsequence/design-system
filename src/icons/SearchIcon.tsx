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
      d="M13.918 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-.677 4.383a5.5 5.5 0 1 1 1.06-1.06l2.648 2.647-1.061 1.06-2.647-2.647Z"
      fill="currentColor"
    />
  </svg>
)

const SvgSearchIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgSearchIcon
