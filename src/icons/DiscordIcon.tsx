// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '../utils/classnames.js'

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
      d="M18.931 4.85a15.2 15.2 0 0 0-4.071-1.42.06.06 0 0 0-.066.035c-.176.352-.372.81-.507 1.172a13.6 13.6 0 0 0-4.572 0q-.226-.6-.514-1.172a.06.06 0 0 0-.066-.036 15.2 15.2 0 0 0-4.07 1.42.06.06 0 0 0-.028.026c-2.593 4.357-3.303 8.606-2.954 12.801q.002.032.025.053a16 16 0 0 0 4.995 2.839c.025.01.053 0 .07-.026.385-.59.728-1.214 1.021-1.869.017-.038 0-.084-.034-.1a10.4 10.4 0 0 1-1.56-.835c-.04-.026-.043-.089-.007-.119q.159-.133.31-.274a.06.06 0 0 1 .065-.009c3.272 1.68 6.816 1.68 10.05 0a.057.057 0 0 1 .066.009q.152.14.311.274c.036.029.033.093-.005.119a10 10 0 0 1-1.562.835c-.035.015-.051.062-.034.1.3.655.643 1.278 1.021 1.869a.06.06 0 0 0 .072.026 15.9 15.9 0 0 0 5-2.839.07.07 0 0 0 .027-.051c.417-4.852-.7-9.066-2.957-12.801a.05.05 0 0 0-.026-.028M8.683 15.12c-.986 0-1.797-1.016-1.797-2.265s.797-2.267 1.797-2.267c1.01 0 1.814 1.027 1.798 2.267 0 1.249-.797 2.267-1.798 2.267zm6.645 0c-.985 0-1.797-1.016-1.797-2.265s.796-2.267 1.797-2.267c1.01 0 1.814 1.027 1.797 2.267 0 1.249-.787 2.267-1.797 2.267z"
    />
  </svg>
)

const SvgDiscordIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgDiscordIcon
