// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="svg-icon"
    style={{
      fill: 'red',
    }}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M511.337 63.565c-247.34 0-447.848 200.508-447.848 447.848C63.49 758.752 264 959.26 511.337 959.26c247.339 0 447.847-200.51 447.847-447.848.001-247.34-200.507-447.848-447.847-447.848zm0 831.37c-211.814 0-383.521-171.71-383.521-383.522 0-211.815 171.706-383.522 383.521-383.522 211.813 0 383.522 171.707 383.522 383.522 0 211.813-171.71 383.523-383.522 383.523z" />
    <path d="M501.963 270.521c-65.918 2.162-135.078 34.58-157.77 135.076 54.03 7.565 79.966 10.807 79.966 10.807s14.049-86.45 100.497-76.724c86.449 9.727 66.999 74.564 58.352 87.53-8.644 21.614-88.61 73.483-101.578 104.82-12.967 31.338-11.886 89.692-11.886 89.692h77.805s-4.324-61.596 38.902-87.53c43.224-25.935 116.706-101.58 84.288-173.98-51.87-83.207-102.659-91.852-168.576-89.69zM468.464 650.897h81.046v88.6h-81.046v-88.6Z" />
  </svg>
)

const SvgEmailIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgEmailIcon
