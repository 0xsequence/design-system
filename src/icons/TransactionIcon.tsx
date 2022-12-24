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
      d="M5 10.89c0 .144.048.266.144.364.1.094.229.14.384.14h3.974L7.416 17.15c-.073.192-.087.356-.041.492.045.14.126.24.24.302.114.06.242.072.384.035.142-.033.275-.127.398-.281l6.418-8.114c.123-.16.185-.316.185-.47 0-.15-.05-.272-.151-.365a.504.504 0 0 0-.377-.148h-3.974l2.086-5.756c.073-.187.087-.348.041-.484a.5.5 0 0 0-.624-.344c-.142.033-.275.129-.398.288l-6.418 8.107c-.123.164-.185.323-.185.477Z"
      fill="currentColor"
    />
  </svg>
)

const SvgTransactionIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgTransactionIcon
