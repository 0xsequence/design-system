var d=Object.defineProperty;var l=(o,r)=>d(o,"name",{value:r,configurable:!0});import{T as e}from"./Text-0c94a256.js";import{a,F as i,j as t}from"./jsx-runtime-6057fa59.js";import"./Box-28ceaece.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-ded810a3.js";import"./typography-f274f330.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";const A={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => {
  return <Text color="text100" {...args} />
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'xlarge',
  children: 'Hello, world!',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'large',
  children: 'Hello, world!',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: 'medium',
  children: 'Hello, world!',
}

export const Bold = Template.bind({})
Bold.args = {
  variant: 'normal',
  fontWeight: 'bold',
  children: 'Hello, world!',
}

export const BodyLarge = Template.bind({})
BodyLarge.args = {
  variant: 'large',
  as: 'p',
  children: 'Hello, world!',
}

export const Body = Template.bind({})
Body.args = {
  variant: 'normal',
  children: 'Hello, world!',
}

export const TextAsChild = Template.bind({})
TextAsChild.args = {
  variant: 'normal',
  as: 'p',
  children: (
    <>
      <Text fontWeight="bold" color="positive">
        Hello
      </Text>
      {' World!'}
    </>
  ),
}

export const Code = Template.bind({})
Code.args = {
  variant: 'code',
  children: 'Hello, world!',
}
`,locationsMap:{"heading-1":{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},"heading-2":{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},"heading-3":{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},bold:{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},"body-large":{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},body:{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},"text-as-child":{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}},code:{startLoc:{col:46,line:10},endLoc:{col:1,line:12},startBody:{col:46,line:10},endBody:{col:1,line:12}}}}},title:"Components/Text",component:e},n=l(o=>t(e,{color:"text100",...o}),"Template"),c=n.bind({});c.args={variant:"xlarge",children:"Hello, world!"};const s=n.bind({});s.args={variant:"large",children:"Hello, world!"};const p=n.bind({});p.args={variant:"medium",children:"Hello, world!"};const g=n.bind({});g.args={variant:"normal",fontWeight:"bold",children:"Hello, world!"};const m=n.bind({});m.args={variant:"large",as:"p",children:"Hello, world!"};const x=n.bind({});x.args={variant:"normal",children:"Hello, world!"};const y=n.bind({});y.args={variant:"normal",as:"p",children:a(i,{children:[t(e,{fontWeight:"bold",color:"positive",children:"Hello"})," World!"]})};const h=n.bind({});h.args={variant:"code",children:"Hello, world!"};const j=["Heading1","Heading2","Heading3","Bold","BodyLarge","Body","TextAsChild","Code"];export{x as Body,m as BodyLarge,g as Bold,h as Code,c as Heading1,s as Heading2,p as Heading3,y as TextAsChild,j as __namedExportsOrder,A as default};
//# sourceMappingURL=Text.stories-1e4fb568.js.map
