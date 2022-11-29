var i=Object.defineProperty;var r=(o,e)=>i(o,"name",{value:e,configurable:!0});import{B as t}from"./Box.945bb87a.js";import{B as s}from"./Button.0eea3872.js";/* empty css                             *//* empty css                              */import{T as a}from"./TextInput.6578c7c1.js";import{F as m}from"./Form.3a2ced92.js";import{j as n,a as l}from"./jsx-runtime.2a340469.js";import"./atoms.css.b06098ab.js";import"./Text.3747fb73.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./LabelledField.7f7c998b.js";import"./iframe.f222926b.js";const D={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
        registerWith={{ required: 'required' }}
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
`,locationsMap:{demo:{startLoc:{col:24,line:14},endLoc:{col:1,line:44},startBody:{col:24,line:14},endBody:{col:1,line:44}}}}},title:"Components/Forms/Form",component:m},p=r(({onSubmit:o,...e})=>n(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:l(m,{background:"backgroundPrimary",flexDirection:"column",gap:"3",padding:"4",borderRadius:"xs",onSubmit:o,...e,children:[n(a,{label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",registerWith:{required:"required"}}),n(a,{label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name"}),n(t,{flexDirection:"row-reverse",marginTop:"2",children:n(s,{type:"submit",label:"Submit"})})]})}),"Template"),d=p.bind({});d.args={onSubmit:o=>console.log(o)};const L=["Demo"];export{d as Demo,L as __namedExportsOrder,D as default};
//# sourceMappingURL=Form.stories.71da61a2.js.map
