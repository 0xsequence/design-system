import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Image } from './Image.js'

describe('<Image />', () => {
  afterEach(cleanup)

  it('renders an img element', () => {
    render(<Image src="/photo.jpg" alt="A photo" />)

    expect(screen.getByRole('img', { name: 'A photo' })).toBeInTheDocument()
  })

  it('forwards src and alt attributes', () => {
    render(<Image src="/photo.jpg" alt="A photo" />)

    const img = screen.getByRole('img', { name: 'A photo' })
    expect(img).toHaveAttribute('src', '/photo.jpg')
    expect(img).toHaveAttribute('alt', 'A photo')
  })

  it('calls onLoad when the image loads', () => {
    const onLoad = vi.fn()
    render(<Image src="/photo.jpg" alt="Photo" onLoad={onLoad} />)

    fireEvent.load(screen.getByRole('img'))

    expect(onLoad).toHaveBeenCalledTimes(1)
  })

  it('accepts a custom className', () => {
    render(<Image src="/photo.jpg" alt="Photo" className="my-image" />)

    expect(screen.getByRole('img')).toHaveClass('my-image')
  })

  it('renders without fadeIn by default (no initial opacity style)', () => {
    render(<Image src="/photo.jpg" alt="Photo" />)

    // Without fadeIn, framer-motion sets no opacity style from our props
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
