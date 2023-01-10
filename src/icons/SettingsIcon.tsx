// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { Box } from '~/components/Box'

import { iconVariants } from './styles.css'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.616 4.922a5.965 5.965 0 0 0-1.868-.774l-.33-1.648h-2l-.33 1.648a5.965 5.965 0 0 0-1.867.774L5.822 3.99 4.408 5.404l.932 1.399a5.965 5.965 0 0 0-.774 1.867L2.918 9v2l1.648.33c.152.672.417 1.302.774 1.867l-.932 1.4 1.414 1.413 1.399-.932a5.965 5.965 0 0 0 1.868.774l.33 1.648h2l.329-1.648a5.965 5.965 0 0 0 1.868-.774l1.399.932 1.414-1.414-.933-1.399a5.965 5.965 0 0 0 .774-1.867l1.648-.33V9l-1.648-.33a5.965 5.965 0 0 0-.774-1.867l.933-1.4-1.414-1.413-1.4.932Zm-3.198.578a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
      fill="currentColor"
    />
  </svg>
)

const SvgSettingsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgSettingsIcon
