import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/classnames.js'

const spinnerVariants = cva('text-muted animate-spin w-6 h-6 stroke-2', {
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

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export const Spinner = ({ size, className }: SpinnerProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={cn(spinnerVariants({ size }), className)}
    >
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="10.5"
        strokeDasharray="42"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        fill="none"
        opacity="0.25"
        r="10.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
