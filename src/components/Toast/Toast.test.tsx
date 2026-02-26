import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { type ToastProps, ToastProvider, useToast } from './Toast.js'

const Trigger = (props: ToastProps) => {
  const toast = useToast()
  return <button onClick={() => toast(props)}>Trigger</button>
}

const setup = (props: ToastProps) =>
  render(
    <ToastProvider>
      <Trigger {...props} />
    </ToastProvider>
  )

describe('<Toast />', () => {
  afterEach(cleanup)

  it('shows title and description when triggered', () => {
    setup({ title: 'Hello', description: 'World' })

    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }))

    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('World')).toBeInTheDocument()
  })

  it('shows dismiss button by default', () => {
    setup({ title: 'Hello' })

    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }))

    // The close button is aria-hidden during animation; query the DOM directly
    expect(document.querySelector('button[aria-label="Close"]')).toBeInTheDocument()
  })

  it('hides dismiss button when isDismissible is false', () => {
    setup({ title: 'Hello', isDismissible: false })

    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }))

    expect(document.querySelector('button[aria-label="Close"]')).toBeNull()
  })

  it('can show multiple toasts', () => {
    setup({ title: 'First' })

    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }))
    fireEvent.click(screen.getByRole('button', { name: 'Trigger' }))

    expect(screen.getAllByText('First')).toHaveLength(2)
  })
})
