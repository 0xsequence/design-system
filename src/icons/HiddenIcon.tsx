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
      d="M11.425 5.189c-.466-.06-.942-.092-1.425-.092-3.564 0-6.716 1.703-8.445 4.296l-.277.416.277.416c1.141 1.712 2.902 3.035 4.991 3.737l.744-1.336c-1.727-.522-3.19-1.527-4.187-2.817C4.59 7.887 7.11 6.597 10 6.597c.212 0 .422.007.63.02l.795-1.428Z"
    />
    <path
      fill="currentColor"
      d="M10.179 7.43a2.385 2.385 0 0 0-2.105 3.786l2.105-3.786Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m5.979 17.041.874.486 1.722-3.097c.466.06.942.091 1.425.091 3.564 0 6.716-1.702 8.445-4.296l.277-.416-.277-.416c-1.141-1.711-2.902-3.035-4.991-3.737l1.5-2.697-.875-.486-8.1 14.568ZM12.71 6.993l-.783 1.41a2.386 2.386 0 0 1-2.105 3.786L9.368 13c.208.014.419.02.631.02 2.89 0 5.41-1.29 6.897-3.212-.998-1.29-2.46-2.294-4.187-2.816Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgHiddenIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgHiddenIcon
