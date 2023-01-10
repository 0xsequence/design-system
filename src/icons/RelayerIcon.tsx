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
      d="M4.248 4.097H7.75v3.501h-1c0 .58.19 1.004.467 1.282.278.278.703.468 1.283.468h3c.92 0 1.745.31 2.342.907.598.597.908 1.422.908 2.343h1v3.501h-3.5v-3.501h1c0-.58-.19-1.004-.468-1.282s-.703-.468-1.282-.468h-3c-.92 0-1.746-.31-2.343-.907s-.907-1.423-.907-2.343h-1v-3.5Z"
      fill="currentColor"
    />
  </svg>
)

const SvgRelayerIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgRelayerIcon
