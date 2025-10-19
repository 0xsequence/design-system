import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'
import { ControlledCheckbox as Checkbox } from '../Checkbox/ControlledCheckbox.js'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '../Field/Field.js'
import { ControlledFileInput as FileInput } from '../FileInput/ControlledFileInput.js'
import { ControlledNumericInput as NumericInput } from '../NumericInput/ControlledNumericInput.js'
import { ControlledRadioGroup as RadioGroup } from '../RadioGroup/ControlledRadioGroup.js'
import { RadioGroupItem } from '../RadioGroup/RadioGroup.js'
import { ControlledSelect as Select } from '../Select/ControlledSelect.js'
import { ControlledSwitch as Switch } from '../Switch/ControlledSwitch.js'
import { ControlledTextArea as TextArea } from '../TextArea/ControlledTextArea.js'
import { ControlledTextInput as TextInput } from '../TextInput/ControlledTextInput.js'

import { Form } from './Form.js'

export default {
  title: 'Forms/Form',
  component: Form,
} as Meta<typeof Form>

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
            <Field>
              <FieldLabel>First Name</FieldLabel>
              <TextInput
                control={control}
                name="firstName"
                placeholder="Enter first name"
                rules={{
                  required: 'First name is required',
                }}
              />
              <FieldError errors={[errors.firstName]} />
            </Field>

            <Field>
              <FieldLabel>Last Name</FieldLabel>
              <TextInput
                control={control}
                defaultValue=""
                name="lastName"
                placeholder="Enter last name"
                rules={{
                  required: 'Last name is required',
                }}
              />
              <FieldError errors={[errors.lastName]} />
            </Field>

            <Field>
              <FieldLabel>Amount</FieldLabel>
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
              <FieldError errors={[errors.amount]} />
            </Field>

            <Field>
              <FieldLabel>File Input</FieldLabel>
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
              <FieldError errors={[errors.fileInput]} />
            </Field>

            <Field>
              <FieldLabel>Message</FieldLabel>
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
              <FieldDescription>This is the trail description</FieldDescription>
              <FieldError errors={[errors.selectOption]} />
            </Field>

            <Field>
              <FieldLabel>Select Option</FieldLabel>
              <Select
                control={control}
                name="selectOption"
                onValueChange={(value: string) =>
                  setValue('selectOption', value)
                }
                options={[
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
                ]}
                placeholder="Select an option"
                rules={{
                  required: 'A selection is required',
                }}
              />
              <FieldError errors={[errors.selectOption]} />
            </Field>

            <FieldSet>
              <FieldLegend>Notification Method</FieldLegend>
              <FieldDescription>
                How would you like to be notified?
              </FieldDescription>
              <RadioGroup
                control={control}
                name="notificationMethod"
                defaultValue="email"
                onValueChange={(value: string) =>
                  setValue('notificationMethod', value)
                }
              >
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
                  <RadioGroupItem
                    id="telegram"
                    value="telegram"
                    disabled={true}
                  />
                  <FieldLabel htmlFor="telegram">Telegram</FieldLabel>
                </Field>
              </RadioGroup>
            </FieldSet>

            <Field orientation="horizontal">
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
              <FieldLabel>Switch Option</FieldLabel>
              <FieldError errors={[errors.switchOption]} />
            </Field>

            <Field orientation="horizontal">
              <Checkbox
                control={control}
                id="checkboxOption"
                name="checkboxOption"
                onCheckedChange={(value: boolean) =>
                  setValue('checkboxOption', value)
                }
                defaultChecked={false}
                rules={{
                  required: 'You must accept the terms and conditions',
                }}
              />
              <FieldLabel htmlFor="checkboxOption">
                Accept terms and conditions
              </FieldLabel>
              <FieldError errors={[errors.checkboxOption]} />
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
