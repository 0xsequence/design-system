import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '../Field/Field.js'

import { RadioGroup, RadioGroupItem } from './RadioGroup.js'

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: args => (
    <FieldSet>
      <FieldLegend>Notification Method</FieldLegend>
      <FieldDescription>How would you like to be notified?</FieldDescription>
      <RadioGroup name="notification-method" {...args}>
        <Field orientation="horizontal">
          <RadioGroupItem id="email" value="email" />
          <FieldLabel htmlFor="email">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="sms" value="sms" />
          <FieldLabel htmlFor="sms">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="phone" value="phone" />
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled={true}>
          <RadioGroupItem id="telegram" value="telegram" disabled={true} />
          <FieldLabel htmlFor="telegram">Telegram</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
  args: {
    defaultValue: 'email',
  },
}
