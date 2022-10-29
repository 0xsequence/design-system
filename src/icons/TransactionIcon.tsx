// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
import { SVGProps } from 'react'

import { Box } from '../components/Box/Box'

import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 9.778c0 .127.038.233.115.32.08.081.183.122.308.122h3.179l-1.67 5.037c-.058.167-.069.31-.032.43.036.122.1.21.192.264a.38.38 0 0 0 .307.03c.114-.028.22-.11.319-.245l5.134-7.1A.71.71 0 0 0 13 8.224a.436.436 0 0 0-.12-.32.386.386 0 0 0-.303-.128H9.398l1.67-5.036c.058-.164.069-.305.032-.424a.432.432 0 0 0-.192-.264.396.396 0 0 0-.307-.037c-.114.029-.22.113-.319.252L5.148 9.36A.738.738 0 0 0 5 9.778Z"
      fill="currentcolor"
    />
  </svg>
)

const SvgTransactionIcon = (props: IconProps) => <Box as={Svg} {...props} />

export default SvgTransactionIcon
