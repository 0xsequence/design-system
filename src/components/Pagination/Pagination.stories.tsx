import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select/Select.js'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination.js'

function PaginationStoryFrame({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-xl">{children}</div>
}

type StoryLinkProps = Pick<
  ComponentProps<typeof PaginationLink>,
  'aria-disabled' | 'className' | 'href' | 'onClick'
>

function createPageLinkProps(
  targetPage: number,
  setPage: (page: number) => void
): StoryLinkProps {
  return {
    href: `/page/${targetPage}`,
    onClick: event => {
      event.preventDefault()
      setPage(targetPage)
    },
  }
}

function createNavigationLinkProps({
  disabled,
  setPage,
  targetPage,
}: {
  disabled: boolean
  setPage: (page: number) => void
  targetPage: number
}): StoryLinkProps {
  return {
    href: `/page/${targetPage}`,
    'aria-disabled': disabled || undefined,
    className: disabled ? 'pointer-events-none opacity-50' : undefined,
    onClick: event => {
      event.preventDefault()

      if (!disabled) {
        setPage(targetPage)
      }
    },
  }
}

function getVisiblePages(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
) {
  // Always produce the same number of slots: 2*siblingCount + 5
  // = first + last + current + 2*siblings + 2 ellipses
  const totalSlots = 2 * siblingCount + 5

  if (totalPages <= totalSlots) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 1)
  const rightSibling = Math.min(currentPage + siblingCount, totalPages)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  // Near start: expand right to fill slots
  if (!showLeftEllipsis) {
    const edgeCount = totalSlots - 2 // slots minus ellipsis and last page
    const pages = Array.from({ length: edgeCount }, (_, i) => i + 1)
    return [...pages, 'end-ellipsis', totalPages]
  }

  // Near end: expand left to fill slots
  if (!showRightEllipsis) {
    const edgeCount = totalSlots - 2
    const pages = Array.from(
      { length: edgeCount },
      (_, i) => totalPages - edgeCount + 1 + i
    )
    return [1, 'start-ellipsis', ...pages]
  }

  // Middle: both ellipses visible
  const middle: number[] = []
  for (let i = leftSibling; i <= rightSibling; i++) {
    middle.push(i)
  }
  return [1, 'start-ellipsis', ...middle, 'end-ellipsis', totalPages]
}

