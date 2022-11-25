var s=Object.defineProperty;var e=(n,t)=>s(n,"name",{value:t,configurable:!0});import{B as r}from"./Box.4be97a27.js";import{B as l}from"./Button.610fad11.js";/* empty css                             *//* empty css                              */import{T as a}from"./TextInput.66a3bec4.js";import{F as m}from"./Form.1ca3e4d0.js";import{j as o,a as p}from"./jsx-runtime.45652db6.js";import"./atoms.css.bb66546d.js";import"./Text.7b863767.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c4c6278d.js";const k={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
        borderRadius="sm"
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
`,locationsMap:{demo:{startLoc:{col:24,line:14},endLoc:{col:1,line:48},startBody:{col:24,line:14},endBody:{col:1,line:48}}}}},title:"Components/Forms/Form",component:m},c=e(({...n})=>o(r,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:p(m,{background:"backgroundPrimary",flexDirection:"column",gap:"3",padding:"4",borderRadius:"sm",onSubmit:e(i=>console.log(i),"onSubmit"),...n,children:[o(a,{label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",registerWith:{required:"required"}}),o(a,{label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name"}),o(r,{flexDirection:"row-reverse",marginTop:"2",children:o(l,{type:"submit",label:"Submit"})})]})}),"Template"),L=c.bind({}),N=["Demo"];export{L as Demo,N as __namedExportsOrder,k as default};
//# sourceMappingURL=Form.stories.f56582d9.js.map
