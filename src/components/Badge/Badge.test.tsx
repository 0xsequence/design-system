import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Badge } from './Badge.js'

describe('<Badge />', () => {
  afterEach(cleanup)

  it('renders the value', () => {
    render(<Badge>42</Badge>)

    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    render(<Badge className="my-custom-class">Custom</Badge>)

    expect(screen.getByText('Custom').closest('span')).toHaveClass(
      'my-custom-class'
    )
  })

  it('renders ReactNode as value', () => {
    render(<Badge render={<span data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
