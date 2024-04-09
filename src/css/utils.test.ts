import { kebabize, mapVarName, selectorize, VAR_PREFIX } from './utils'

describe('CSS Utils', () => {
  it('kebabize', () => {
    expect(kebabize('')).toEqual('')
    expect(kebabize('a')).toEqual('a')
    expect(kebabize('A')).toEqual('a')
    expect(kebabize('aA')).toEqual('a-a')
    expect(kebabize('aAa')).toEqual('a-aa')
    expect(kebabize('aAA')).toEqual('a-aa')
    expect(kebabize('aAaA')).toEqual('a-aa-a')
  })

  it('selectorize', () => {
    expect(selectorize('')).toEqual('.')
    expect(selectorize('a')).toEqual('.a')
    expect(selectorize('a b')).toEqual('.a.b')
    expect(selectorize('a b c')).toEqual('.a.b.c')
  })

  it('mapVarName', () => {
    expect(mapVarName(null, ['colors', 'backgroundPrimary'])).toEqual(
      `${VAR_PREFIX}-colors-background-primary`
    )
    expect(mapVarName(null, ['space', '10'])).toEqual(`${VAR_PREFIX}-space-10`)
    expect(mapVarName(null, ['a', 'B', 'c', 'D', 'eF-g'])).toEqual(
      `${VAR_PREFIX}-a-b-c-d-e-f-g`
    )
  })
})
