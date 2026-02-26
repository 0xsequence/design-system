import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { RadioGroup, RadioGroupItem } from './RadioGroup.js'

const TestRadioGroup = (props: {
  defaultValue?: string
  onValueChange?: (value: string) => void
}) => (
  <RadioGroup {...props}>
    <RadioGroupItem value="apple" aria-label="Apple" />
    <RadioGroupItem value="banana" aria-label="Banana" />
    <RadioGroupItem value="cherry" aria-label="Cherry" disabled />
  </RadioGroup>
)

describe('<RadioGroup />', () => {
  afterEach(cleanup)

  it('renders all radio items', () => {
    render(<TestRadioGroup />)

    expect(screen.getByRole('radio', { name: 'Apple' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Banana' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Cherry' })).toBeInTheDocument()
  })

  it('checks the item matching defaultValue', () => {
    render(<TestRadioGroup defaultValue="banana" />)

    expect(screen.getByRole('radio', { name: 'Apple' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Banana' })).toBeChecked()
  })

  it('changes selection on click', () => {
    render(<TestRadioGroup defaultValue="apple" />)

    fireEvent.click(screen.getByRole('radio', { name: 'Banana' }))

    expect(screen.getByRole('radio', { name: 'Banana' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Apple' })).not.toBeChecked()
  })

  it('calls onValueChange with the selected value', () => {
    const onValueChange = vi.fn()
    render(<TestRadioGroup onValueChange={onValueChange} />)

    fireEvent.click(screen.getByRole('radio', { name: 'Apple' }))

    expect(onValueChange).toHaveBeenCalledWith('apple', expect.anything())
  })

  it('does not select a disabled item', () => {
    render(<TestRadioGroup />)

    fireEvent.click(screen.getByRole('radio', { name: 'Cherry' }))

    expect(screen.getByRole('radio', { name: 'Cherry' })).not.toBeChecked()
  })
})
