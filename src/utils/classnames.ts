import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        // Design system composite text utilities
        'text-xlarge',
        'text-large',
        'text-medium',
        'text-normal',
        'text-normal-bold',
        'text-small',
        'text-small-bold',
        // Numeric text sizes (e.g. text-9, text-12, text-14, text-16)
        { text: [(value: string) => /^\d+$/.test(value)] },
      ],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
