import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumbs } from './Breadcrumbs.js'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    excludeDivider: false,
    paths: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Components',
        url: '/components',
      },
      {
        label: 'Breadcrumbs',
      },
    ],
  },
}
