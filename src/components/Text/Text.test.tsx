import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Text } from './Text.js'

describe('<Text />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Text>Hello, World!</Text>)
    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
  })
})
