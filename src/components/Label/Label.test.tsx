import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Label } from './Label.js'

describe('<Label />', () => {
  afterEach(cleanup)

  it('renders as a label element', () => {
    render(<Label>Email</Label>)

    expect(screen.getByText('Email').tagName).toBe('LABEL')
  })

  it('renders text content', () => {
    render(<Label>Full name</Label>)

    expect(screen.getByText('Full name')).toBeInTheDocument()
  })

  it('associates with an input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email-input">Email</Label>
        <input id="email-input" />
      </>
    )

    expect(screen.getByText('Email')).toHaveAttribute('for', 'email-input')
  })

  it('has the correct data-slot attribute', () => {
    render(<Label>Password</Label>)

    expect(screen.getByText('Password')).toHaveAttribute('data-slot', 'label')
  })

  it('accepts a custom className', () => {
    render(<Label className="my-label">Terms</Label>)

    expect(screen.getByText('Terms')).toHaveClass('my-label')
  })
})
