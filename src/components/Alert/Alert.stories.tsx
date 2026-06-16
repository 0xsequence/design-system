import type { Meta, StoryObj } from '@storybook/react-vite'
import { RefreshCwIcon, SettingsIcon } from 'lucide-react'

import {
  Alert,
  AlertButton,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from './Alert.js'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>

export const All = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info">
        <AlertIcon variant="info" />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.{' '}
          <a href="https://www.google.com">Read more</a>
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="success">
        <AlertIcon variant="success" />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.{' '}
          <a href="https://www.google.com">Read more</a>
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="warning">
        <AlertIcon variant="warning" />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.{' '}
          <a href="https://www.google.com">Read more</a>
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="error">
        <AlertIcon variant="error" />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.{' '}
          <a href="https://www.google.com">Read more</a> and more text.
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
    </div>
  ),
}

export const Default: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const WithoutButton: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const WithoutIcon: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const WithoutDescription: StoryObj<{
  title: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>
  ),
  args: {
    title:
      'Success! Your changes have been saved. This is a long title that should wrap.',
    variant: 'info',
  },
}

export const WithoutTitle: StoryObj<{
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>
  ),
  args: {
    description:
      'This is an alert with description only, no title, icon, or button.',
    variant: 'info',
  },
}

export const BottomButtons: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <div className="col-start-2 flex gap-2">
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
        <AlertButton>
          <RefreshCwIcon />
          Reset
        </AlertButton>
      </div>
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const ContainerResponsive: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <div className="flex gap-6">
      <div className="w-64 shrink-0">
        <p className="text-muted mb-2 text-xs">Narrow container (256px)</p>
        <Alert variant={args.variant}>
          <AlertIcon variant={args.variant} />
          <AlertTitle>{args.title}</AlertTitle>
          <AlertDescription>{args.description}</AlertDescription>
          <AlertButton>
            <SettingsIcon />
            Configure
          </AlertButton>
        </Alert>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-muted mb-2 text-xs">Wide container</p>
        <Alert variant={args.variant}>
          <AlertIcon variant={args.variant} />
          <AlertTitle>{args.title}</AlertTitle>
          <AlertDescription>{args.description}</AlertDescription>
          <AlertButton>
            <SettingsIcon />
            Configure
          </AlertButton>
        </Alert>
      </div>
    </div>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const SizeVariants: StoryObj<{
  title: string
  description: string
  variant: 'info' | 'success' | 'warning' | 'error'
}> = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Alert variant={args.variant} size="sm">
        <AlertIcon variant={args.variant} />
        <AlertTitle>{args.title}</AlertTitle>
        <AlertDescription>{args.description}</AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant={args.variant} size="lg">
        <AlertIcon variant={args.variant} />
        <AlertTitle>{args.title}</AlertTitle>
        <AlertDescription>{args.description}</AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
    </div>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}

export const Helper: StoryObj<typeof Alert.Helper> = {
  render: args => (
    <Alert.Helper
      variant={args.variant}
      title={args.title}
      description={args.description}
    >
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert.Helper>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}
