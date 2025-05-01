import { cva, type VariantProps } from 'class-variance-authority'

const spinnerVariants = cva(['text-muted animate-spin'], {
  variants: {
    size: {
      sm: 'w-4 h-4 [&>svg]:stroke-[calc(24/16*2px)]',
      md: 'w-6 h-6 [&>svg]:stroke-2',
      lg: 'w-8 h-8 [&>svg]:stroke-[calc(24/32*2px)]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export const Spinner = ({ size, className }: SpinnerProps) => {
  return (
    <div className={spinnerVariants({ size, className })}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
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
    </div>
  )
}
