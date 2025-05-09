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
      d="M12.008 2C6.474 2 2 6.583 2 12.254c0 4.532 2.867 8.369 6.843 9.727.498.102.68-.221.68-.493 0-.237-.017-1.052-.017-1.901-2.784.611-3.364-1.222-3.364-1.222-.447-1.189-1.11-1.494-1.11-1.494-.911-.628.067-.628.067-.628 1.01.068 1.54 1.052 1.54 1.052.895 1.562 2.337 1.12 2.917.85.083-.663.348-1.121.63-1.376-2.22-.238-4.557-1.12-4.557-5.059 0-1.12.397-2.037 1.027-2.75-.1-.254-.447-1.307.1-2.716 0 0 .845-.272 2.75 1.052a9.5 9.5 0 0 1 2.502-.34c.845 0 1.707.12 2.502.34 1.906-1.324 2.75-1.052 2.75-1.052.548 1.409.2 2.462.1 2.716.647.713 1.028 1.63 1.028 2.75 0 3.939-2.337 4.804-4.574 5.06.365.322.68.933.68 1.9 0 1.375-.017 2.479-.017 2.818 0 .272.183.595.68.493C19.133 20.622 22 16.786 22 12.253 22.016 6.584 17.526 2 12.008 2"
    />
  </svg>
)

const SvgGithubIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgGithubIcon
