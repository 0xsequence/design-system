import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-xxxlarge',
        'text-xxlarge',
        'text-xlarge',
        'text-large',
        'text-medium',
        'text-normal',
        'text-normal-bold',
        'text-small',
        'text-small-bold',
        'text-xsmall',
        'text-xsmall-bold',
        'text-code',
      ],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
