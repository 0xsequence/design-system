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
      d="M9.47174 11.5721C7.79232 12.3832 5.7142 12.0922 4.32091 10.6989C2.5597 8.93766 2.5597 6.08215 4.32091 4.32092C6.08213 2.55969 8.93763 2.55969 10.6989 4.32092C12.0932 5.71527 12.3836 7.7955 11.5702 9.47559V11.0211L12.3458 11.7967L13.8971 11.7967L14.3104 12.21V13.7613L15.086 14.5369L16.6373 14.5369L17 14.8996L16.9713 16.9713L14.8996 17L9.47174 11.5721ZM5.2463 6.89715C5.70214 7.353 6.44121 7.353 6.89706 6.89715C7.35291 6.44131 7.35291 5.70223 6.89706 5.24638C6.44121 4.79054 5.70214 4.79054 5.2463 5.24638C4.79045 5.70223 4.79045 6.44131 5.2463 6.89715Z"
      fill="currentColor"
    />
  </svg>
)

const SvgKeyIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgKeyIcon
