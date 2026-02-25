import { Progress as ProgressPrimitive } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

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

type ProgressProps = ComponentProps<typeof ProgressPrimitive.Root> &
  VariantProps<typeof progressIndicatorVariants> & {
    value: number
  }

export const Progress = (props: ProgressProps) => {
  const { value, color, className } = props
  const percent = Math.min(value * 100, 100)

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn(
        'h-2 w-full rounded-full bg-primary/20 overflow-hidden relative',
        className
      )}
    >
      <ProgressPrimitive.Track className="h-full w-full relative">
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={progressIndicatorVariants({ color })}
          style={{
            width: `${percent}%`,
            transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
            backgroundSize: '300% 100%',
          }}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}
