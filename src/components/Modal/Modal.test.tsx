import { cleanup, fireEvent, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { renderWithTheme } from '../../providers/ThemeProvider/renderWithTheme.js'

import { Modal } from './Modal.js'

describe('<Modal />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    renderWithTheme(<Modal>Hello, world!</Modal>)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()
  })

  it('renders a string header', () => {
    renderWithTheme(<Modal header="My Title">Body</Modal>)

    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('renders a ReactNode header', () => {
    renderWithTheme(<Modal header={<span>Custom Header</span>}>Body</Modal>)

    expect(screen.getByText('Custom Header')).toBeInTheDocument()
  })

  it('renders a footer', () => {
    renderWithTheme(<Modal footer={<button>Confirm</button>}>Body</Modal>)

    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })

  it('shows a close button when isDismissible is true (default)', () => {
    renderWithTheme(<Modal>Body</Modal>)

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('hides the close button when isDismissible is false', () => {
    renderWithTheme(<Modal isDismissible={false}>Body</Modal>)

    expect(screen.queryByRole('button', { name: /close/i })).toBeNull()
  })

  it('calls onClose when the close button is clicked', () => {
    const onClose = vi.fn()
    renderWithTheme(<Modal onClose={onClose}>Body</Modal>)

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
