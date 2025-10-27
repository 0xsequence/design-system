import type { Meta } from '@storybook/react-vite'

import {
  CheckmarkIcon,
  CloseIcon,
  InfoIcon,
  NetworkIcon,
  WarningIcon,
} from '../../icons/index.js'

import { Alert, AlertDescription, AlertTitle } from './Alert.js'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>

export const All = {
  render: (args: {
    title: string
    description: string
    variant: 'default' | 'destructive'
  }) => (
    <div className="flex flex-col gap-4">
      <Alert variant="default">
        <NetworkIcon />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is an alert with, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckmarkIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="error">
        <CloseIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
  ),
}

export const Default = {
  render: (args: {
    title: string
    description: string
    variant: 'default' | 'destructive'
  }) => (
    <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>
  ),
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'default',
  },
}
