import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { PINCodeInput } from './PINCodeInput.js'

describe('<PINCodeInput />', () => {
  afterEach(cleanup)

  it('renders the correct number of input fields', () => {
    render(
      <PINCodeInput digits={6} value={[]} onChange={vi.fn()} />
    )

    expect(screen.getAllByRole('textbox')).toHaveLength(6)
  })

  it('calls onChange with updated value when a digit is entered', () => {
    const onChange = vi.fn()
    render(
      <PINCodeInput
        digits={4}
        value={['', '', '', '']}
        onChange={onChange}
      />
    )

    const inputs = screen.getAllByRole('textbox')
    fireEvent.change(inputs[0], { target: { value: '5' } })

    expect(onChange).toHaveBeenCalledWith(['5', '', '', ''])
  })

  it('ignores non-digit characters', () => {
    const onChange = vi.fn()
    render(
      <PINCodeInput digits={4} value={['', '', '', '']} onChange={onChange} />
    )

    fireEvent.change(screen.getAllByRole('textbox')[0], {
      target: { value: 'x' },
    })

    expect(onChange).toHaveBeenCalledWith(['', '', '', ''])
  })

  it('backspace clears the current field and moves focus to previous', () => {
    const onChange = vi.fn()
    render(
      <PINCodeInput
        digits={4}
        value={['1', '2', '', '']}
        onChange={onChange}
      />
    )

    const inputs = screen.getAllByRole('textbox')
    fireEvent.keyDown(inputs[1], { key: 'Backspace' })

    expect(onChange).toHaveBeenCalledWith(['1', '', '', ''])
    expect(document.activeElement).toBe(inputs[0])
  })

  it('fills all fields when a complete PIN is pasted', () => {
    const onChange = vi.fn()
    render(
      <PINCodeInput digits={4} value={['', '', '', '']} onChange={onChange} />
    )

    const inputs = screen.getAllByRole('textbox')
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '1234' },
    })

    expect(onChange).toHaveBeenCalledWith(['1', '2', '3', '4'])
  })

  it('calls onConfirm when Enter is pressed and PIN is complete', () => {
    const onConfirm = vi.fn()
    render(
      <PINCodeInput
        digits={4}
        value={['1', '2', '3', '4']}
        onChange={vi.fn()}
        onConfirm={onConfirm}
      />
    )

    fireEvent.keyDown(screen.getAllByRole('textbox')[3], { key: 'Enter' })

    expect(onConfirm).toHaveBeenCalledTimes(1)
  })
})
