import type { VariantProps } from 'class-variance-authority'
import type { ComponentType, SVGProps } from 'react'

import { iconVariants } from './iconVariants.js'

export interface IconProps
  extends SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {}

export type Icon = ComponentType<IconProps>
