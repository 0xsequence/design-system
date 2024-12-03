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
    viewBox="0 0 13 12"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.828 5.245V3.529a2.329 2.329 0 1 0-4.657 0v1.716h-.188a1.2 1.2 0 0 0-1.2 1.2v3.05a1.2 1.2 0 0 0 1.2 1.2h5.032a1.2 1.2 0 0 0 1.2-1.2v-3.05a1.2 1.2 0 0 0-1.2-1.2h-.187ZM6.5 2.067c-.807 0-1.461.654-1.461 1.462v1.716H7.96V3.529c0-.808-.654-1.462-1.462-1.462Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgLockIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgLockIcon
