import { type ComponentProps } from 'react'

import { useIsKeyboardFocused } from '../../hooks/useIsKeyboardFocused.js'
import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

function Input({
  className,
  type,
  autoComplete = 'off',
  spellCheck = 'false',
  ...props
}: ComponentProps<'input'>) {
  const isKeyboardFocused = useIsKeyboardFocused()

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'placeholder:text-muted h-10 w-full min-w-0 rounded-xl bg-background-input px-3 py-1 text-primary',
        'file:text-primary file:inline-flex file:h-13 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'text-sm font-medium',
        inputBorderStyle,
        isKeyboardFocused ? focusRingVariants() : 'focus:outline-none',
        'aria-invalid:outline-destructive aria-invalid:border-destructive',
        disabledStyle,
        className
      )}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      {...props}
    />
  )
}

export { Input }
