import { SVGProps } from 'react'

export type IconSize = 'sm' | 'md' | 'lg'

export type IconProps = SVGProps<SVGSVGElement> & { size?: IconSize }
