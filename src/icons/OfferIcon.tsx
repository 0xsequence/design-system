// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="M12.431 18.775a.8.8 0 0 1-.565.225.8.8 0 0 1-.566-.225.7.7 0 0 1-.243-.525v-.364q-.877-.172-1.501-.632a3.3 3.3 0 0 1-.993-1.19.62.62 0 0 1 .011-.578q.15-.3.474-.407.3-.108.6 0a.93.93 0 0 1 .485.407q.323.536.809.803.485.268 1.085.268.762 0 1.305-.332t.543-1.04q0-.621-.566-1.006-.565-.386-2.02-.879-1.364-.45-1.999-1.071-.635-.623-.635-1.629 0-.879.647-1.586.647-.706 1.801-.943V7.75q0-.3.243-.525A.8.8 0 0 1 11.912 7q.323 0 .566.225t.242.525v.321q.624.044 1.166.386.543.343.913.836.184.256.058.568a.77.77 0 0 1-.474.439.75.75 0 0 1-.543.01 1.2 1.2 0 0 1-.52-.353 1.6 1.6 0 0 0-.577-.407q-.346-.15-.808-.15-.808 0-1.236.321a1.04 1.04 0 0 0-.427.879q0 .556.531.879.531.321 1.917.75 1.664.557 2.217 1.307.555.75.555 1.65 0 1.264-.832 1.907-.831.642-1.986.836v.321q0 .3-.243.525"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.968 2a1 1 0 0 0-.999 1v1l.003.078C7.96 4.54 4.973 7.016 4.973 10l.032 5.333-1.4 1.867c-1.49 1.99-.053 4.8 2.403 4.8h11.984c2.456 0 3.893-2.81 2.403-4.8l-1.4-1.867L18.964 10c0-2.984-2.987-5.459-6-5.922q.004-.039.004-.078V3a1 1 0 0 0-1-1M7.003 15.977 6.972 10c0-2.21 2.789-4 4.996-4s4.997 1.79 4.997 4l.032 5.977q0 .023.014.042l1.785 2.381c.494.66.02 1.6-.804 1.6H6.008c-.824 0-1.297-.94-.803-1.6l1.784-2.381a.07.07 0 0 0 .014-.042"
      clipRule="evenodd"
    />
  </svg>
)

const SvgOfferIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgOfferIcon
