import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './Empty.js'

describe('<Empty />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    render(<Empty>No results found.</Empty>)

    expect(screen.getByText('No results found.')).toBeInTheDocument()
  })

  it('has the correct data-slot attribute', () => {
    render(<Empty>Content</Empty>)

    expect(document.querySelector('[data-slot=empty]')).toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    render(<Empty className="my-empty">Content</Empty>)

    expect(document.querySelector('[data-slot=empty]')).toHaveClass('my-empty')
  })
})

describe('<EmptyTitle />', () => {
  afterEach(cleanup)

  it('renders title text', () => {
    render(<EmptyTitle>Nothing here yet</EmptyTitle>)

    expect(screen.getByText('Nothing here yet')).toBeInTheDocument()
  })

  it('has the correct data-slot attribute', () => {
    render(<EmptyTitle>Title</EmptyTitle>)

    expect(
      document.querySelector('[data-slot=empty-title]')
    ).toBeInTheDocument()
  })
})

describe('<EmptyDescription />', () => {
  afterEach(cleanup)

  it('renders description text', () => {
    render(<EmptyDescription>Try adjusting your filters.</EmptyDescription>)

    expect(screen.getByText('Try adjusting your filters.')).toBeInTheDocument()
  })

  it('has the correct data-slot attribute', () => {
    render(<EmptyDescription>Desc</EmptyDescription>)

    expect(
      document.querySelector('[data-slot=empty-description]')
    ).toBeInTheDocument()
  })
})

describe('<EmptyMedia />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    render(
      <EmptyMedia>
        <img src="/icon.svg" alt="Empty icon" />
      </EmptyMedia>
    )

    expect(screen.getByAltText('Empty icon')).toBeInTheDocument()
  })

  it('defaults to data-variant="default"', () => {
    render(<EmptyMedia data-testid="media" />)

    expect(document.querySelector('[data-slot=empty-icon]')).toHaveAttribute(
      'data-variant',
      'default'
    )
  })

  it('applies the icon variant', () => {
    render(<EmptyMedia variant="icon" />)

    expect(document.querySelector('[data-slot=empty-icon]')).toHaveAttribute(
      'data-variant',
      'icon'
    )
  })
})

describe('<Empty /> composing all parts', () => {
  afterEach(cleanup)

  it('renders a complete empty state', () => {
    render(
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <img src="/empty.svg" alt="" />
          </EmptyMedia>
          <EmptyTitle>No items</EmptyTitle>
          <EmptyDescription>Add one to get started.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <button>Add item</button>
        </EmptyContent>
      </Empty>
    )

    expect(screen.getByText('No items')).toBeInTheDocument()
    expect(screen.getByText('Add one to get started.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add item' })).toBeInTheDocument()
  })
})
