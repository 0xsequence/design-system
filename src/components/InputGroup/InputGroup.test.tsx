import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './InputGroup.js'

describe('<InputGroup />', () => {
  afterEach(cleanup)

  it('renders with role="group"', () => {
    render(
      <InputGroup>
        <InputGroupInput aria-label="Search" />
      </InputGroup>
    )

    expect(screen.getAllByRole('group')[0]).toHaveAttribute(
      'data-slot',
      'input-group'
    )
  })

  it('renders an input inside the group', () => {
    render(
      <InputGroup>
        <InputGroupInput aria-label="Search" />
      </InputGroup>
    )

    expect(screen.getByRole('textbox', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders addon text content', () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="URL" />
      </InputGroup>
    )

    expect(screen.getByText('https://')).toBeInTheDocument()
  })

  it('clicking addon focuses the input', () => {
    render(
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Amount" />
      </InputGroup>
    )

    fireEvent.click(screen.getByText('$'))

    expect(screen.getByRole('textbox', { name: 'Amount' })).toHaveFocus()
  })

  it('calls onChange on InputGroupInput', () => {
    const onChange = vi.fn()
    render(
      <InputGroup>
        <InputGroupInput aria-label="Search" onChange={onChange} />
      </InputGroup>
    )

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hi' } })

    expect(onChange).toHaveBeenCalled()
  })

  it('renders a textarea with InputGroupTextarea', () => {
    render(
      <InputGroup>
        <InputGroupTextarea aria-label="Notes" />
      </InputGroup>
    )

    expect(screen.getByRole('textbox', { name: 'Notes' })).toBeInTheDocument()
  })
})
