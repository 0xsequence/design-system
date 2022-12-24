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
      d="M11.052 4.052a1.051 1.051 0 1 0-2.104 0v4.896H4.052a1.052 1.052 0 0 0 0 2.104h4.896v4.896a1.052 1.052 0 0 0 2.104 0v-4.896h4.896a1.051 1.051 0 1 0 0-2.104h-4.896V4.052Z"
      fill="currentColor"
    />
  </svg>
)

const SvgCogIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgCogIcon
