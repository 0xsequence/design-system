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
      d="M10 3.6a6.4 6.4 0 0 1 6.4 6.4H18a8 8 0 0 0-8-8v1.6ZM16.4 10a6.4 6.4 0 0 1-6.4 6.4V18a8 8 0 0 0 8-8h-1.6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.6 10a6.4 6.4 0 0 0 6.4 6.4V18a8 8 0 0 1-8-8h1.6Z"
      fill="currentColor"
    />
  </svg>
)

const SvgLoadingIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgLoadingIcon
