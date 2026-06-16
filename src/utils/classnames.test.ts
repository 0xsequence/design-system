import { describe, expect, it } from 'vitest'

import { cn } from './classnames.js'

describe('Utils / Classnames', () => {
  it('should merge classes based on extended twMerge classGroups config', () => {
    expect(cn('text-xl', 'text-xs')).toEqual('text-xs')
  })

  it('should merge classes based on extended twMerge classGroups config', () => {
    expect(cn('text-xl', 'text-xxs')).toEqual('text-xxs')
  })

  it('should merge classes based on extended twMerge classGroups config', () => {
    expect(cn('text-xxs', 'text-xl')).toEqual('text-xl')
  })

  it('should merge tailwind text- utility with our text variant classes', () => {
    expect(cn('text-xxs', 'text-yellow-500')).toEqual(
      'text-xxs text-yellow-500'
    )
  })
})
