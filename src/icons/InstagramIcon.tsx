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
      d="M6.549 1.725c-.887.042-1.492.183-2.022.391-.548.214-1.012.5-1.474.964a4.1 4.1 0 0 0-.958 1.477c-.206.53-.345 1.136-.384 2.024-.039.887-.048 1.172-.043 3.435.004 2.263.014 2.547.057 3.436.042.886.183 1.491.391 2.02.214.549.5 1.013.964 1.475s.928.746 1.478.958c.53.205 1.137.345 2.024.384s1.172.048 3.434.043c2.263-.004 2.547-.014 3.436-.056.89-.042 1.491-.184 2.021-.391a4.1 4.1 0 0 0 1.474-.964c.462-.464.746-.93.958-1.478.205-.53.345-1.137.383-2.023.04-.89.049-1.173.044-3.436-.004-2.263-.014-2.546-.056-3.435s-.184-1.492-.392-2.022a4.1 4.1 0 0 0-.963-1.474 4.1 4.1 0 0 0-1.478-.958c-.53-.205-1.136-.345-2.023-.384-.887-.038-1.173-.048-3.436-.043-2.263.004-2.546.014-3.435.057m.097 15.065c-.812-.036-1.254-.17-1.548-.284a2.6 2.6 0 0 1-.96-.621 2.6 2.6 0 0 1-.624-.957c-.114-.294-.252-.735-.29-1.547-.041-.879-.05-1.142-.055-3.367s.004-2.488.042-3.367c.035-.812.17-1.253.284-1.547.15-.39.33-.667.621-.96s.569-.473.957-.625c.294-.114.735-.25 1.547-.29.879-.041 1.142-.05 3.366-.054 2.225-.005 2.489.003 3.368.042.812.035 1.254.17 1.547.283.39.15.667.33.96.622.293.291.473.568.625.957.115.293.251.734.29 1.546.041.88.051 1.143.055 3.367s-.004 2.488-.042 3.367c-.036.812-.17 1.253-.284 1.548-.15.389-.33.666-.621.96a2.6 2.6 0 0 1-.958.624c-.293.115-.734.251-1.546.29-.879.041-1.142.05-3.367.055s-2.488-.004-3.367-.042M13.44 5.546a1 1 0 1 0 1.999-.003 1 1 0 0 0-2 .003M5.72 10.008a4.279 4.279 0 1 0 8.557-.016 4.279 4.279 0 0 0-8.557.016m1.501-.003a2.778 2.778 0 1 1 5.556-.01 2.778 2.778 0 0 1-5.556.01"
    />
  </svg>
)

const SvgInstagramIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgInstagramIcon
