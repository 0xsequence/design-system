import { cleanup, render, screen } from '@testing-library/react'

import { TokenImage } from './TokenImage'

describe('<TokenImage />', () => {
  afterEach(cleanup)

  it('renders token image', () => {
    const { container } = render(
      <TokenImage src="matic-token-icon.png" symbol="MATIC" />
    )
    const el = container.querySelector('img')

    expect(el?.getAttribute('src')).toContain('matic-token-icon.png')
  })

  it('renders fallback symbol text', () => {
    render(<TokenImage symbol="SPAM" />)
    expect(screen.getByText(/SPAM/i)).toBeInTheDocument()
  })
})
