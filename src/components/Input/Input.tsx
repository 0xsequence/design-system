import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

function Input({
  className,
  type,
  autoComplete = 'off',
  spellCheck = 'false',
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'placeholder:text-muted h-[52px] w-full min-w-0 rounded-xl bg-background-input px-4 py-1 text-primary',
        'file:text-primary file:inline-flex file:h-[52px] file:border-0 file:bg-transparent file:text-sm file:font-medium',
        textVariants({ variant: 'normal' }),
        inputBorderStyle,
        focusRingVariants(),
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
