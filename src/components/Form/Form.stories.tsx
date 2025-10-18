import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'
import { ControlledCheckbox as Checkbox } from '../Checkbox/ControlledCheckbox.js'
import { Field } from '../Field/Field.js'
import { ControlledFileInput as FileInput } from '../FileInput/ControlledFileInput.js'
import { ControlledNumericInput as NumericInput } from '../NumericInput/ControlledNumericInput.js'
import { ControlledRadioGroup as RadioGroup } from '../RadioGroup/ControlledRadioGroup.js'
import { ControlledSelect as Select } from '../Select/ControlledSelect.js'
import { ControlledSwitch as Switch } from '../Switch/ControlledSwitch.js'
import { ControlledTextArea as TextArea } from '../TextArea/ControlledTextArea.js'
import { ControlledTextInput as TextInput } from '../TextInput/ControlledTextInput.js'

import { Form } from './Form.js'

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
    <Card>
      <Form
        defaultValues={{
          firstName: '',
        }}
        onSubmit={onSubmit}
        {...args}
      >
        {({ control, reset, formState: { errors }, setValue }) => (
          <div className="flex flex-col gap-4">
            <Field
              label="First Name"
              error={
                errors.firstName?.message
                  ? (errors.firstName.message as string)
                  : undefined
              }
            >
              <TextInput
                control={control}
                name="firstName"
                placeholder="Enter first name"
                rules={{
                  required: 'First name is required',
                }}
              />
            </Field>

            <Field
              label="Last Name"
              error={
                errors.lastName?.message
                  ? (errors.lastName.message as string)
                  : undefined
              }
            >
              <TextInput
                control={control}
                defaultValue=""
                name="lastName"
                placeholder="Enter last name"
                rules={{
                  required: 'Last name is required',
                }}
              />
            </Field>

            <Field
              label="Amount"
              error={
                errors.amount?.message
                  ? (errors.amount.message as string)
                  : undefined
              }
            >
              <NumericInput
                control={control}
                name="amount"
                placeholder="0"
                decimals={2}
                rules={{
                  required: 'Amount is required',
                  min: {
                    value: 0,
                    message: 'Amount must be greater than 0',
                  },
                  max: {
                    value: 1000000,
                    message: 'Amount must be less than 1,000,000',
                  },
                }}
              />
            </Field>

            <Field
              label="File Input"
              error={
                errors.fileInput?.message
                  ? (errors.fileInput.message as string)
                  : undefined
              }
            >
              <FileInput
                defaultValue=""
                control={control}
                name="fileInput"
                onValueChange={(file: File | null) =>
                  setValue('fileInput', file)
                }
                rules={{
                  required: 'A file is required',
                }}
                validExtensions={['images']}
              />
            </Field>

            <Field
              label="Message"
              trailDescription="This is the trail description"
            >
              <TextArea
                defaultValue=""
                name="message"
                placeholder="Enter a message"
                control={control}
                rules={{
                  required: 'A message is required',
                  maxLength: {
                    value: 100,
                    message: 'Message must be less than 100 characters',
                  },
                }}
              />
            </Field>

            <Field
              label="Select Option"
              error={
                errors.selectOption?.message
                  ? (errors.selectOption.message as string)
                  : undefined
              }
            >
              <Select
                control={control}
                name="selectOption"
                onValueChange={(value: string) =>
                  setValue('selectOption', value)
                }
                options={selectOptions}
                placeholder="Select an option"
                rules={{
                  required: 'A selection is required',
                }}
              />
            </Field>

            <RadioGroup
              control={control}
              defaultValue={selectOptions[0].value}
              onValueChange={(value: string) => setValue('radioOption', value)}
              options={selectOptions}
              name="radioOption"
              className="flex-row gap-4"
            />

            <Field
              label="Switch Option"
              labelLocation="right"
              error={
                errors.switchOption?.message
                  ? (errors.switchOption.message as string)
                  : undefined
              }
            >
              <Switch
                control={control}
                size="sm"
                name="switchOption"
                onCheckedChange={(value: boolean) =>
                  setValue('switchOption', value)
                }
                defaultChecked={false}
                rules={{
                  required: 'You must accept the terms and conditions',
                }}
              />
            </Field>

            <Field
              label="Accept terms and conditions"
              labelLocation="right"
              error={
                errors.checkboxOption?.message
                  ? (errors.checkboxOption.message as string)
                  : undefined
              }
            >
              <Checkbox
                control={control}
                name="checkboxOption"
                onCheckedChange={(value: boolean) =>
                  setValue('checkboxOption', value)
                }
                defaultChecked={false}
                rules={{
                  required: 'You must accept the terms and conditions',
                }}
              />
            </Field>

            <div className="flex flex-row-reverse gap-2">
              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button type="reset" onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </div>
        )}
      </Form>
    </Card>
  ),
  args: {
    onSubmit: (data: {}) => console.log(data),
  },
}
