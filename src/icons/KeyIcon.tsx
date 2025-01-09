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
      d="M9.214 1.588c.615 0 1.192.116 1.73.349a4.424 4.424 0 0 1 1.428.957c.41.405.73.88.957 1.421.232.538.349 1.115.349 1.73 0 .925-.276 1.764-.827 2.516-.547.747-1.333 1.337-2.359 1.77l1.695 1.702c.096.1.144.212.144.335a.428.428 0 0 1-.137.328l-1.743 1.737 1.251 1.237a.462.462 0 0 1 .137.328.435.435 0 0 1-.137.335l-2.16 2.16a.395.395 0 0 1-.321.123.446.446 0 0 1-.294-.123l-1.183-1.155a.749.749 0 0 1-.164-.24.748.748 0 0 1-.048-.273v-6.63a4.503 4.503 0 0 1-1.483-.971 4.47 4.47 0 0 1-1.306-3.179 4.404 4.404 0 0 1 1.299-3.158c.41-.41.884-.73 1.422-.957a4.471 4.471 0 0 1 1.75-.342Zm0 4.15c.328 0 .61-.117.848-.35.237-.236.355-.521.355-.854 0-.328-.118-.61-.355-.847a1.157 1.157 0 0 0-.848-.356 1.15 1.15 0 0 0-.855.356 1.154 1.154 0 0 0-.348.847c0 .333.116.618.348.855.237.232.522.348.855.348Z"
    />
  </svg>
)

const SvgKeyIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgKeyIcon
