import { ComponentMeta, Story } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { TextInput } from '~/components/TextInput'

import { Form } from './Form'

export default {
  title: 'Components/Forms/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: Story = ({ onSubmit, ...args }) => (
  <Box background="backgroundSecondary" padding="4" borderRadius="md">
    <Form
      background="backgroundPrimary"
      flexDirection="column"
      gap="3"
      padding="4"
      borderRadius="xs"
      onSubmit={onSubmit}
      {...args}
    >
      <TextInput
        label="First Name"
        labelLocation="top"
        name="firstName"
        placeholder="Enter first name"
        rules={{ required: 'This field is required.' }}
      />
      <TextInput
        label="Last Name"
        labelLocation="top"
        name="lastName"
        placeholder="Enter last name"
      />

      <Box flexDirection="row-reverse" marginTop="2">
        <Button type="submit" label="Submit" />
      </Box>
    </Form>
  </Box>
)

export const Demo = Template.bind({})
Demo.args = {
  onSubmit: (data: {}) => console.log(data),
}
