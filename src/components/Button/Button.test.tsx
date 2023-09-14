import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { Button } from './Button'

describe('<Button />', () => {
  afterEach(cleanup)

  it('renders', () => {
    const handleClick = vi.fn()

    render(<Button label="Hello, world!" onClick={handleClick} />)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
