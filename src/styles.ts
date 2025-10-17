import { cva } from 'class-variance-authority'

export const disabledStyle =
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none'

export const inputBorderStyle =
  'border-1 border-border-normal hover:not-disabled:not-[[aria-invalid=true]]:not-has-[[aria-invalid=true]]:border-border-hover'

export const focusRingVariants = cva('', {
  variants: {
    variant: {
      visible: 'focus-visible:outline-2 focus-visible:outline-border-focus',
      within:
        '[&:has(:focus-visible)]:outline-2 [&:has(:focus-visible)]:outline-border-focus',
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
