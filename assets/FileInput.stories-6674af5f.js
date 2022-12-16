var p=Object.defineProperty;var n=(o,i)=>p(o,"name",{value:i,configurable:!0});import{B as l}from"./Box-be3174e1.js";import{F as t}from"./FileInput-12f3d9fb.js";import{j as e}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-b51cbbce.js";import"./LabelledField-9041a5a7.js";import"./Text-e9f661d3.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{demo:{startLoc:{col:51,line:12},endLoc:{col:1,line:16},startBody:{col:51,line:12},endBody:{col:1,line:16}}}}},title:"Forms/FileInput",component:t},m=n(o=>e(l,{padding:"2",children:e(t,{...o})}),"Template"),r=m.bind({});r.args={name:"myFileInput",label:"File input",labelLocation:"top",validExtensions:["images"],onValueChange:o=>console.log(o)};const C=["Demo"];export{r as Demo,C as __namedExportsOrder,b as default};
//# sourceMappingURL=FileInput.stories-6674af5f.js.map
