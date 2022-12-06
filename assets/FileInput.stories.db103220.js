var l=Object.defineProperty;var n=(o,i)=>l(o,"name",{value:i,configurable:!0});import{B as p}from"./Box.e0c5aa09.js";import{F as t}from"./FileInput.216344d3.js";import{j as e}from"./jsx-runtime.a97c4eab.js";/* empty css                             */import"./atoms.css.ccb5b5eb.js";import"./LabelledField.4da7b028.js";import"./Text.99ae096d.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.f68b59c8.js";const B={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'

import { FileInput } from './FileInput'

export default {
  title: 'Forms/FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>

const Template: ComponentStory<typeof FileInput> = args => (
  <Box padding="2">
    <FileInput {...args} />
  </Box>
)

export const Demo = Template.bind({})
Demo.args = {
  name: 'myFileInput',
  label: 'File input',
  labelLocation: 'top',
  validExtensions: ['images'],
  onValueChange: file => console.log(file),
}
`,locationsMap:{demo:{startLoc:{col:51,line:12},endLoc:{col:1,line:16},startBody:{col:51,line:12},endBody:{col:1,line:16}}}}},title:"Forms/FileInput",component:t},m=n(o=>e(p,{padding:"2",children:e(t,{...o})}),"Template"),r=m.bind({});r.args={name:"myFileInput",label:"File input",labelLocation:"top",validExtensions:["images"],onValueChange:o=>console.log(o)};const b=["Demo"];export{r as Demo,b as __namedExportsOrder,B as default};
//# sourceMappingURL=FileInput.stories.db103220.js.map
