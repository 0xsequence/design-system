import { cva } from 'class-variance-authority'

export const iconVariants = cva('block shrink-0 w-5 h-5', {
  variants: {
    size: {
      xxs: 'size-3',
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
      lg: 'size-7',
      xl: 'size-9',
    },
  },
})
