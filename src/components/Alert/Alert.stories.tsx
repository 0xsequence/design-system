import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  CheckmarkIcon,
  CloseIcon,
  InfoIcon,
  WarningIcon,
} from '../../icons/index.js'

import { Alert, AlertButton, AlertDescription, AlertTitle } from './Alert.js'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>

export const All = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="success">
        <CheckmarkIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="error">
        <CloseIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
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
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>Configure</AlertButton>
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
      <CheckmarkIcon />
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
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info',
  },
}
