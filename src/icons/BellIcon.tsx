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
      d="M13.914 9.257v2.286c0 .638.317.954.652 1.29l.003.003c.353.354.717.718.717 1.45 0 .063-.05.114-.114.114H5.114A.114.114 0 0 1 5 14.286c0-.732.364-1.097.717-1.45l.002-.003c.336-.335.652-.652.652-1.29V9.257A3.775 3.775 0 0 1 9.23 5.602v-.688a.915.915 0 0 1 1.828 0v.688a3.776 3.776 0 0 1 2.857 3.655m-1.943 5.714a1.829 1.829 0 0 1-3.657 0zM10.36 9.505q.813.227 1.105.428.472.328.475.973 0 .934-.609 1.327-.335.217-.971.287v.68h-.332v-.68q-1.022-.067-1.386-.722-.2-.354-.2-.957h.622q.027.48.151.7.218.399.813.445v-1.909q-.763-.144-1.125-.481-.361-.338-.362-.933 0-.533.39-.96.39-.429 1.097-.436v-.466h.332v.458q.698.05 1.07.412.375.361.392.956h-.615a1 1 0 0 0-.142-.458q-.221-.356-.705-.374zm-.957-.342q.23.198.625.274V7.79q-.465.017-.66.28a.9.9 0 0 0-.196.551q0 .347.231.543m.956 2.84q.6-.027.829-.437a1 1 0 0 0 .118-.486q0-.44-.323-.668-.184-.134-.624-.253z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgBellIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgBellIcon
