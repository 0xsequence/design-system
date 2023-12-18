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
    <path
      fill="currentColor"
      d="M6.648 10.767a2.883 2.883 0 1 0 0-5.767 2.883 2.883 0 0 0 0 5.767ZM16.241 7.884a2.883 2.883 0 1 1-5.766 0 2.883 2.883 0 0 1 5.766 0ZM13.358 11.748c2.828 0 5.123 1.875 5.148 4.196H8.21c.025-2.321 2.32-4.196 5.148-4.196ZM9.055 12.238a6.028 6.028 0 0 0-2.407-.49c-2.828 0-5.123 1.874-5.148 4.195h5.71v-.01c.016-1.5.737-2.781 1.845-3.695Z"
    />
  </svg>
)

const SvgCollaboratorsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgCollaboratorsIcon
