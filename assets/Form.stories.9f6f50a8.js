var s=Object.defineProperty;var e=(n,t)=>s(n,"name",{value:t,configurable:!0});import{B as r}from"./Box.329586f8.js";import{B as l}from"./Button.b7589b93.js";/* empty css                             *//* empty css                              */import{T as a}from"./TextInput.d1153e02.js";import{F as m}from"./Form.f3ec1150.js";import{j as o,a as p}from"./jsx-runtime.e9e872a3.js";import"./atoms.css.b06098ab.js";import"./Text.b7f24ee0.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./LabelledField.b7253ef9.js";import"./iframe.5afd4e53.js";const L={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
//# sourceMappingURL=Form.stories.9f6f50a8.js.map
