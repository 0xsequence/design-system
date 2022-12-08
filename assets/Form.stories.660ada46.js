var C=Object.defineProperty;var d=(a,i)=>C(a,"name",{value:i,configurable:!0});import{B as s}from"./Box.a7ff084d.js";import{B as b}from"./Button.b3192f07.js";/* empty css                             *//* empty css                              */import"./Checkbox.354440c7.js";import{F as h,C as g,a as O,b as k,c as v,d as S}from"./ControlledTextInput.4e1bae6d.js";import"./RadioGroup.77defbae.js";import"./Select.3d0bc6f7.js";import"./Switch.3cce071c.js";import{T as m}from"./Text.cca25e33.js";import{j as e,a as f}from"./jsx-runtime.7950ebae.js";import"./atoms.css.66ddf8d3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.dd447f0b.js";import"./index.bed1c532.js";import"./iframe.fe1cae89.js";import"./index.module.f28997d0.js";import"./index.module.a99c1f42.js";import"./index.module.740df0e4.js";import"./LabelledField.dec2757b.js";import"./WarningIcon.3d1748df.js";import"./index.module.e82789af.js";import"./index.module.9a9904a7.js";import"./index.module.458578b2.js";import"./index.module.8a7e40bd.js";import"./Combination.b8c41d17.js";import"./tslib.es6.03b483f6.js";import"./index.module.d783760e.js";const oe={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
//# sourceMappingURL=Form.stories.660ada46.js.map
