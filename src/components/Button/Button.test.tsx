import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { Button } from './Button.js'

describe('<Button />', () => {
  afterEach(cleanup)

  it('renders', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button label="Hello, world!" onClick={handleClick} />)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
