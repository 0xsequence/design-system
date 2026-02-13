'use client'

import type { ComponentProps } from 'react'
import { ArrowDownIcon, ArrowUpIcon } from 'src/icons/index.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

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
          '[&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10 [&_thead]:bg-background-primary [&_thead]:border-b [&_thead]:border-border-normal',
          '[&_thead_th]:bg-background-primary',
        ],
        hasContainerScroll && 'overflow-y-auto overflow-x-auto'
      )}
      style={hasContainerScroll ? { maxHeight } : undefined}
    >
      <table
        data-slot="table"
        className={cn(
          textVariants({ variant: 'small' }),
          'w-full caption-bottom',
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
        '[&>td]:first:rounded-l-lg [&>td]:last:rounded-r-lg',
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
        textVariants({ variant: 'normal' }),
        'h-13 px-4 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        'text-muted font-medium  data-[active=true]:font-bold data-[active=true]:text-border-focus',
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
        textVariants({ variant: 'normal' }),
        'text-primary p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
}

function TableSortIcon({
  className,
  active = true,
  direction,
  ...props
}: ComponentProps<'div'> & { active?: boolean; direction: 'asc' | 'desc' }) {
  if (!active) {
    return null
  }

  return (
    <div
      data-slot="table-sort-icon"
      className={cn(className, 'text-border-focus')}
      {...props}
    >
      {direction === 'asc' ? (
        <ArrowUpIcon size="xs" />
      ) : (
        <ArrowDownIcon size="xs" />
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
  TableHeader,
  TableRow,
  TableSortIcon,
}
