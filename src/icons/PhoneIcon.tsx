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
      d="M20.182 12.802a3.32 3.32 0 0 1 1.669 2.21l.003.015c.134.627.284 1.786-.092 3.062-.4 1.358-1.35 2.684-3.117 3.57l-.01.004-.01.005a3.3 3.3 0 0 1-1.456.332h-.054l-.054-.003c-.716-.039-1.623-.164-3.04-.556l-.011-.003-.011-.003C8.522 19.853 4.15 15.477 2.57 10c-.391-1.347-.517-2.366-.56-2.905a3.27 3.27 0 0 1 .34-1.747c.883-1.763 2.207-2.712 3.564-3.111 1.278-.376 2.437-.224 3.063-.09a3.31 3.31 0 0 1 2.575 2.702v.003l.62 3.715a2.87 2.87 0 0 1-.602 2.281c.452.599.983 1.13 1.582 1.583a2.86 2.86 0 0 1 2.28-.605h.001zM9.88 11.927c.614.84 1.351 1.578 2.191 2.193q.656.48 1.392.858l.294.15.091.045c.085-.39.228-.71.353-.937.067-.12.16-.22.268-.295a.86.86 0 0 1 .632-.143l3.722.624v.002c.536.089.957.49 1.075 1.022.195.908.377 3.159-2.15 4.424-.174.085-.372.13-.58.13-.548-.03-1.311-.126-2.614-.487-4.817-1.39-8.673-5.251-10.063-10.07-.349-1.2-.454-2.084-.486-2.506-.02-.243.024-.482.13-.685 1.26-2.53 3.514-2.344 4.422-2.15.532.114.933.536 1.022 1.075l.62 3.719a.87.87 0 0 1-.12.606.85.85 0 0 1-.314.294 3.7 3.7 0 0 1-.936.357l.106.207.088.174q.376.736.857 1.393"
      clipRule="evenodd"
    />
  </svg>
)

const SvgPhoneIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgPhoneIcon
