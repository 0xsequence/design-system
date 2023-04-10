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
    <circle cx={10} cy={7.361} fill="currentColor" r={3.361} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 16.755H4c.029-2.705 2.704-4.89 6-4.89s5.971 2.185 6 4.89Z"
      fill="currentColor"
    />
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
