import { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/components/Button'
import { ControlledCheckbox as Checkbox } from '~/components/Checkbox'
import { ControlledFileInput as FileInput } from '~/components/FileInput'
import { ControlledRadioGroup as RadioGroup } from '~/components/RadioGroup'
import { ControlledSelect as Select } from '~/components/Select'
import { ControlledSwitch as Switch } from '~/components/Switch'
import { ControlledTextInput as TextInput } from '~/components/TextInput'

import { TextArea } from '../TextArea'

import { Form } from './Form'

export default {
  title: 'Forms/Form',
  component: Form,
} as Meta<typeof Form>

const selectOptions = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
  {
    label: 'Option 3',
    value: 'option-3',
  },
]

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: ({ onSubmit, ...args }) => (
    <div className="bg-background-secondary rounded-xl flex flex-col gap-3 p-4">
      <Form
        defaultValues={{
          firstName: '',
        }}
        onSubmit={onSubmit}
        {...args}
      >
        {({ control, reset, formState: { errors }, setValue }) => (
          <div className="flex flex-col gap-4">
            <TextInput
              control={control}
              label="First Name"
              labelLocation="top"
              name="firstName"
              placeholder="Enter first name"
              rules={{
                required: 'First name is required',
              }}
              error={
                errors.firstName?.message
                  ? (errors.firstName.message as string)
                  : undefined
              }
            />

            <TextInput
              control={control}
              defaultValue=""
              label="Last Name"
              labelLocation="top"
              name="lastName"
              placeholder="Enter last name"
              rules={{
                required: 'Last name is required',
              }}
              error={
                errors.lastName?.message
                  ? (errors.lastName.message as string)
                  : undefined
              }
            />

            <FileInput
              defaultValue=""
              control={control}
              label="File Input"
              labelLocation="top"
              name="fileInput"
              onValueChange={(file: File | null) => setValue('fileInput', file)}
              rules={{
                required: 'A file is required',
              }}
              validExtensions={['images']}
              error={
                errors.fileInput?.message
                  ? (errors.fileInput.message as string)
                  : undefined
              }
            />

            <TextArea
              defaultValue=""
              label="Message"
              labelLocation="top"
              name="message"
              placeholder="Enter a message"
              trailDescription="This is the trail description"
            />

            <Select
              control={control}
              label="Select Option"
              labelLocation="top"
              name="selectOption"
              onValueChange={(value: string) => setValue('selectOption', value)}
              options={selectOptions}
              placeholder="Select an option"
              rules={{
                required: 'A selection is required',
              }}
              error={
                errors.selectOption?.message
                  ? (errors.selectOption.message as string)
                  : undefined
              }
            />

            <Switch
              control={control}
              name="switchOption"
              onCheckedChange={(value: boolean) =>
                setValue('switchOption', value)
              }
              defaultChecked={false}
            />

            <Checkbox
              control={control}
              label="Checkbox Option"
              labelLocation="right"
              name="checkboxOption"
              onCheckedChange={(value: boolean) =>
                setValue('checkboxOption', value)
              }
              defaultChecked={false}
            />

            <RadioGroup
              control={control}
              defaultValue={selectOptions[0].value}
              onValueChange={(value: string) => setValue('radioOption', value)}
              options={selectOptions}
              name="radioOption"
              className="flex-row gap-4"
            />

            <div className="flex flex-row-reverse gap-2">
              <Button type="submit" label="Submit" variant="primary" />
              <Button type="reset" label="Reset" onClick={() => reset()} />
            </div>
          </div>
        )}
      </Form>
    </div>
  ),
  args: {
    onSubmit: (data: {}) => console.log(data),
  },
}
