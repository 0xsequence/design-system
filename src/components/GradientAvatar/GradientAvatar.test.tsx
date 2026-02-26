import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { GradientAvatar } from './GradientAvatar.js'

describe('<GradientAvatar />', () => {
  afterEach(cleanup)

  it('renders an svg element', () => {
    const { container } = render(<GradientAvatar address="0xabc123" />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has the correct viewBox', () => {
    const { container } = render(<GradientAvatar address="0xabc123" />)

    expect(container.querySelector('svg')).toHaveAttribute(
      'viewBox',
      '0 0 64 64'
    )
  })

  it('renders gradient definitions in defs', () => {
    const { container } = render(<GradientAvatar address="0xabc123" />)

    const defs = container.querySelector('defs')
    expect(defs).toBeInTheDocument()
    expect(defs!.querySelectorAll('linearGradient,radialGradient').length).toBeGreaterThan(0)
  })

  it('produces deterministic output for the same address', () => {
    // Both renders must be alive simultaneously so containers aren't emptied
    const { container: a } = render(<GradientAvatar address="0xdeadbeef" />)
    const { container: b } = render(<GradientAvatar address="0xdeadbeef" />)

    const stopColors = (c: Element) =>
      Array.from(c.querySelectorAll('stop')).map(s =>
        s.getAttribute('stop-color')
      )

    expect(stopColors(a).length).toBeGreaterThan(0)
    expect(stopColors(a)).toEqual(stopColors(b))
  })

  it('produces different gradients for different addresses', () => {
    const { container: a } = render(<GradientAvatar address="0x111" />)
    const { container: b } = render(<GradientAvatar address="0x999" />)

    const stopColors = (c: Element) =>
      Array.from(c.querySelectorAll('stop')).map(s =>
        s.getAttribute('stop-color')
      )

    expect(stopColors(a)).not.toEqual(stopColors(b))
  })

  it('is case-insensitive for address input', () => {
    const { container: lower } = render(
      <GradientAvatar address="0xabcdef" />
    )
    const { container: upper } = render(
      <GradientAvatar address="0xABCDEF" />
    )

    const stopColors = (c: Element) =>
      Array.from(c.querySelectorAll('stop')).map(s =>
        s.getAttribute('stop-color')
      )

    expect(stopColors(lower).length).toBeGreaterThan(0)
    expect(stopColors(lower)).toEqual(stopColors(upper))
  })
})
