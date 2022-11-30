var C=Object.defineProperty;var p=(n,l)=>C(n,"name",{value:l,configurable:!0});import{B as c}from"./Box.f9cdeb38.js";import{B as g}from"./Button.7796fd46.js";/* empty css                             *//* empty css                              */import{S as O}from"./Select.770d54b0.js";import{C as y,F as h,a as b,b as v}from"./ControlledTextInput.6ed9c5e2.js";import{j as e,a as S}from"./jsx-runtime.28cad7fd.js";import"./Switch.3ec0e37e.js";import{T as d}from"./Text.02da61b4.js";import"./TextInput.64811e4e.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.a0874b05.js";import"./index.a3fc1b9c.js";import"./iframe.81503504.js";import"./index.module.d16e3af0.js";import"./index.module.62986b43.js";import"./index.37ca15f1.js";import"./tslib.es6.03b483f6.js";import"./index.module.4028744a.js";import"./index.module.8904e771.js";import"./index.module.cdb74eff.js";import"./LabelledField.0844313a.js";import"./WarningIcon.6877fe9b.js";import"./index.module.7a2511d7.js";const i=p(({defaultValue:n,name:l,control:o,onValueChange:s,rules:t,...r})=>e(y,{defaultValue:n,name:l,control:o,rules:t,render:({field:a})=>e(O,{onValueChange:s,defaultValue:n,...a,...r})}),"ControlledSelect");try{i.displayName="ControlledSelect",i.__docgenInfo={description:"",displayName:"ControlledSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},processing:{defaultValue:null,description:"",name:"processing",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},control:{defaultValue:null,description:"",name:"control",required:!0,type:{name:"Control<FieldValues, any>"}},rules:{defaultValue:null,description:"",name:"rules",required:!1,type:{name:"{}"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/ControlledSelect.tsx#ControlledSelect"]={docgenInfo:i.__docgenInfo,name:"ControlledSelect",path:"src/components/Select/ControlledSelect.tsx#ControlledSelect"})}catch{}const Z={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
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
  <Box background="backgroundSecondary" padding="4" borderRadius="md">
    <Form defaultValues={{ firstName: '' }} onSubmit={onSubmit} {...args}>
      {({ control, reset, formState: { errors }, setValue }) => (
        <Box
          background="backgroundPrimary"
          flexDirection="column"
          gap="3"
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
`,locationsMap:{demo:{startLoc:{col:24,line:23},endLoc:{col:1,line:93},startBody:{col:24,line:23},endBody:{col:1,line:93}}}}},title:"Forms/Form",component:h},x=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],T=p(({onSubmit:n,...l})=>e(c,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e(h,{defaultValues:{firstName:""},onSubmit:n,...l,children:({control:o,reset:s,formState:{errors:t},setValue:r})=>{var a,u,f;return S(c,{background:"backgroundPrimary",flexDirection:"column",gap:"3",padding:"4",borderRadius:"xs",children:[e(b,{control:o,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((a=t.firstName)==null?void 0:a.message)&&e(d,{color:"negative",children:t.firstName.message}),e(b,{control:o,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((u=t.lastName)==null?void 0:u.message)&&e(d,{color:"negative",children:t.lastName.message}),e(i,{control:o,defaultValue:x[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:m=>r("selectOption",m),options:x,placeholder:"Select an option",rules:{required:"A selection is required"}}),((f=t.selectOption)==null?void 0:f.message)&&e(d,{color:"negative",children:t.selectOption.message}),e(v,{control:o,name:"switchOption",onCheckedChange:m=>r("switchOption",m),defaultChecked:!1}),S(c,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(g,{type:"submit",label:"Submit",variant:"primary"}),e(g,{type:"reset",label:"Reset",onClick:()=>s()})]})]})}})}),"Template"),q=T.bind({});q.args={onSubmit:n=>console.log(n)};const $=["Demo"];export{q as Demo,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Form.stories.eb7b8dae.js.map
