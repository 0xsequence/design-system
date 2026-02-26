import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from './Field.js'

describe('<Field />', () => {
  afterEach(cleanup)

  it('renders with role="group"', () => {
    render(<Field>Content</Field>)

    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('defaults to vertical orientation', () => {
    render(<Field data-testid="field">Content</Field>)

    expect(screen.getByTestId('field')).toHaveAttribute(
      'data-orientation',
      'vertical'
    )
  })

  it('applies horizontal orientation', () => {
    render(
      <Field orientation="horizontal" data-testid="field">
        Content
      </Field>
    )

    expect(screen.getByTestId('field')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    )
  })
})

describe('<FieldLabel />', () => {
  afterEach(cleanup)

  it('renders when children are provided', () => {
    render(<FieldLabel>Email address</FieldLabel>)

    expect(screen.getByText('Email address')).toBeInTheDocument()
  })

  it('renders nothing when children are absent', () => {
    const { container } = render(<FieldLabel>{undefined}</FieldLabel>)

    expect(container.firstChild).toBeNull()
  })
})

describe('<FieldDescription />', () => {
  afterEach(cleanup)

  it('renders when children are provided', () => {
    render(<FieldDescription>Enter your email.</FieldDescription>)

    expect(screen.getByText('Enter your email.')).toBeInTheDocument()
  })

  it('renders nothing when children are absent', () => {
    const { container } = render(<FieldDescription>{undefined}</FieldDescription>)

    expect(container.firstChild).toBeNull()
  })
})

describe('<FieldError />', () => {
  afterEach(cleanup)

  it('renders nothing when no errors and no children', () => {
    const { container } = render(<FieldError />)

    expect(container.firstChild).toBeNull()
  })

  it('renders with role="alert" for a single error message', () => {
    render(<FieldError errors={[{ message: 'Required' }]} />)

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('renders a list for multiple error messages', () => {
    render(
      <FieldError
        errors={[
          { message: 'Too short' },
          { message: 'Must contain a number' },
        ]}
      />
    )

    expect(screen.getByText('Too short')).toBeInTheDocument()
    expect(screen.getByText('Must contain a number')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('renders children directly when provided', () => {
    render(<FieldError>Custom error message</FieldError>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Custom error message')).toBeInTheDocument()
  })
})

describe('<FieldSet />', () => {
  afterEach(cleanup)

  it('renders as a fieldset element', () => {
    render(
      <FieldSet>
        <FieldLegend>Payment</FieldLegend>
      </FieldSet>
    )

    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.getByText('Payment').tagName).toBe('LEGEND')
  })
})
