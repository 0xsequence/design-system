import { Color } from './colors'

describe('Color', () => {
  it('parses rgb colors', () => {
    expect(Color.from('rgb(255, 255, 255)').toRGB()).toEqual([255, 255, 255, 1])
    expect(Color.from('rgb(255, 0, 0)').toRGB()).toEqual([255, 0, 0, 1])
    expect(Color.from('rgb(256, 0, 0)').toRGB()).toEqual([255, 0, 0, 1])

    // Modern format
    expect(Color.from('rgb(255 255 255)').toRGB()).toEqual([255, 255, 255, 1])
  })

  it('parses hls colors', () => {
    expect(Color.from('hsl(0, 0%, 100%)').toRGB()).toEqual([255, 255, 255, 1])
    expect(Color.from('hsl(360, 0%, 100%)').toRGB()).toEqual([255, 255, 255, 1])
    expect(Color.from('hsl(0, 100%, 50%)').toRGB()).toEqual([255, 0, 0, 1])
    expect(Color.from('hsl(120, 100%, 50%)').toRGB()).toEqual([0, 255, 0, 1])
    expect(Color.from('hsl(240, 100%, 50%)').toRGB()).toEqual([0, 0, 255, 1])

    // Modern format
    expect(Color.from('hsl(0 0% 0%)').toRGB()).toEqual([0, 0, 0, 1])
  })

  it('parses rgba colors', () => {
    expect(Color.from('rgba(0, 0, 0, 0.5)').toRGB()).toEqual([0, 0, 0, 0.5])

    // Modern format
    expect(Color.from('rgba(0 0 255 / 0.5)').toRGB()).toEqual([0, 0, 255, 0.5])
  })

  it('parses hsla colors', () => {
    expect(Color.from('hsla(0, 0%, 0%, 0.5)').toRGB()).toEqual([0, 0, 0, 0.5])

    // Modern format
    expect(Color.from('hsla(0 0% 0% / 0.5)').toRGB()).toEqual([0, 0, 0, 0.5])
  })

  it('parses hex colors', () => {
    expect(Color.from('#000000').toRGB()).toEqual([0, 0, 0, 1])
    expect(Color.from('#ffff00').toRGB()).toEqual([255, 255, 0, 1])
    expect(Color.from('#000').toRGB()).toEqual([0, 0, 0, 1])
    expect(Color.from('#f00').toRGB()).toEqual([255, 0, 0, 1])
  })

  it('parses color keywords', () => {
    expect(Color.from('red').toRGB()).toEqual([255, 0, 0, 1])
    expect(Color.from('blue').toRGB()).toEqual([0, 0, 255, 1])
    expect(Color.from('transparent').toRGB()).toEqual([0, 0, 0, 0])
    expect(Color.from('pink').toRGB()).toEqual([255, 192, 203, 1])
    expect(Color.from('aquamarine').toRGB()).toEqual([127, 255, 212, 1])
  })
})
