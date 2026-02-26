import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { CheckmarkIcon, CloseIcon } from '../../icons/index.js'

import { IconButton } from './IconButton.js'

describe('<IconButton />', () => {
  afterEach(cleanup)

  it('renders a button', () => {
    render(<IconButton icon={CloseIcon} aria-label="Close" />)

    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('renders the icon as an svg', () => {
    render(<IconButton icon={CloseIcon} aria-label="Close" />)

    expect(
      screen.getByRole('button', { name: 'Close' }).querySelector('svg')
    ).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<IconButton icon={CloseIcon} aria-label="Close" onClick={onClick} />)

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is set', () => {
    render(<IconButton icon={CloseIcon} aria-label="Close" disabled />)

    expect(screen.getByRole('button', { name: 'Close' })).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn()
    render(
      <IconButton icon={CloseIcon} aria-label="Close" disabled onClick={onClick} />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Close' }))

    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders different icons', () => {
    const { rerender } = render(
      <IconButton icon={CloseIcon} aria-label="Close" />
    )
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()

    rerender(<IconButton icon={CheckmarkIcon} aria-label="Confirm" />)
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })
})
