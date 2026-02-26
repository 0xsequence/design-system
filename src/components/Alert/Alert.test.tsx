import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Alert, AlertButton, AlertDescription, AlertTitle } from './Alert.js'

describe('<Alert />', () => {
  afterEach(cleanup)

  it('renders with role="alert"', () => {
    render(<Alert>Something happened</Alert>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>This is important information.</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Heads up')).toBeInTheDocument()
    expect(
      screen.getByText('This is important information.')
    ).toBeInTheDocument()
  })

  it('Alert.Helper renders title, description and icon', () => {
    render(
      <Alert.Helper
        variant="success"
        title="Saved"
        description="Your changes were saved."
      />
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Your changes were saved.')).toBeInTheDocument()
  })

  it('Alert.Helper renders without description', () => {
    render(<Alert.Helper variant="info" title="Note" />)

    expect(screen.getByText('Note')).toBeInTheDocument()
    expect(
      screen.queryByText('[data-slot=alert-description]')
    ).not.toBeInTheDocument()
  })

  it('AlertButton fires onClick', () => {
    const onClick = vi.fn()
    render(
      <Alert>
        <AlertButton onClick={onClick}>Dismiss</AlertButton>
      </Alert>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
