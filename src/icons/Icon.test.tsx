import { cleanup, render } from '@testing-library/react'

import ScanIcon from './ScanIcon'

describe('Icons', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { container } = render(<ScanIcon />)
    const el = container.querySelector('svg')

    expect(el?.getAttribute('viewBox')).toBe('0 0 18 18')
  })
})
