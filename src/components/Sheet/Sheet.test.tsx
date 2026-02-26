import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet.js'

const TestSheet = ({
  side,
}: {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) => (
  <Sheet>
    <SheetTrigger>Open sheet</SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Sheet title</SheetTitle>
        <SheetDescription>Sheet description</SheetDescription>
      </SheetHeader>
      <p>Sheet body content</p>
    </SheetContent>
  </Sheet>
)

describe('<Sheet />', () => {
  afterEach(cleanup)

  it('content is hidden until trigger is clicked', () => {
    render(<TestSheet />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows content when trigger is clicked', () => {
    render(<TestSheet />)

    fireEvent.click(screen.getByRole('button', { name: 'Open sheet' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Sheet title')).toBeInTheDocument()
    expect(screen.getByText('Sheet description')).toBeInTheDocument()
    expect(screen.getByText('Sheet body content')).toBeInTheDocument()
  })

  it('closes when the built-in close button is clicked', () => {
    render(<TestSheet />)

    fireEvent.click(screen.getByRole('button', { name: 'Open sheet' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('applies right-side by default', () => {
    render(<TestSheet />)

    fireEvent.click(screen.getByRole('button', { name: 'Open sheet' }))

    expect(
      document.querySelector('[data-slot=sheet-content]')
    ).toHaveAttribute('data-side', 'right')
  })

  it('applies left-side when side="left"', () => {
    render(<TestSheet side="left" />)

    fireEvent.click(screen.getByRole('button', { name: 'Open sheet' }))

    expect(
      document.querySelector('[data-slot=sheet-content]')
    ).toHaveAttribute('data-side', 'left')
  })
})
