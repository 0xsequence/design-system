import { cleanup, screen } from '@testing-library/react'

import { renderWithTheme } from '../ThemeProvider/renderWithTheme.js'

import { Modal } from './Modal.js'

describe('<Modal />', () => {
  afterEach(cleanup)

  it('renders', () => {
    renderWithTheme(<Modal>Hello, world!</Modal>)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()
  })
})
