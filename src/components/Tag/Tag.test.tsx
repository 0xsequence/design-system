import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tag } from './Tag.js'

describe('<Tag />', () => {
  it('renders', () => {
    render(<Tag label="ERC1155" />)

    expect(screen.getByText('ERC1155')).toBeInTheDocument()
  })
})