function DefaultPaginationStory() {
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 10
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <PaginationStoryFrame>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              {...createNavigationLinkProps({
                disabled: currentPage === 1,
                setPage: setCurrentPage,
                targetPage: Math.max(1, currentPage - 1),
              })}
            />
          </PaginationItem>
          {visiblePages.map(page =>
            typeof page === 'string' ? (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  {...createPageLinkProps(page, setCurrentPage)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              {...createNavigationLinkProps({
                disabled: currentPage === totalPages,
                setPage: setCurrentPage,
                targetPage: Math.min(totalPages, currentPage + 1),
              })}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </PaginationStoryFrame>
  )
}

function SimplePaginationStory() {
  const [currentPage, setCurrentPage] = useState(3)

  return (
    <PaginationStoryFrame>
      <Pagination>
        <PaginationContent>
          {[1, 2, 3, 4, 5].map(page => (
            <PaginationItem key={page}>
              <PaginationLink
                {...createPageLinkProps(page, setCurrentPage)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </PaginationStoryFrame>
  )
}

function IconsOnlyPaginationStory() {
  const [currentPage, setCurrentPage] = useState(3)
  const totalPages = 8

  return (
    <PaginationStoryFrame>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-muted text-sm">
          Page {currentPage} of {totalPages}
        </div>
        <Pagination className="mx-0 w-auto justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                text=""
                {...createNavigationLinkProps({
                  disabled: currentPage === 1,
                  setPage: setCurrentPage,
                  targetPage: Math.max(1, currentPage - 1),
                })}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                text=""
                {...createNavigationLinkProps({
                  disabled: currentPage === totalPages,
                  setPage: setCurrentPage,
                  targetPage: Math.min(totalPages, currentPage + 1),
                })}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </PaginationStoryFrame>
  )
}

function CustomNavLabelsStory() {
  const [currentPage, setCurrentPage] = useState(2)

  return (
    <PaginationStoryFrame>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              text="Older"
              {...createNavigationLinkProps({
                disabled: currentPage === 1,
                setPage: setCurrentPage,
                targetPage: Math.max(1, currentPage - 1),
              })}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              {...createPageLinkProps(1, setCurrentPage)}
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              {...createPageLinkProps(2, setCurrentPage)}
              isActive={currentPage === 2}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              {...createPageLinkProps(3, setCurrentPage)}
              isActive={currentPage === 3}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              text="Newer"
              {...createNavigationLinkProps({
                disabled: currentPage === 3,
                setPage: setCurrentPage,
                targetPage: Math.min(3, currentPage + 1),
              })}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </PaginationStoryFrame>
  )
}

function RowsPerPagePaginationStory() {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalItems = 97
  const totalPages = Math.ceil(totalItems / rowsPerPage)

  const startItem = (currentPage - 1) * rowsPerPage + 1
  const endItem = Math.min(currentPage * rowsPerPage, totalItems)
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <PaginationStoryFrame>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-muted text-sm">Rows per page</span>
          <Select
            value={String(rowsPerPage)}
            onValueChange={value => {
              setRowsPerPage(Number(value))
              setCurrentPage(1)
            }}
          >
            <SelectTrigger size="sm" className="w-18">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-muted text-sm">
            {startItem}–{endItem} of {totalItems}
          </span>
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                text=""
                {...createNavigationLinkProps({
                  disabled: currentPage === 1,
                  setPage: setCurrentPage,
                  targetPage: Math.max(1, currentPage - 1),
                })}
              />
            </PaginationItem>
            {visiblePages.map(page =>
              typeof page === 'string' ? (
                <PaginationItem key={page}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    {...createPageLinkProps(page, setCurrentPage)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                text=""
                {...createNavigationLinkProps({
                  disabled: currentPage === totalPages,
                  setPage: setCurrentPage,
                  targetPage: Math.min(totalPages, currentPage + 1),
                })}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </PaginationStoryFrame>
  )
}

function FirstLastPaginationStory() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 17
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <PaginationStoryFrame>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink
              aria-label="Go to first page"
              size="sm"
              className="rounded-full"
              {...createNavigationLinkProps({
                disabled: currentPage === 1,
                setPage: setCurrentPage,
                targetPage: 1,
              })}
            >
              <ChevronsLeftIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              aria-label="Go to previous page"
              size="sm"
              className="rounded-full"
              {...createNavigationLinkProps({
                disabled: currentPage === 1,
                setPage: setCurrentPage,
                targetPage: Math.max(1, currentPage - 1),
              })}
            >
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          {visiblePages.map(page =>
            typeof page === 'string' ? (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  {...createPageLinkProps(page, setCurrentPage)}
                  isActive={currentPage === page}
                  className={
                    currentPage === page
                      ? 'rounded-full bg-background-secondary border-border-button'
                      : 'rounded-full'
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationLink
              aria-label="Go to next page"
              size="sm"
              className="rounded-full"
              {...createNavigationLinkProps({
                disabled: currentPage === totalPages,
                setPage: setCurrentPage,
                targetPage: Math.min(totalPages, currentPage + 1),
              })}
            >
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              aria-label="Go to last page"
              size="sm"
              className="rounded-full"
              {...createNavigationLinkProps({
                disabled: currentPage === totalPages,
                setPage: setCurrentPage,
                targetPage: totalPages,
              })}
            >
              <ChevronsRightIcon className="size-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </PaginationStoryFrame>
  )
}

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => <DefaultPaginationStory />,
}

export const Simple: Story = {
  render: () => <SimplePaginationStory />,
}

export const IconsOnly: Story = {
  render: () => <IconsOnlyPaginationStory />,
}

export const CustomNavLabels: Story = {
  render: () => <CustomNavLabelsStory />,
}

export const WithRowsPerPage: Story = {
  render: () => <RowsPerPagePaginationStory />,
}

export const WithFirstLast: Story = {
  render: () => <FirstLastPaginationStory />,
}
