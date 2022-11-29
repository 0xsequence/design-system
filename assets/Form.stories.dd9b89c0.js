var s=Object.defineProperty;var e=(n,t)=>s(n,"name",{value:t,configurable:!0});import{B as r}from"./Box.6a5c6877.js";import{B as l}from"./Button.e4629b20.js";/* empty css                             *//* empty css                              */import{T as a}from"./TextInput.f83c54a3.js";import{F as m}from"./Form.d9970a3d.js";import{j as o,a as p}from"./jsx-runtime.2f5c74dd.js";import"./atoms.css.b06098ab.js";import"./Text.1e7ab3e4.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./LabelledField.47c71749.js";import"./iframe.3896c9c1.js";const L={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { TextInput } from '~/components/TextInput'

import { Form } from './Form'

export default {
  title: 'Components/Forms/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: Story = ({ ...args }) => {
  const onSubmit = (data: {}) => console.log(data)

  return (
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
}

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:24,line:14},endLoc:{col:1,line:48},startBody:{col:24,line:14},endBody:{col:1,line:48}}}}},title:"Components/Forms/Form",component:m},c=e(({...n})=>o(r,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:p(m,{background:"backgroundPrimary",flexDirection:"column",gap:"3",padding:"4",borderRadius:"xs",onSubmit:e(i=>console.log(i),"onSubmit"),...n,children:[o(a,{label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",registerWith:{required:"required"}}),o(a,{label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name"}),o(r,{flexDirection:"row-reverse",marginTop:"2",children:o(l,{type:"submit",label:"Submit"})})]})}),"Template"),N=c.bind({}),D=["Demo"];export{N as Demo,D as __namedExportsOrder,L as default};
//# sourceMappingURL=Form.stories.dd9b89c0.js.map
