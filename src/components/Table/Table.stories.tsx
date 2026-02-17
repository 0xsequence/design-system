import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Checkbox } from '../Checkbox/Checkbox.js'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeadButton,
  TableHeader,
  TableRow,
} from './Table.js'

export default {
  title: 'Components/Table',
} as Meta<any>

type Story = StoryObj<typeof Table>

const paymentStatuses = ['Paid', 'Pending', 'Unpaid'] as const
const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'] as const

const invoices = Array.from({ length: 20 }, (_, i) => ({
  invoice: `INV${String(i + 1).padStart(3, '0')}`,
  paymentStatus: paymentStatuses[i % 3],
  totalAmount: `$${(100 + (i + 1) * 25).toFixed(2)}`,
  paymentMethod: paymentMethods[i % 3],
}))

const stickyHeaderInvoices = Array.from({ length: 20 }, (_, i) => ({
  invoice: `INV${String(i + 1).padStart(3, '0')}`,
  paymentStatus: paymentStatuses[i % 3],
  totalAmount: `$${(100 + (i + 1) * 25).toFixed(2)}`,
  paymentMethod: paymentMethods[i % 3],
}))

export const Default: Story = {
  render: () => {
    const [activeColumn, setActiveColumn] = useState<
      'invoice' | 'status' | 'method' | 'amount'
    >('amount')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

    const handleSort = (column: 'invoice' | 'status' | 'method' | 'amount') => {
      if (activeColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
      } else {
        setActiveColumn(column)
        setSortDirection('asc')
      }
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead className="w-[100px]">
              <TableHeadButton
                active={activeColumn === 'invoice'}
                direction={sortDirection}
                onClick={() => handleSort('invoice')}
              >
                Invoice
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton
                active={activeColumn === 'status'}
                direction={sortDirection}
                onClick={() => handleSort('status')}
              >
                Status
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton
                active={activeColumn === 'method'}
                direction={sortDirection}
                onClick={() => handleSort('method')}
              >
                Method
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton
                className="justify-end"
                active={activeColumn === 'amount'}
                direction={sortDirection}
                onClick={() => handleSort('amount')}
              >
                Amount
              </TableHeadButton>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
  args: {},
}

const StickyHeaderTableContent = ({
  invoices: data,
  maxHeight,
}: {
  invoices: typeof stickyHeaderInvoices
  maxHeight?: string
}) => {
  const [activeColumn, setActiveColumn] = useState<
    'invoice' | 'status' | 'method' | 'amount'
  >('amount')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: 'invoice' | 'status' | 'method' | 'amount') => {
    if (activeColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setActiveColumn(column)
      setSortDirection('asc')
    }
  }

  return (
    <Table stickyHeader maxHeight={maxHeight}>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead className="w-[100px]">
            <TableHeadButton
              active={activeColumn === 'invoice'}
              direction={sortDirection}
              onClick={() => handleSort('invoice')}
            >
              Invoice
            </TableHeadButton>
          </TableHead>
          <TableHead>
            <TableHeadButton
              active={activeColumn === 'status'}
              direction={sortDirection}
              onClick={() => handleSort('status')}
            >
              Status
            </TableHeadButton>
          </TableHead>
          <TableHead>
            <TableHeadButton
              active={activeColumn === 'method'}
              direction={sortDirection}
              onClick={() => handleSort('method')}
            >
              Method
            </TableHeadButton>
          </TableHead>
          <TableHead>
            <TableHeadButton
              className="justify-end"
              active={activeColumn === 'amount'}
              direction={sortDirection}
              onClick={() => handleSort('amount')}
            >
              Amount
            </TableHeadButton>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export const StickyHeader: Story = {
  render: () => (
    <StickyHeaderTableContent
      invoices={stickyHeaderInvoices}
      maxHeight="300px"
    />
  ),
  args: {},
}

export const StickyHeaderWithPageScroll: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div className="h-[500px] overflow-y-auto rounded-xl border border-border-normal">
      <div className="space-y-8 p-4">
        <div className="h-40 bg-background-secondary rounded-xl flex items-center justify-center text-muted">
          Top content — scroll down
        </div>
        <p className="text-muted">
          When you scroll down, the header stays fixed at the top of the
          viewport.
        </p>
        <StickyHeaderTableContent invoices={stickyHeaderInvoices} />
        <div className="h-96 bg-background-secondary rounded-xl flex items-center justify-center text-muted">
          Bottom content — scroll to see the sticky header behavior
        </div>
      </div>
    </div>
  ),
  args: {},
}
