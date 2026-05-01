import { cva } from 'class-variance-authority'

export const disabledStyle =
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none ' +
  'aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none ' +
  'data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:pointer-events-none'

export const inputBorderStyle =
  'border-1 border-border-normal hover:not-disabled:not-[[aria-invalid=true]]:not-has-[[aria-invalid=true]]:border-border-hover focus-within:border-border-hover'

export const focusRingVariants = cva('outline-offset-2', {
  variants: {
    variant: {
      visible: 'focus-visible:outline-2 focus-visible:outline-border-focus',
      within:
        'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-border-focus',
    },
  },
  defaultVariants: {
    variant: 'visible',
  },
})
