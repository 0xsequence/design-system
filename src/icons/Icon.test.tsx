import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import ScanIcon from './ScanIcon.js'

import * as icons from './index.js'

describe('Icons', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { container } = render(<ScanIcon />)
    const el = container.querySelector('svg')

    expect(el?.getAttribute('viewBox')).toBe('0 0 24 24')
  })

  it('have a 20x20 viewBox', () => {
    for (const [key, Icon] of Object.entries(icons)) {
      const { container } = render(<Icon />)
      const el = container.querySelector('svg')

      expect(
        el?.getAttribute('viewBox'),
        `${key} does not have a 24x24 viewBox`
      ).toBe('0 0 24 24')
    }
  })
})
