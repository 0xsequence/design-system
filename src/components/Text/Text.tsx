import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '~/utils'

export const textVariants = cva('', {
  variants: {
    variant: {
      inherit: [
        'font-inherit',
        'text-inherit',
        'leading-inherit',
        'tracking-inherit',
        'font-inherit',
      ],
      xlarge: [
        'font-body',
        'text-3xl',
        'leading-9',
        'tracking-none',
        'font-bold',
      ],
      large: [
        'font-body',
        'text-xl',
        'leading-7',
        'tracking-normal',
        'font-semibold',
      ],
      medium: [
        'font-body',
        'text-base',
        'leading-6',
        'tracking-normal',
        'font-bold',
      ],
      normal: [
        'font-body',
        'text-sm',
        'leading-5',
        'tracking-wide',
        'font-normal',
      ],
      small: [
        'font-body',
        'text-xs',
        'leading-4',
        'tracking-wide',
        'font-medium',
      ],
      xsmall: [
        'font-body',
        'text-[0.625rem]',
        'leading-4',
        'tracking-wide',
        'font-bold',
      ],
      code: [
        'font-mono',
        'text-sm',
        'leading-5',
        'tracking-none',
        'font-normal',
      ],
    },

    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },

    color: {
      text100: 'text-text-100',
      text80: 'text-text-80',
      text50: 'text-text-50',
      white: 'text-white',
      black: 'text-black',
      negative: 'text-negative',
      positive: 'text-positive',
      warning: 'text-warning',
      info: 'text-info',
    },

    ellipsis: {
      true: ['overflow-hidden', 'whitespace-nowrap', 'text-ellipsis'],
    },

    italic: {
      true: 'italic',
    },

    underline: {
      true: 'underline',
    },

    uppercase: {
      true: 'uppercase',
    },

    capitalize: {
      true: 'capitalize',
    },

    nowrap: {
      true: 'whitespace-nowrap',
    },

    hidden: {
      true: [
        'border-0',
        'clip-rect-0',
        'h-[1px]',
        '-m-[1px]',
        'overflow-hidden',
        'p-0',
        'absolute',
        'w-[1px]',
      ],
    },
  },
  defaultVariants: {
    variant: 'inherit',
  },
})

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'hidden' | 'color'>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

export const Text = (props: TextProps) => {
  const {
    asChild,
    variant = 'inherit',
    color,
    fontWeight,
    className,
    hidden,
    italic,
    underline,
    ellipsis,
    uppercase,
    capitalize,
    ...rest
  } = props

  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={cn(
        textVariants({
          variant,
          fontWeight,
          color,
          hidden,
          italic,
          underline,
          ellipsis,
          uppercase,
          capitalize,
        }),
        className
      )}
      {...rest}
    />
  )
}
