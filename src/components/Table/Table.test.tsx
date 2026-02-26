import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadButton,
  TableHeader,
  TableRow,
} from './Table.js'

const BasicTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Age</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Alice</TableCell>
        <TableCell>30</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

describe('<Table />', () => {
  afterEach(cleanup)

  it('renders a table with correct semantic roles', () => {
    render(<BasicTable />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Name' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Age' })
    ).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: 'Alice' })).toBeInTheDocument()
    expect(screen.getByRole('cell', { name: '30' })).toBeInTheDocument()
  })

  it('renders the correct number of rows', () => {
    render(<BasicTable />)

    expect(screen.getAllByRole('row')).toHaveLength(2)
  })

  it('TableHeadButton renders children and shows sort icon when active', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableHeadButton active direction="asc">
                Name
              </TableHeadButton>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody />
      </Table>
    )

    expect(screen.getByRole('button', { name: /Name/i })).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot=table-sort-icon]')
    ).toBeInTheDocument()
  })

  it('TableSortIcon is not rendered when active is false', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableHeadButton active={false} direction="desc">
                Score
              </TableHeadButton>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody />
      </Table>
    )

    expect(
      document.querySelector('[data-slot=table-sort-icon]')
    ).not.toBeInTheDocument()
  })

  it('wraps table in a scrollable container', () => {
    render(<BasicTable />)

    expect(
      document.querySelector('[data-slot=table-container]')
    ).toBeInTheDocument()
  })
})
