import { cva } from 'class-variance-authority'

export const disabledStyle =
  'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none ' +
  'aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none ' +
  'data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:pointer-events-none'

export const inputBorderStyle =
  'border-1 border-border-normal hover:not-disabled:not-[[aria-invalid=true]]:not-has-[[aria-invalid=true]]:border-border-hover focus-within:border-border-hover'

export const focusRingVariants = cva('outline-offset-2 outline-border-focus', {
  variants: {
    variant: {
      visible: 'focus-visible:outline-2',
      within: 'has-[:focus-visible]:outline-2',
    },
  },
  defaultVariants: {
    variant: 'visible',
  },
})

// Used for select, combobox, etc content
export const popupContentStyle =
  'relative z-50 isolate bg-background-raised border border-border-normal shadow-lg rounded-2xl origin-(--transform-origin) max-h-(--available-height) w-(--anchor-width) min-w-36 overflow-hidden'

export const popupTransitionStyle =
  'duration-150 data-starting-style:opacity-0 data-starting-style:scale-95 data-ending-style:opacity-0 data-ending-style:scale-95'
