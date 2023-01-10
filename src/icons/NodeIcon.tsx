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
      d="M5.28 7.69a1.776 1.776 0 1 0 0-3.553 1.776 1.776 0 0 0 0 3.552Zm10.277 0a1.776 1.776 0 1 0 0-3.553 1.776 1.776 0 0 0 0 3.552Zm-3.363 7.033a1.776 1.776 0 1 1-3.552 0 1.776 1.776 0 0 1 3.553 0Zm.701-9.56h-1v1.5h1v-1.5Zm-2.977 0h1v1.5h-1v-1.5Zm-.977 0h-1v1.5h1v-1.5Zm4.282 3.566.5-.866 1.299.75-.5.866-1.299-.75Zm-.489.846-.5.867 1.3.75.5-.867-1.3-.75Zm-1.488 2.579.5-.867 1.299.75-.5.866-1.299-.75Zm-4.132-4.29.5.865-1.299.75-.5-.866 1.299-.75Zm1.489 2.577-.5-.866-1.3.75.5.867 1.3-.75Zm.488.846.5.866-1.299.75-.5-.866 1.3-.75Z"
      fill="currentColor"
    />
  </svg>
)

const SvgNodeIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgNodeIcon
