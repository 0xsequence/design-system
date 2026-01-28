import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { NumericInput } from './NumericInput.js'

describe('<NumericInput />', () => {
  it('renders', () => {
    render(
      <NumericInput
        name="address"
        placeholder="Enter address"
        onChange={value => value}
      />
    )

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123.456' } })

    expect(screen.getByDisplayValue('123.456')).toBeInTheDocument()
  })

  it('truncates decimal precision when decimals prop is provided', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" decimals={2} onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Should allow up to 2 decimal places
    fireEvent.change(el, { target: { value: '123.45' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123.45' }),
      })
    )

    // Should truncate more than 2 decimal places
    onChange.mockClear()
    fireEvent.change(el, { target: { value: '123.456' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123.45' }),
      })
    )
  })

  it('allows unlimited decimal places when decimals prop is not provided', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" onChange={onChange} />)

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123.456789' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123.456789' }),
      })
    )
  })

  it('truncates to integers when decimals is 0', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" decimals={0} onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Should allow integers
    fireEvent.change(el, { target: { value: '123' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123' }),
      })
    )

    // Should truncate decimal values to integers
    onChange.mockClear()
    fireEvent.change(el, { target: { value: '123.5' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123' }),
      })
    )

    // Should truncate trailing decimal point
    onChange.mockClear()
    fireEvent.change(el, { target: { value: '123.' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123' }),
      })
    )
  })

  it('should truncate decimal values when decimals is 0', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" decimals={0} onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Test truncation of pasted decimal values to integers
    const testCases = [
      { input: '1.234', expected: '1' }, // Should truncate to integer
      { input: '123.456789', expected: '123' }, // Should truncate to integer
      { input: '0.9999', expected: '0' }, // Should truncate to integer (not round)
      { input: '5.0', expected: '5' }, // Should truncate trailing .0
    ]

    testCases.forEach(({ input, expected }) => {
      onChange.mockClear()
      fireEvent.change(el, { target: { value: input } })
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: expected }),
        })
      )
    })
  })

  it('handles decimal input correctly', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Test typing "0.1" directly should result in "0.1"
    fireEvent.change(el, { target: { value: '0.1' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '0.1' }),
      })
    )
  })

  it('should strip leading zeros correctly', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Test specific values with leading zero stripping
    const testCases = [
      { input: '01', expected: '1' }, // This should strip leading zero
      { input: '0.1', expected: '0.1' }, // This should NOT strip leading zero (decimal)
      { input: '0.01', expected: '0.01' }, // This should NOT strip leading zero (decimal)
      { input: '00.1', expected: '0.1' }, // This should strip extra leading zeros but keep one before decimal
    ]

    testCases.forEach(({ input, expected }) => {
      onChange.mockClear()
      fireEvent.change(el, { target: { value: input } })
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: expected }),
        })
      )
    })
  })

  it('should handle replacing 0 with .1 correctly', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // User replaces entire value "0" with ".1" - should become "0.1"
    fireEvent.change(el, { target: { value: '.1' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '0.1' }),
      })
    )
  })

  it('should truncate pasted values that exceed decimal precision', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" decimals={2} onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // Test truncation of pasted values
    const testCases = [
      { input: '0.123', expected: '0.12' }, // Should truncate to 2 decimals
      { input: '123.456789', expected: '123.45' }, // Should truncate to 2 decimals
      { input: '0.1', expected: '0.1' }, // Should not change (already within limit)
      { input: '123.45', expected: '123.45' }, // Should not change (exactly at limit)
      { input: '123', expected: '123' }, // Should not change (no decimals)
    ]

    testCases.forEach(({ input, expected }) => {
      onChange.mockClear()
      fireEvent.change(el, { target: { value: input } })
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: expected }),
        })
      )
    })
  })

  it('should truncate value when decimals prop changes', () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <NumericInput
        name="amount"
        decimals={3}
        onChange={onChange}
        value="123.456"
      />
    )

    // Initially should allow the 3 decimal places
    expect(onChange).not.toHaveBeenCalled()

    // Change decimals from 3 to 2 - should trigger truncation
    onChange.mockClear()
    rerender(
      <NumericInput
        name="amount"
        decimals={2}
        onChange={onChange}
        value="123.456"
      />
    )

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123.45' }),
      })
    )

    // Change decimals from 2 to 0 - should trigger integer truncation
    onChange.mockClear()
    rerender(
      <NumericInput
        name="amount"
        decimals={0}
        onChange={onChange}
        value="123.45"
      />
    )

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '123' }),
      })
    )
  })

  it('should handle typing 0.1 with decimals=0 correctly', () => {
    const onChange = vi.fn()
    render(<NumericInput name="amount" decimals={0} onChange={onChange} />)

    const el = screen.getByRole('textbox')

    // The specific issue: typing "0.1" when decimals=0 should result in "0", not "1"
    fireEvent.change(el, { target: { value: '0.1' } })
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '0' }), // Should be "0", not "1"
      })
    )
  })
})
