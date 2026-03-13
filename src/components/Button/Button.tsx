import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { focusRingVariants } from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

const buttonVariants = cva(
  [
    'inline-flex items-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer',
    'disalbed:cursor-default disabled:pointer-events-none disabled:opacity-50',

    focusRingVariants(),
  ],
  {
    variants: {
      size: {
        xs: [
          'text-xxs font-bold',
          'min-w-7 h-7 px-2 gap-1 [&_svg:not([class*="size-"])]:size-4',
        ],
        sm: [
          'text-sm font-bold',
          'min-w-9 h-9 px-3 gap-1 [&_svg:not([class*="size-"])]:size-5',
        ],
        md: [
          'text-sm font-bold',
          'min-w-11 h-11 px-4 [&_svg:not([class*="size-"])]:size-5',
        ],
        lg: [
          'text-sm font-bold',
          'min-w-13 h-13 px-5 [&_svg:not([class*="size-"])]:size-5',
        ],
      },

      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },

      variant: {
        primary:
          'bg-gradient-primary text-button-primary hover:opacity-80 border-1 border-transparent bg-origin-border',
        secondary:
          'bg-background-secondary text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover',
        outline:
          'bg-transparent text-primary border-1 border-current hover:opacity-80',
        ghost:
          'bg-transparent text-primary/80 hover:bg-background-inverse/15 hover:text-primary',
        emphasis:
          'bg-background-inverse text-background-primary hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/80',
        text: 'bg-transparent text-primary rounded-xs h-auto w-auto h-auto min-w-0 p-0 focus-visible:outline-offset-1 grow-0 hover:opacity-80',
        link: 'text-primary underline-offset-4 hover:underline',
      },

      iconOnly: {
        true: 'p-0 shrink-0 items-center justify-center',
      },
    },

    defaultVariants: {
      variant: 'secondary',
      shape: 'circle',
      size: 'md',
    },
  }
)

function Button({
  className,
  variant,
  size,
  shape,
  iconOnly,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, shape, iconOnly }),
        className
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
