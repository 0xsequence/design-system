'use client'

import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'

type TableProps = ComponentProps<'table'> & {
  stickyHeader?: boolean
  maxHeight?: string
}

function Table({ className, stickyHeader, maxHeight, ...props }: TableProps) {
  const hasContainerScroll = stickyHeader && maxHeight
  const allowPageScrollSticky = stickyHeader && !maxHeight

  return (
    <div
      data-slot="table-container"
      data-sticky-header={stickyHeader}
      className={cn(
        'relative w-full',
        allowPageScrollSticky ? 'overflow-visible' : 'overflow-x-auto',
        stickyHeader && [
          '[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10 [&_thead_th]:bg-background-primary',
        ],
        hasContainerScroll && 'overflow-y-auto overflow-x-auto'
      )}
      style={hasContainerScroll ? { maxHeight } : undefined}
    >
      <table
        data-slot="table"
        className={cn(
          'text-xs',
          'w-full caption-bottom  border-spacing-0 border-separate',
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={cn(className)} {...props} />
}

function TableBody({ className, ...props }: ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={cn(className)} {...props} />
}

function TableFooter({ className, ...props }: ComponentProps<'tfoot'>) {
  return <tfoot data-slot="table-footer" className={cn(className)} {...props} />
}

function TableRow({ className, ...props }: ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'group',
        'hover:[&>td]:bg-background-hover data-[state=selected]:[&>td]:bg-background-hover',
        'focus-within:[&>td]:bg-background-hover',
        'not-last:[&>td]:border-b not-last:[&>td]:border-border-normal',
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-base font-bold text-primary',
        'h-9 px-3 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&:has(button)]:px-0',
        'border-b border-border-normal',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'text-sm font-medium text-primary',
        'h-14 px-3 py-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
}

type SortDirection = 'asc' | 'desc'

function TableHeadButton({
  className,
  children,
  active,
  direction,
  ...props
}: ComponentProps<typeof Button> & {
  active?: boolean
  direction: SortDirection
}) {
  return (
    <Button
      variant={null}
      data-active={active}
      className={cn(
        'inline-flex w-full h-full items-center gap-1 overflow-visible relative text-base font-bold px-3',
        className
      )}
      {...props}
    >
      {children}
      <TableSortIcon active={active} direction={direction} />
    </Button>
  )
}

function TableSortIcon({
  className,
  active = true,
  direction,
  ...props
}: ComponentProps<'div'> & { active?: boolean; direction: SortDirection }) {
  if (!active) {
    return null
  }

  return (
    <div
      data-slot="table-sort-icon"
      className={cn(className, 'text-inherit')}
      {...props}
    >
      {direction === 'asc' ? (
        <ArrowUpIcon className="size-4" />
      ) : (
        <ArrowDownIcon className="size-4" />
      )}
    </div>
  )
}

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeadButton,
  TableHeader,
  TableRow,
  TableSortIcon,
}
