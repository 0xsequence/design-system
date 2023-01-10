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
      d="M13.645 13.47h-6.35c.39-1.36 1.664-2.358 3.175-2.358 1.51 0 2.783.997 3.175 2.358Z"
      fill="currentColor"
    />
    <circle cx={10.47} cy={8.554} r={2.024} fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.918 3.988h9.103v12.024H5.918V3.988Zm-1.5 13.524V2.488h12.103v15.024H4.418ZM16.521 4.706h1.51v1.5h-1.51v-1.5Zm0 3.03h1.51v1.5h-1.51v-1.5Zm1.51 3.029h-1.51v1.5h1.51v-1.5Zm-1.51 3.03h1.51v1.5h-1.51v-1.5Z"
      fill="currentColor"
    />
  </svg>
)

const SvgContactsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgContactsIcon
