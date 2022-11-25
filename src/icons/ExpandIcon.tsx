// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
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
      d="M4 9.321c.282 0 .517-.09.708-.271a.922.922 0 0 0 .286-.7V8l-.157-1.814L6.13 7.557l1.815 1.829c.186.19.42.285.7.285.306 0 .553-.097.744-.292.195-.196.293-.446.293-.75a.88.88 0 0 0-.079-.372 1.05 1.05 0 0 0-.221-.321L7.559 6.12 6.187 4.83l1.837.157h.457c.286 0 .52-.093.7-.279A.973.973 0 0 0 9.462 4a.967.967 0 0 0-.28-.714.923.923 0 0 0-.7-.286H4.537c-.486 0-.865.136-1.137.407-.267.267-.4.64-.4 1.122V8.35c0 .281.095.514.286.7.19.18.429.271.715.271ZM11.52 17h3.952c.48 0 .855-.136 1.122-.407.271-.267.407-.64.407-1.122V11.65a.914.914 0 0 0-.286-.693.983.983 0 0 0-.714-.278.988.988 0 0 0-.708.271.922.922 0 0 0-.286.7v.357l.165 1.807-1.301-1.371-1.808-1.822a.962.962 0 0 0-.708-.285c-.305 0-.555.097-.75.293-.19.19-.286.438-.286.742 0 .134.026.26.079.379.052.114.126.219.221.314l1.822 1.815 1.38 1.292-1.837-.157h-.464a.959.959 0 0 0-.708.279.996.996 0 0 0-.271.714c0 .286.09.522.271.707.186.19.422.286.708.286Z"
      fill="currentColor"
    />
  </svg>
)

const SvgExpandIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Box
    as={Svg}
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgExpandIcon
