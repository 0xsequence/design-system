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
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m-.025-1a.84.84 0 0 0 .613-.262.84.84 0 0 0 .262-.613v-.375q1.25-.225 2.15-.975t.9-2.225q0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875T10.25 9.2t.463-1.025T12.05 7.8q.5 0 .875.175t.625.475.563.413.587-.013q.374-.15.513-.512a.69.69 0 0 0-.063-.663 3.8 3.8 0 0 0-.988-.975 2.55 2.55 0 0 0-1.262-.45v-.375a.84.84 0 0 0-.263-.612.84.84 0 0 0-.612-.263.84.84 0 0 0-.613.263.84.84 0 0 0-.262.612v.375q-1.25.275-1.95 1.1T8.5 9.2q0 1.175.688 1.9t2.162 1.25q1.576.575 2.188 1.025t.612 1.175q0 .825-.588 1.212-.587.388-1.412.388-.65 0-1.175-.312-.525-.313-.875-.938a1.03 1.03 0 0 0-.525-.475.88.88 0 0 0-.65 0 .87.87 0 0 0-.513.475.77.77 0 0 0-.012.675q.4.851 1.075 1.387.675.539 1.625.738v.425a.84.84 0 0 0 .263.613.84.84 0 0 0 .612.262"
    />
  </svg>
)

const SvgDollarIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgDollarIcon
