import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/classnames.js'

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
      xxxlarge: [
        'font-body',
        'font-bold',
        'text-6xl',
        'tracking-normal',
        'leading-15',
      ],
      xxlarge: [
        'font-body',
        'font-bold',
        'text-4xl',
        'tracking-widest',
        'leading-10',
      ],
      xlarge: [
        'font-body',
        'font-bold',
        'text-2xl',
        'tracking-normal',
        'leading-8',
      ],
      large: [
        'font-body',
        'font-semibold',
        'text-xl',
        'tracking-normal',
        'leading-7',
      ],
      medium: [
        'font-body',
        'font-bold',
        'text-base',
        'tracking-normal',
        'leading-6',
      ],
      'normal-bold': [
        'font-body',
        'font-bold',
        'text-sm',
        'tracking-wide',
        'leading-5',
      ],
      normal: [
        'font-body',
        'font-medium',
        'text-sm',
        'tracking-wide',
        'leading-5',
      ],
      'small-bold': [
        'font-body',
        'font-bold',
        'text-xs',
        'tracking-normal',
        'leading-4',
      ],
      small: [
        'font-body',
        'font-medium',
        'text-xs',
        'tracking-wide',
        'leading-4',
      ],
      'xsmall-bold': [
        'font-body',
        'font-bold',
        'text-[0.625rem]',
        'tracking-wide',
        'leading-4',
      ],
      xsmall: [
        'font-body',
        'font-bold',
        'text-[0.625rem]',
        'tracking-wide',
        'leading-4',
      ],
      code: [
        'font-mono',
        'font-normal',
        'text-sm',
        'tracking-normal',
        'leading-5',
      ],
    },

    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },

    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted',
      inverse: 'text-inverse',
      white: 'text-white',
      black: 'text-black',
      negative: 'text-negative',
      positive: 'text-positive',
      warning: 'text-warning',
      info: 'text-info',

      // backwards compatibility
      text100: 'text-primary',
      text80: 'text-secondary',
      text50: 'text-muted',
      inverse100: 'text-inverse',
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

    block: {
      true: 'block',
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
    nowrap,
    block,
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
          nowrap,
          block,
        }),
        className
      )}
      {...rest}
    />
  )
}
