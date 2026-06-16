import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Tag } from './Tag.js'

describe('<Tag />', () => {
  it('renders', () => {
    render(<Tag>ERC1155</Tag>)

    expect(screen.getByText('ERC1155')).toBeInTheDocument()
  })
})
