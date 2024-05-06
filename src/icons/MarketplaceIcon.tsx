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
      fillRule="evenodd"
      d="m17 7.862-1.78-4.45H4.78L3 7.862v.079c0 .34.099.842.407 1.27.113.156.25.3.417.42v6.957h12.353V9.63a1.85 1.85 0 0 0 .416-.419A2.25 2.25 0 0 0 17 7.941v-.08Zm-1.647 2.105a2.49 2.49 0 0 1-.412.033c-.789 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.79 0-1.323-.336-1.647-.782-.324.446-.858.782-1.647.782-.146 0-.283-.012-.412-.033v3.431h10.706V9.967ZM13.706 7.94c0 .209.066.53.252.789.17.237.459.446.983.446.525 0 .813-.209.984-.446.165-.23.235-.51.249-.716l-.03-.073h-2.438Zm.956-3.706 1.153 2.882h-2.19l-.641-2.882h1.678Zm-1.881 2.882-.64-2.882h-1.73v2.882h2.37Zm-5.562 0 .64-2.882h1.73v2.882h-2.37Zm-.203-2.882-.64 2.882H4.185l1.153-2.882h1.678Zm-3.19 3.78.03-.074h2.438c0 .209-.066.53-.252.789-.17.237-.459.446-.983.446-.525 0-.813-.209-.984-.446a1.431 1.431 0 0 1-.249-.716Zm5.51.715a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.251.789.171.237.46.446.984.446.525 0 .813-.209.983-.446Zm3.294 0a1.43 1.43 0 0 0 .252-.789h-2.47c0 .209.066.53.252.789.17.237.458.446.983.446.525 0 .813-.209.983-.446Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgMarketplaceIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgMarketplaceIcon