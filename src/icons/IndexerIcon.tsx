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
    <path stroke="currentColor" d="M2.5 2.5h3.571v3.571H2.5z" />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M8.214 2.5h3.571v3.571H8.214z"
    />
    <path
      stroke="currentColor"
      d="M13.929 2.5H17.5v3.571h-3.571zM2.5 8.214h3.571v3.571H2.5zM8.214 8.214h3.571v3.571H8.214z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="M13.929 8.214H17.5v3.571h-3.571zM2.5 13.929h3.571V17.5H2.5z"
    />
    <path
      stroke="currentColor"
      d="M8.214 13.929h3.571V17.5H8.214zM13.929 13.929H17.5V17.5h-3.571z"
    />
  </svg>
)

const SvgIndexerIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgIndexerIcon
