import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs.js'

const TestTabs = ({ defaultValue = 'a' }: { defaultValue?: string }) => (
  <Tabs defaultValue={defaultValue}>
    <TabsList>
      <TabsTrigger value="a">Tab A</TabsTrigger>
      <TabsTrigger value="b">Tab B</TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
)

describe('<Tabs />', () => {
  afterEach(cleanup)

  it('renders all tab triggers', () => {
    render(<TestTabs />)

    expect(screen.getByText('Tab A')).toBeInTheDocument()
    expect(screen.getByText('Tab B')).toBeInTheDocument()
  })

  it('shows the default active tab panel', () => {
    render(<TestTabs defaultValue="a" />)

    expect(screen.getByText('Content A')).toBeInTheDocument()
    expect(screen.queryByText('Content B')).toBeNull()
  })

  it('switches panel when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<TestTabs />)

    await user.click(screen.getByText('Tab B'))

    expect(screen.getByText('Content B')).toBeInTheDocument()
    expect(screen.queryByText('Content A')).toBeNull()
  })

  it('marks the active tab with data-active', async () => {
    const user = userEvent.setup()
    render(<TestTabs />)

    const tabA = screen.getByText('Tab A').closest('[data-slot=tabs-trigger]')!
    const tabB = screen.getByText('Tab B').closest('[data-slot=tabs-trigger]')!

    expect(tabA).toHaveAttribute('data-active')
    expect(tabB).not.toHaveAttribute('data-active')

    await user.click(screen.getByText('Tab B'))

    expect(tabA).not.toHaveAttribute('data-active')
    expect(tabB).toHaveAttribute('data-active')
  })
})
