var p=Object.defineProperty;var n=(o,i)=>p(o,"name",{value:i,configurable:!0});import{B as l}from"./Box-189343a4.js";import{F as e}from"./FileInput-239b02c8.js";import{j as t}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-82e5de3b.js";import"./Field-87e3c99c.js";import"./Text-58c8d0a0.js";import"./typography-f274f330.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./IconButton-e0a70fee.js";import"./Button-a91a0758.js";import"./WarningIcon-66e22c0e.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{demo:{startLoc:{col:51,line:12},endLoc:{col:1,line:16},startBody:{col:51,line:12},endBody:{col:1,line:16}}}}},title:"Forms/FileInput",component:e},m=n(o=>t(l,{padding:"2",children:t(e,{...o})}),"Template"),r=m.bind({});r.args={name:"myFileInput",label:"File input",labelLocation:"top",validExtensions:["images"],onValueChange:o=>console.log(o)};const E=["Demo"];export{r as Demo,E as __namedExportsOrder,h as default};
//# sourceMappingURL=FileInput.stories-78985a24.js.map
