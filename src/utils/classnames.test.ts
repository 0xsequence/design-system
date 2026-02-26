import { describe, expect, it } from 'vitest'

import { cn } from './classnames.js'

describe('Utils / Classnames', () => {
  it('should merge classes based on extended twMerge classGroups config', () => {
    expect(cn('text-large', 'text-small')).toEqual('text-small')
  })

  it('should merge tailwind text- utility with our text variant classes', () => {
    expect(cn('text-small', 'text-yellow-500')).toEqual(
      'text-small text-yellow-500'
    )
  })
})
