import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog.js'

describe('<Dialog />', () => {
  afterEach(cleanup)

  it('content is hidden until trigger is clicked', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>My Dialog</DialogTitle>
          <DialogDescription>Some description</DialogDescription>
        </DialogContent>
      </Dialog>
    )

    expect(screen.queryByText('My Dialog')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByText('My Dialog')).toBeInTheDocument()
    expect(screen.getByText('Some description')).toBeInTheDocument()
  })

  it('shows close button by default', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>My Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('hides close button when showCloseButton is false', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogTitle>My Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.queryByRole('button', { name: /close/i })).toBeNull()
  })

  it('renders DialogHeader and DialogFooter', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader>Header content</DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogFooter>Footer content</DialogFooter>
        </DialogContent>
      </Dialog>
    )

    expect(document.querySelector('[data-slot=dialog-header]')).toBeInTheDocument()
    expect(document.querySelector('[data-slot=dialog-footer]')).toBeInTheDocument()
  })

  it('DialogClose dismisses the dialog', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogTitle>My Dialog</DialogTitle>
          <DialogClose>Dismiss</DialogClose>
        </DialogContent>
      </Dialog>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('My Dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(screen.queryByText('My Dialog')).toBeNull()
  })

  it('closes when the close button is clicked', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>My Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('My Dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /close/i }))

    expect(screen.queryByText('My Dialog')).toBeNull()
  })
})
