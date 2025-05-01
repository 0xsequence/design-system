import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const progressIndicatorVariants = cva('h-full rounded-full', {
  variants: {
    color: {
      positive: 'bg-positive',
      info: 'bg-info',
      warning: 'bg-warning',
      negative: 'bg-negative',
    },
  },
  defaultVariants: {
    color: 'positive',
  },
})

interface ProgressProps extends VariantProps<typeof progressIndicatorVariants> {
  value: number // Ratio between 0 and 1
  className?: string
}

export const Progress = (props: ProgressProps) => {
  const { value, color, className } = props
  const percent = Math.min(value * 100, 100)

  return (
    <ProgressPrimitive.Root
      value={percent}
      className={clsx(
        'h-1 w-full rounded-full bg-background-primary overflow-hidden relative',
        className
      )}
    >
      <ProgressPrimitive.ProgressIndicator
        className={progressIndicatorVariants({ color })}
        style={{
          width: `${percent}%`,
          transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
          backgroundSize: '300% 100%',
        }}
      />
    </ProgressPrimitive.Root>
  )
}
