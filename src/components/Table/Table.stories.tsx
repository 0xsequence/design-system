import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Checkbox } from '../Checkbox/Checkbox.js'

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableSortIcon,
} from './Table.js'

export default {
  title: 'Components/Table',
} as Meta<any>

type Story = StoryObj<typeof Table>

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

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
            <TableHead
              className="w-[100px]"
              data-active={activeColumn === 'invoice'}
            >
              <button
                className="inline-flex items-center gap-1 cursor-pointer"
                onClick={() => handleSort('invoice')}
              >
                Invoice
                <TableSortIcon
                  active={activeColumn === 'invoice'}
                  direction={sortDirection}
                />
              </button>
            </TableHead>
            <TableHead
              data-active={activeColumn === 'status'}
              onClick={() => handleSort('status')}
            >
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Status
                <TableSortIcon
                  active={activeColumn === 'status'}
                  direction={sortDirection}
                />
              </button>
            </TableHead>
            <TableHead
              data-active={activeColumn === 'method'}
              onClick={() => handleSort('method')}
            >
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Method
                <TableSortIcon
                  active={activeColumn === 'method'}
                  direction={sortDirection}
                />
              </button>
            </TableHead>
            <TableHead
              className="text-right"
              data-active={activeColumn === 'amount'}
              onClick={() => handleSort('amount')}
            >
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Amount
                <TableSortIcon
                  active={activeColumn === 'amount'}
                  direction={sortDirection}
                />
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.slice(0, 3).map(invoice => (
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
