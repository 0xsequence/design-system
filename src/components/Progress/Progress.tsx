import * as ProgressPrimitive from '@radix-ui/react-progress'

import { Atoms } from '~/css'

import { Box } from '../Box'

interface ProgressProps {
  value: number // Ratio between 0 and 1
  color?: Atoms['color']
}

export const Progress = (props: ProgressProps) => {
  const { value, color = 'positive' } = props
  const percent = value * 100

  return (
    <Box
      as={ProgressPrimitive.Root}
      value={percent}
      borderRadius="circle"
      background="backgroundPrimary"
      width="full"
      height="1"
      overflow="hidden"
      position="relative"
    >
      <Box
        as={ProgressPrimitive.ProgressIndicator}
        style={{
          width: `${percent}%`,
          transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
          backgroundSize: '300% 100%',
        }}
        height="full"
        borderRadius="circle"
        background={color}
      />
    </Box>
  )
}
