var s=Object.defineProperty;var e=(n,t)=>s(n,"name",{value:t,configurable:!0});import{B as r}from"./Box.0b2642ad.js";import{B as l}from"./Button.74b250d8.js";/* empty css                             *//* empty css                              */import{T as a}from"./TextInput.7e9a3d7b.js";import{F as m}from"./Form.2e2dcf9a.js";import{j as o,a as p}from"./jsx-runtime.57d6ac11.js";import"./atoms.css.bb66546d.js";import"./Text.3c091172.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.78e6c76e.js";const k={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'

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
//# sourceMappingURL=Form.stories.fc317d12.js.map
