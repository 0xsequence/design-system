import { cleanup, render } from '@testing-library/react'

import ScanIcon from './ScanIcon'

import * as icons from './index'

describe('Icons', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { container } = render(<ScanIcon />)
    const el = container.querySelector('svg')

    expect(el?.getAttribute('viewBox')).toBe('0 0 20 20')
  })

  it('have a 20x20 viewBox', () => {
    for (const [key, Icon] of Object.entries(icons)) {
      const { container } = render(<Icon />)
      const el = container.querySelector('svg')

      expect(
        el?.getAttribute('viewBox'),
        `${key} does not have a 20x20 viewBox`
      ).toBe('0 0 20 20')
    }
  })
})
