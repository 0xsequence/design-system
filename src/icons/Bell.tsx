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
      fillRule="evenodd"
      d="M12.713 7.457v2.285c0 .638.317.955.652 1.29l.003.003c.353.354.717.719.717 1.45 0 .064-.051.114-.115.114H3.913a.114.114 0 0 1-.114-.114c0-.732.364-1.096.716-1.45l.003-.002c.335-.336.652-.653.652-1.291V7.456a3.775 3.775 0 0 1 2.857-3.654v-.688a.915.915 0 0 1 1.829 0v.688a3.776 3.776 0 0 1 2.857 3.655M10.77 13.17a1.829 1.829 0 0 1-3.657 0zM9.158 7.705q.814.225 1.105.427.474.328.475.974 0 .933-.608 1.326-.335.217-.971.287v.681h-.332v-.681q-1.022-.067-1.386-.721-.2-.355-.2-.958h.622q.026.481.15.701.22.397.814.445v-1.91q-.763-.145-1.125-.481-.362-.337-.362-.933 0-.533.39-.96.39-.429 1.097-.436V5h.331v.458q.7.05 1.071.412.375.361.392.956h-.615a1 1 0 0 0-.143-.458q-.22-.356-.705-.373zm-.956-.342q.231.197.624.273V5.988c-.31.01-.528.106-.66.28a.9.9 0 0 0-.195.552q0 .346.23.543m.956 2.84q.6-.028.828-.438a1 1 0 0 0 .118-.486q0-.44-.322-.668-.184-.134-.624-.252z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgBell = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgBell
