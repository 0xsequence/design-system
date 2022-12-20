var O=Object.defineProperty;var g=(a,s)=>O(a,"name",{value:s,configurable:!0});import{B as m}from"./Box-51f65dd6.js";import{B as f}from"./Button-4551bff3.js";/* empty css                             *//* empty css                              */import"./Checkbox-57669e46.js";import{F as h,C as b,a as v,b as k,c as S,d as F,e as T}from"./ControlledTextInput-c6f1c5d1.js";import"./FileInput-da1342d5.js";import"./RadioGroup-8460e252.js";import"./Select-e629f7c1.js";import"./Switch-f9014e56.js";import{T as r}from"./Text-cce84919.js";import{j as e,a as x}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-36c6db2d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./Field-ac861416.js";import"./WarningIcon-4182fb24.js";import"./IconButton-f938168d.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./typography-f274f330.js";const ie={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { ControlledCheckbox as Checkbox } from '~/components/Checkbox'
import { ControlledFileInput as FileInput } from '~/components/FileInput'
import { ControlledRadioGroup as RadioGroup } from '~/components/RadioGroup'
import { ControlledSelect as Select } from '~/components/Select'
import { ControlledSwitch as Switch } from '~/components/Switch'
import { Text } from '~/components/Text'
import { ControlledTextInput as TextInput } from '~/components/TextInput'

import { Form } from './Form'

export default {
  title: 'Forms/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const selectOptions = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
]

const Template: Story = ({ onSubmit, ...args }) => (
  <Box
    background="backgroundSecondary"
    borderRadius="md"
    flexDirection="column"
    gap="4"
    padding="4"
  >
    <Form defaultValues={{ firstName: '' }} onSubmit={onSubmit} {...args}>
      {({ control, reset, formState: { errors }, setValue }) => (
        <Box
          background="backgroundPrimary"
          flexDirection="column"
          gap="5"
          padding="4"
          borderRadius="xs"
        >
          <TextInput
            control={control}
            label="First Name"
            labelLocation="top"
            name="firstName"
            placeholder="Enter first name"
            rules={{ required: 'First name is required' }}
          />
          {errors.firstName?.message && (
            <Text color="negative">{errors.firstName.message as string}</Text>
          )}

          <TextInput
            control={control}
            defaultValue=""
            label="Last Name"
            labelLocation="top"
            name="lastName"
            placeholder="Enter last name"
            rules={{ required: 'Last name is required' }}
          />
          {errors.lastName?.message && (
            <Text color="negative">{errors.lastName.message as string}</Text>
          )}

          <FileInput
            defaultValue=""
            control={control}
            label="File Input"
            labelLocation="top"
            name="fileInput"
            onValueChange={(file: File | null) => setValue('fileInput', file)}
            rules={{ required: 'A file is required' }}
            validExtensions={['images']}
          />
          {errors.fileInput?.message && (
            <Text color="negative">{errors.fileInput.message as string}</Text>
          )}

          <Select
            control={control}
            defaultValue={selectOptions[0].value}
            label="Select Option"
            labelLocation="top"
            name="selectOption"
            onValueChange={(value: string) => setValue('selectOption', value)}
            options={selectOptions}
            placeholder="Select an option"
            rules={{ required: 'A selection is required' }}
          />
          {errors.selectOption?.message && (
            <Text color="negative">
              {errors.selectOption.message as string}
            </Text>
          )}

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
            flexDirection="row"
            gap="4"
            onValueChange={(value: string) => setValue('radioOption', value)}
            options={selectOptions}
            name="radioOption"
          />

          <Box flexDirection="row-reverse" marginTop="2" gap="2">
            <Button type="submit" label="Submit" variant="primary" />
            <Button type="reset" label="Reset" onClick={() => reset()} />
          </Box>
        </Box>
      )}
    </Form>
  </Box>
)

export const Demo = Template.bind({})
Demo.args = {
  onSubmit: (data: {}) => console.log(data),
}
`,locationsMap:{demo:{startLoc:{col:24,line:26},endLoc:{col:1,line:137},startBody:{col:24,line:26},endBody:{col:1,line:137}}}}},title:"Forms/Form",component:h},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],I=g(({onSubmit:a,...s})=>e(m,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(h,{defaultValues:{firstName:""},onSubmit:a,...s,children:({control:t,reset:C,formState:{errors:o},setValue:l})=>{var p,c,u,d;return x(m,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(b,{control:t,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=o.firstName)==null?void 0:p.message)&&e(r,{color:"negative",children:o.firstName.message}),e(b,{control:t,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=o.lastName)==null?void 0:c.message)&&e(r,{color:"negative",children:o.lastName.message}),e(v,{defaultValue:"",control:t,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:n=>l("fileInput",n),rules:{required:"A file is required"},validExtensions:["images"]}),((u=o.fileInput)==null?void 0:u.message)&&e(r,{color:"negative",children:o.fileInput.message}),e(k,{control:t,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:n=>l("selectOption",n),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=o.selectOption)==null?void 0:d.message)&&e(r,{color:"negative",children:o.selectOption.message}),e(S,{control:t,name:"switchOption",onCheckedChange:n=>l("switchOption",n),defaultChecked:!1}),e(F,{control:t,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:n=>l("checkboxOption",n),defaultChecked:!1}),e(T,{control:t,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:n=>l("radioOption",n),options:i,name:"radioOption"}),x(m,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(f,{type:"submit",label:"Submit",variant:"primary"}),e(f,{type:"reset",label:"Reset",onClick:()=>C()})]})]})}})}),"Template"),B=I.bind({});B.args={onSubmit:a=>console.log(a)};const se=["Demo"];export{B as Demo,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=Form.stories-095c540c.js.map
