import { BoxLayoutProps, BoxProps } from '../components/Box'

export type IconSize = 'sm' | 'md' | 'lg'

export interface IconProps extends BoxLayoutProps {
  className?: BoxProps['className']
}
