// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="M11.506 14.123v-3.574a.44.44 0 0 0-.463-.463H8.811a.44.44 0 0 0-.469.463v3.574h3.164Zm-6.996.164V10.14l5.039-4.23c.254-.212.506-.212.756 0l5.033 4.23v4.148c0 .45-.139.803-.416 1.06-.274.262-.645.393-1.113.393H6.045c-.473 0-.848-.13-1.125-.392-.274-.258-.41-.612-.41-1.06ZM2.494 8.955c0-.23.102-.432.305-.603l6.105-5.127c.313-.262.655-.393 1.026-.393.375 0 .716.13 1.025.393l6.1 5.12c.199.169.299.376.299.622a.664.664 0 0 1-.217.521.775.775 0 0 1-.545.194.747.747 0 0 1-.317-.07 1.508 1.508 0 0 1-.287-.188l-5.73-4.81a.502.502 0 0 0-.328-.135.496.496 0 0 0-.323.134l-5.742 4.81a1.51 1.51 0 0 1-.287.188.747.747 0 0 1-.316.07c-.235 0-.422-.068-.563-.204a.719.719 0 0 1-.205-.522ZM13.41 5.773V4.391c0-.137.041-.246.123-.329a.464.464 0 0 1 .334-.123h1.078c.137 0 .246.041.328.123a.443.443 0 0 1 .123.329v3.04L13.41 5.774Z"
    />
  </svg>
)

const SvgHomeIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgHomeIcon
