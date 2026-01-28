import { describe, expect, it } from 'vitest'

// Tests to see if local storage is properly mocked within the test environment
describe('LocalStorage', () => {
  it('should exist', () => {
    expect(localStorage).toBeDefined()
    expect(localStorage).toBeInstanceOf(Object)
    expect(localStorage).toHaveProperty('getItem')
    expect(localStorage).toHaveProperty('setItem')
    expect(localStorage).toHaveProperty('removeItem')
    expect(localStorage).toHaveProperty('clear')
    expect(localStorage).toHaveProperty('key')
    expect(localStorage).toHaveProperty('length')
  })

  it('should set and get item', () => {
    localStorage.setItem('test', 'test')
    expect(localStorage.getItem('test')).toBe('test')
  })
})
