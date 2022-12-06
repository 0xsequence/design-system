var C=Object.defineProperty;var d=(a,i)=>C(a,"name",{value:i,configurable:!0});import{B as s}from"./Box.4a8275e8.js";import{B as b}from"./Button.793dd394.js";/* empty css                             *//* empty css                              */import"./Checkbox.79f1830e.js";import{F as h,C as g,a as O,b as k,c as v,d as S}from"./ControlledTextInput.f55d0475.js";import"./RadioGroup.d4374ad6.js";import"./Select.3b4caa93.js";import"./Switch.f5d31425.js";import{T as m}from"./Text.ea662e0e.js";import"./TextInput.78440591.js";import{j as e,a as f}from"./jsx-runtime.62fd101c.js";import"./atoms.css.ccb5b5eb.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.936446b4.js";import"./index.2389c771.js";import"./iframe.e31f7670.js";import"./index.module.238c53da.js";import"./index.module.136ce80c.js";import"./index.module.12c66d1d.js";import"./LabelledField.2ef8474e.js";import"./WarningIcon.89e10e0f.js";import"./index.module.66d260e6.js";import"./index.module.f53a6ee7.js";import"./index.module.d8f3bbc5.js";import"./index.module.e82c7ea0.js";import"./Combination.f89c714d.js";import"./tslib.es6.03b483f6.js";import"./index.module.c83b43b2.js";const ne={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { ControlledCheckbox as Checkbox } from '~/components/Checkbox'
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
`,locationsMap:{demo:{startLoc:{col:24,line:25},endLoc:{col:1,line:122},startBody:{col:24,line:25},endBody:{col:1,line:122}}}}},title:"Forms/Form",component:h},l=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],T=d(({onSubmit:a,...i})=>e(s,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(h,{defaultValues:{firstName:""},onSubmit:a,...i,children:({control:n,reset:x,formState:{errors:t},setValue:r})=>{var p,c,u;return f(s,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(g,{control:n,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e(m,{color:"negative",children:t.firstName.message}),e(g,{control:n,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e(m,{color:"negative",children:t.lastName.message}),e(O,{control:n,defaultValue:l[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>r("selectOption",o),options:l,placeholder:"Select an option",rules:{required:"A selection is required"}}),((u=t.selectOption)==null?void 0:u.message)&&e(m,{color:"negative",children:t.selectOption.message}),e(k,{control:n,name:"switchOption",onCheckedChange:o=>r("switchOption",o),defaultChecked:!1}),e(v,{control:n,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>r("checkboxOption",o),defaultChecked:!1}),e(S,{control:n,defaultValue:l[0].value,flexDirection:"row",gap:"4",onValueChange:o=>r("radioOption",o),options:l,name:"radioOption"}),f(s,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>x()})]})]})}})}),"Template"),B=T.bind({});B.args={onSubmit:a=>console.log(a)};const te=["Demo"];export{B as Demo,te as __namedExportsOrder,ne as default};
//# sourceMappingURL=Form.stories.1652ef82.js.map
