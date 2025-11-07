import type { Meta, StoryObj } from '@storybook/react-vite'

import { RefreshIcon, SettingsIcon } from '../../icons/index.js'

import { Callout, CalloutButton } from './Callout.js'

export default {
  title: 'Components/Callout',
  component: Callout.Helper,
} as Meta<typeof Callout.Helper>

type Story = StoryObj<typeof Callout.Helper>

export const All = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Callout.Helper variant="info" title="Info Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="success" title="Success Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="warning" title="Warning Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="error" title="Error Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
    </div>
  ),
}

export const Default: Story = {
  args: {
    title: 'Success! Your changes have been saved',
    children: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const WithoutChildren: Story = {
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info',
  },
}

export const MultipleButtons: Story = {
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info',
    children: (
      <>
        This is the content description of the callout.
        <div className="flex gap-2">
          <CalloutButton>
            <SettingsIcon />
            Configure
          </CalloutButton>
          <CalloutButton>
            <RefreshIcon />
            Refresh
          </CalloutButton>
        </div>
      </>
    ),
  },
}
