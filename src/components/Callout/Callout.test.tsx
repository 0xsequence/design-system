import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  Callout,
  CalloutContent,
  CalloutHeader,
} from './Callout.js'

describe('<Callout />', () => {
  afterEach(cleanup)

  it('renders with role="alert"', () => {
    render(<Callout>Content</Callout>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('Callout.Helper renders title and children', () => {
    render(
      <Callout.Helper variant="info" title="FYI">
        Extra details here.
      </Callout.Helper>
    )

    expect(screen.getByText('FYI')).toBeInTheDocument()
    expect(screen.getByText('Extra details here.')).toBeInTheDocument()
  })

  it('Callout.Helper calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(
      <Callout.Helper variant="warning" title="Warning" onClose={onClose} />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('Callout.Helper does not render content area when no children', () => {
    render(<Callout.Helper variant="error" title="Error" />)

    expect(
      document.querySelector('[data-slot=callout-content]')
    ).not.toBeInTheDocument()
  })

  it('renders composable parts independently', () => {
    render(
      <Callout variant="success">
        <CalloutHeader>Header text</CalloutHeader>
        <CalloutContent>Body text</CalloutContent>
      </Callout>
    )

    expect(screen.getByText('Header text')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()
  })
})
