import { describe, expect, it } from 'vitest'

import { cn } from './classnames.js'

describe('Utils / Classnames', () => {
  it('should merge classes based on extended twMerge classGroups config', () => {
    expect(cn('text-large', 'text-small')).toEqual('text-small')
  })
})
