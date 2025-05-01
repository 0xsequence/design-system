// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

import { iconVariants } from './iconVariants.js'
import type { IconProps } from './types.js'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m9.589 6.281-.022.013V8.95l2.44 1.373L14.45 8.95V6.294l-.021-.012-1.92 1.07a1 1 0 0 1-.97.003zm6.86-.572a1 1 0 0 0-.51-.872L12.5 2.902a1 1 0 0 0-.981 0L8.077 4.837a1 1 0 0 0-.51.872v3.826a1 1 0 0 0 .51.872l3.44 1.935a1 1 0 0 0 .981 0l3.441-1.935a1 1 0 0 0 .51-.872zM4.055 15.154l-.04.022v2.656l2.442 1.373 2.44-1.373v-2.656l-.01-.006-1.903 1.06a1 1 0 0 1-.97.003zm6.843-.563a1 1 0 0 0-.51-.872l-3.441-1.935a1 1 0 0 0-.98 0l-3.442 1.935a1 1 0 0 0-.51.872v3.826a1 1 0 0 0 .51.872l3.441 1.935a1 1 0 0 0 .98 0l3.442-1.935a1 1 0 0 0 .51-.872zm6.661 4.614-2.441-1.373v-2.644l1.897 1.045a1 1 0 0 0 .969-.003l1.954-1.09.062.036v2.656zm3.931-5.486a1 1 0 0 1 .51.872v3.826a1 1 0 0 1-.51.872l-3.44 1.935a1 1 0 0 1-.981 0l-3.441-1.935a1 1 0 0 1-.51-.872v-3.826a1 1 0 0 1 .51-.872l3.44-1.935a1 1 0 0 1 .981 0z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgChainIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgChainIcon
