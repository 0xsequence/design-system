import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { AspectRatio } from './AspectRatio.js'

describe('<AspectRatio />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <img src="/photo.jpg" alt="Landscape" />
      </AspectRatio>
    )

    expect(screen.getByAltText('Landscape')).toBeInTheDocument()
  })

  it('has the correct data-slot attribute', () => {
    render(<AspectRatio ratio={1}><div /></AspectRatio>)

    expect(
      document.querySelector('[data-slot=aspect-ratio]')
    ).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    render(
      <AspectRatio ratio={4 / 3} className="my-ratio">
        <div />
      </AspectRatio>
    )

    expect(
      document.querySelector('[data-slot=aspect-ratio]')
    ).toHaveClass('my-ratio')
  })

  it('renders with text content children', () => {
    render(
      <AspectRatio ratio={1}>
        <p>Square content</p>
      </AspectRatio>
    )

    expect(screen.getByText('Square content')).toBeInTheDocument()
  })
})
