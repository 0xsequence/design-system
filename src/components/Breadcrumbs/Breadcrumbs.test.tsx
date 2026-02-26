import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Breadcrumbs } from './Breadcrumbs.js'

const paths = [
  { label: 'Home', url: '/' },
  { label: 'Products', url: '/products' },
  { label: 'Details' },
]

describe('<Breadcrumbs />', () => {
  afterEach(cleanup)

  it('renders all path labels', () => {
    render(<Breadcrumbs paths={paths} />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders links for non-active paths', () => {
    render(<Breadcrumbs paths={paths} />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute(
      'href',
      '/products'
    )
  })

  it('does not render the last path as a link', () => {
    render(<Breadcrumbs paths={paths} />)

    expect(
      screen.queryByRole('link', { name: 'Details' })
    ).not.toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders separators between segments', () => {
    render(<Breadcrumbs paths={paths} />)

    // Two separators for three segments
    expect(screen.getAllByText('/')).toHaveLength(2)
  })

  it('renders no separator for a single path', () => {
    render(<Breadcrumbs paths={[{ label: 'Home', url: '/' }]} />)

    expect(screen.queryByText('/')).not.toBeInTheDocument()
  })

  it('uses a custom renderLink function', () => {
    render(
      <Breadcrumbs
        paths={paths}
        renderLink={(path, children) => (
          <a href={path.url} data-custom="true">
            {children}
          </a>
        )}
      />
    )

    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('data-custom', 'true')
    })
  })
})
