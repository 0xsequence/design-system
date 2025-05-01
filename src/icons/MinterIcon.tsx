// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '~/utils/classnames.js'

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
      d="M20.204 2.32a1 1 0 0 1-.366 1.367l-5.56 3.21 1.233 2.12a1 1 0 0 1-.375 1.372l-3.504 1.976a1 1 0 0 1-1.357-.372L6.757 5.942a1 1 0 0 1 .375-1.371l3.504-1.976a1 1 0 0 1 1.357.37l1.28 2.203 5.565-3.213a1 1 0 0 1 1.366.366M8.994 5.817l2.518 4.32 1.761-.993-2.517-4.32zM3 13.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.023l-.451 1.129A1 1 0 0 0 6.5 22h9a1 1 0 0 0 .928-1.371l-.451-1.129H18c.996 0 1.794-.34 2.399-.878.583-.518.94-1.178 1.162-1.77a7.2 7.2 0 0 0 .384-1.603 8 8 0 0 0 .054-.693v-.032l.001-.015V14.5a1 1 0 0 0-1-1zm5.328 4.44a1 1 0 0 0-.828-.44H4v-2h15.876c-.045.21-.106.431-.187.649-.153.407-.359.747-.619.979-.24.212-.566.372-1.07.372h-3.5a1 1 0 0 0-.928 1.371L14.023 20H7.977l.451-1.129a1 1 0 0 0-.1-.932"
      clipRule="evenodd"
    />
  </svg>
)

const SvgMinterIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgMinterIcon
