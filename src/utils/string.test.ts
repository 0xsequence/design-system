import { describe, expect, it } from 'vitest'

import { capitalize, kebabize, pluralize } from './string.js'

describe('Utils / String', () => {
  it('should capitalize', () => {
    expect(capitalize('string')).toEqual('String')
    expect(capitalize('')).toEqual('')
  })

  it('should kebabize', () => {
    expect(kebabize('')).toEqual('')
    expect(kebabize('a')).toEqual('a')
    expect(kebabize('A')).toEqual('a')
    expect(kebabize('aA')).toEqual('a-a')
    expect(kebabize('aAa')).toEqual('a-aa')
    expect(kebabize('aAA')).toEqual('a-aa')
    expect(kebabize('aAaA')).toEqual('a-aa-a')
    expect(kebabize('HelloWorld')).toEqual('hello-world')
    expect(kebabize('helloworld')).toEqual('helloworld')
  })

  it('should pluralize', () => {
    expect(pluralize(0, 'item', 'items')).toEqual('items')
    expect(pluralize(1, 'item', 'items')).toEqual('item')
    expect(pluralize(2, 'item', 'items')).toEqual('items')
  })
})
