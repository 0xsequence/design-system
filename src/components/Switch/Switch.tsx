import * as SwitchPrimitive from '@radix-ui/react-switch'

import { Box } from '../Box'

import * as styles from './styles.css'

export const Switch = (props: SwitchPrimitive.SwitchProps) => {
  return (
    <SwitchPrimitive.Root className={styles.root} {...props}>
      <Box position="relative" width="full" height="full">
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </Box>
    </SwitchPrimitive.Root>
  )
}
