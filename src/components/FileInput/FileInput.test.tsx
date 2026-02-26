import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ComponentProps } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { FileInput } from './FileInput.js'

const defaultProps: ComponentProps<typeof FileInput> = {
  name: 'upload',
  validExtensions: ['png', 'jpg'],
}

describe('<FileInput />', () => {
  afterEach(cleanup)

  it('renders with the default placeholder', () => {
    render(<FileInput {...defaultProps} />)

    expect(screen.getByText('Upload a file')).toBeInTheDocument()
  })

  it('renders with a custom placeholder', () => {
    render(<FileInput {...defaultProps} placeholder="Drop a PDF here" />)

    expect(screen.getByText('Drop a PDF here')).toBeInTheDocument()
  })

  it('shows the file name after a file is selected', async () => {
    const user = userEvent.setup()
    render(<FileInput {...defaultProps} />)

    const file = new File(['content'], 'photo.png', { type: 'image/png' })
    const input = document.querySelector('input[type=file]') as HTMLInputElement

    await user.upload(input, file)

    expect(screen.getByText('photo.png')).toBeInTheDocument()
  })

  it('shows the file size after a file is selected', async () => {
    const user = userEvent.setup()
    render(<FileInput {...defaultProps} />)

    const file = new File(['hello world'], 'doc.png', { type: 'image/png' })
    const input = document.querySelector('input[type=file]') as HTMLInputElement

    await user.upload(input, file)

    // File size in kb: 11 bytes / 1000 = 0.01 kb
    expect(screen.getByText(/kb/)).toBeInTheDocument()
  })

  it('calls onValueChange with the File when a file is selected', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(<FileInput {...defaultProps} onValueChange={onValueChange} />)

    const file = new File(['data'], 'image.png', { type: 'image/png' })
    const input = document.querySelector('input[type=file]') as HTMLInputElement

    await user.upload(input, file)

    expect(onValueChange).toHaveBeenCalledWith(file)
  })

  it('shows a clear button after a file is selected', async () => {
    const user = userEvent.setup()
    render(<FileInput {...defaultProps} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    const file = new File(['x'], 'snap.png', { type: 'image/png' })
    await user.upload(
      document.querySelector('input[type=file]') as HTMLInputElement,
      file
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onValueChange with null when the clear button is clicked', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(<FileInput {...defaultProps} onValueChange={onValueChange} />)

    const file = new File(['x'], 'snap.png', { type: 'image/png' })
    await user.upload(
      document.querySelector('input[type=file]') as HTMLInputElement,
      file
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onValueChange).toHaveBeenLastCalledWith(null)
  })

  it('hides the file name after the clear button is clicked', async () => {
    const user = userEvent.setup()
    render(<FileInput {...defaultProps} />)

    const file = new File(['x'], 'snap.png', { type: 'image/png' })
    await user.upload(
      document.querySelector('input[type=file]') as HTMLInputElement,
      file
    )

    expect(screen.getByText('snap.png')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))

    expect(screen.queryByText('snap.png')).not.toBeInTheDocument()
    expect(screen.getByText('Upload a file')).toBeInTheDocument()
  })

  it('is disabled when the disabled prop is set', () => {
    render(<FileInput {...defaultProps} disabled />)

    expect(document.querySelector('input[type=file]')).toBeDisabled()
  })

  it('sets the accept attribute from validExtensions', () => {
    render(<FileInput {...defaultProps} validExtensions={['pdf', 'csv']} />)

    const input = document.querySelector('input[type=file]')
    expect(input).toHaveAttribute('accept')
    expect(input!.getAttribute('accept')).toContain('pdf')
    expect(input!.getAttribute('accept')).toContain('csv')
  })
})
