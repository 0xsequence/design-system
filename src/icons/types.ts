import { ComponentType } from 'react'

import { BoxProps } from '~/components/Box'

import { IconVariants } from './styles.css'

export type IconProps = IconVariants & BoxProps

export type Icon = ComponentType<IconProps>
