import * as SwitchPrimitive from '@radix-ui/react-switch'

import * as styles from './styles.css'

export const Switch = (props: SwitchPrimitive.SwitchProps) => {
  return (
    <SwitchPrimitive.Root className={styles.root} {...props}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  )
}
