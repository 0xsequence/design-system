// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

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
      d="M19.8 6s-.195-1.379-.796-1.984c-.762-.797-1.613-.801-2.004-.848-2.797-.203-6.996-.203-6.996-.203h-.008s-4.2 0-6.996.203c-.39.047-1.242.05-2.004.848C.395 4.62.203 6 .203 6S0 7.621 0 9.238v1.516c0 1.617.2 3.238.2 3.238s.195 1.38.792 1.985c.762.796 1.762.77 2.207.855 1.602.152 6.801.2 6.801.2s4.203-.009 7-.208c.39-.047 1.242-.05 2.004-.847.601-.606.797-1.985.797-1.985S20 12.375 20 10.754V9.238C20 7.621 19.8 6 19.8 6M7.935 12.594V6.973l5.402 2.82z"
    />
  </svg>
)

const SvgYoutube = ({ className, size = 'sm', ...props }: IconProps) => (
  <Svg
    className={cn(
      iconVariants({
        size,
      }),
      className
    )}
    {...props}
  />
)

export default SvgYoutube
