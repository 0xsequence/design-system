import { cva } from 'class-variance-authority'

export const disabledStyle = 'disabled:cursor-default disabled:opacity-50'

export const inputBorderStyle =
  'border-1 border-border-normal hover:not-disabled:not-focus-visible:not-[&:has(:focus-visible)]:border-border-hover'

export const focusRingVariants = cva('', {
  variants: {
    variant: {
      visible: 'focus-visible:outline-2 focus-visible:outline-border-focus',
      within:
        '[&:has(:focus-visible)]:outline-2 [&:has(:focus-visible)]:outline-border-focus',
    },
    error: {
      true: 'border-border-error!',
    },
    inner: {
      true: 'outline-offset-[-2px]',
      false: 'outline-offset-1',
    },
  },
  defaultVariants: {
    inner: true,
    variant: 'visible',
  },
})
