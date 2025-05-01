import { compareAddress, truncateAddress } from './address.js'

describe('Utils / Address', () => {
  it('should compare two addresses', () => {
    expect(
      compareAddress(
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
      )
    ).toEqual(true)
    expect(
      compareAddress(
        '0x1111111111111111111111111111111111111111',
        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
      )
    ).toEqual(false)
    expect(
      compareAddress(undefined, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    ).toEqual(false)
    expect(compareAddress(undefined, undefined)).toEqual(false)
  })

  it('should truncate an address', () => {
    expect(
      truncateAddress('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    ).toEqual('0xEeeeeEeeeEeEeeEeEeEe…EeE')
    expect(
      truncateAddress('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 8, 4)
    ).toEqual('0xEeeeeEee…EEeE')
    expect(
      truncateAddress('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', 21, 20)
    ).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
  })
})
