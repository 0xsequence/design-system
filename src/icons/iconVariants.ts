import { cva } from 'class-variance-authority'

export const iconVariants = cva('block shrink-0', {
  variants: {
    size: {
      default: 'w-5 h-5', // Don't apply a size class when no size is specified
      xxs: 'size-3',
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
      lg: 'size-7',
      xl: 'size-9',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
