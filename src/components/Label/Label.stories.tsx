import type { Meta } from '@storybook/react-vite'

import { Checkbox } from '../Checkbox/Checkbox.js'

import { Label } from './Label.js'

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>

export const Default = {
  render: () => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    )
  },
}
