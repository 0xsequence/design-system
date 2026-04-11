import type { ComponentProps } from 'react'

import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

function TextArea({
  className,
  resize,
  autoComplete = 'off',
  spellCheck = 'false',
  ...props
}: ComponentProps<'textarea'> & { resize?: boolean }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'text-sm font-medium',
        'bg-background-input text-primary placeholder:text-muted flex field-sizing-content min-h-16 w-full rounded-xl p-3',
        'aria-invalid:outline-destructive aria-invalid:border-destructive',
        resize ? 'resize-y' : 'resize-none',
        inputBorderStyle,
        focusRingVariants(),
        disabledStyle,
        className
      )}
      autoComplete={autoComplete}
      spellCheck={spellCheck}
      {...props}
    />
  )
}

export { TextArea }
