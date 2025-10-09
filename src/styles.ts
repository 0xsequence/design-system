import { cva } from 'class-variance-authority'

export const disabledStyle = 'disabled:cursor-default disabled:opacity-50'

export const inputBorderStyle =
  'border-none ring-inset ring-1 ring-border-normal hover:not-disabled:not-focus-visible:ring-border-hover'

export const focusRingVariants = cva('outline-hidden', {
  variants: {
    variant: {
      visible: `focus-visible:ring-2 focus-visible:ring-border-focus!`,
      within: `focus-within:[&:has(:focus-visible)]:ring-2 focus-within:[&:has(:focus-visible)]:ring-border-focus!`,
    },
    error: {
      true: `ring-border-error!`,
    },
    inner: {
      true: 'ring-inset',
    },
  },
  defaultVariants: {
    inner: true,
    variant: 'visible',
  },
})
