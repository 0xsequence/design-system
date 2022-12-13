var C=Object.defineProperty;var d=(a,i)=>C(a,"name",{value:i,configurable:!0});import{B as s}from"./Box.78f458c4.js";import{B as b}from"./Button.a765000c.js";/* empty css                             *//* empty css                              */import"./Checkbox.9b075fa3.js";import{F as h,C as g,a as O,b as k,c as v,d as S}from"./ControlledTextInput.6889364d.js";import"./RadioGroup.c0c996a5.js";import"./Select.779226c1.js";import"./Switch.8429f9b3.js";import{T as m}from"./Text.88c39bc6.js";import{j as e,a as f}from"./jsx-runtime.856db583.js";import"./atoms.css.b9e53546.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c916579e.js";import"./index.c612c528.js";import"./iframe.3827cd0b.js";import"./index.module.72339c64.js";import"./index.module.631ad1f7.js";import"./index.module.4b66b907.js";import"./LabelledField.505df6a8.js";import"./WarningIcon.31d1f671.js";import"./index.module.2f9c429a.js";import"./index.module.0339cfce.js";import"./index.module.e16e41be.js";import"./index.module.e7aac110.js";import"./Combination.5bd5d18f.js";import"./tslib.es6.03b483f6.js";import"./index.module.7e90fca1.js";const oe={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
`,locationsMap:{demo:{startLoc:{col:24,line:25},endLoc:{col:1,line:122},startBody:{col:24,line:25},endBody:{col:1,line:122}}}}},title:"Forms/Form",component:h},l=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],T=d(({onSubmit:a,...i})=>e(s,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(h,{defaultValues:{firstName:""},onSubmit:a,...i,children:({control:n,reset:x,formState:{errors:t},setValue:r})=>{var p,c,u;return f(s,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(g,{control:n,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e(m,{color:"negative",children:t.firstName.message}),e(g,{control:n,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e(m,{color:"negative",children:t.lastName.message}),e(O,{control:n,defaultValue:l[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>r("selectOption",o),options:l,placeholder:"Select an option",rules:{required:"A selection is required"}}),((u=t.selectOption)==null?void 0:u.message)&&e(m,{color:"negative",children:t.selectOption.message}),e(k,{control:n,name:"switchOption",onCheckedChange:o=>r("switchOption",o),defaultChecked:!1}),e(v,{control:n,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>r("checkboxOption",o),defaultChecked:!1}),e(S,{control:n,defaultValue:l[0].value,flexDirection:"row",gap:"4",onValueChange:o=>r("radioOption",o),options:l,name:"radioOption"}),f(s,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>x()})]})]})}})}),"Template"),B=T.bind({});B.args={onSubmit:a=>console.log(a)};const ne=["Demo"];export{B as Demo,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=Form.stories.d9519672.js.map
