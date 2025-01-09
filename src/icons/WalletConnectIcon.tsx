// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { iconVariants } from './iconVariants'
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
      d="M14.725 6.94c-2.61-2.586-6.84-2.586-9.45 0l-.314.31a.329.329 0 0 0 0 .468l1.075 1.065a.168.168 0 0 0 .236 0l.432-.428a4.691 4.691 0 0 1 6.592 0l.463.458a.168.168 0 0 0 .236 0l1.074-1.064a.329.329 0 0 0 0-.468l-.345-.342ZM3.054 9.14l-.956.948a.329.329 0 0 0 0 .468l4.31 4.272c.131.129.343.129.473 0l3.06-3.032a.084.084 0 0 1 .118 0l3.06 3.032c.13.129.342.129.472 0l4.311-4.272a.33.33 0 0 0 0-.468l-.956-.948a.336.336 0 0 0-.472 0l-3.06 3.032a.084.084 0 0 1-.118 0l-3.06-3.032a.336.336 0 0 0-.472 0l-3.06 3.032a.084.084 0 0 1-.118 0L3.526 9.14a.336.336 0 0 0-.472 0Z"
    />
  </svg>
)

const SvgWalletConnectIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgWalletConnectIcon
