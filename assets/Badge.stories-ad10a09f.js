var c=Object.defineProperty;var e=(n,a)=>c(n,"name",{value:a,configurable:!0});import{c as i}from"./WarningIcon-47731319.js";import{B as t}from"./Badge-f35e4615.js";import{j as r}from"./jsx-runtime-6057fa59.js";import"./Box-28ceaece.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-ded810a3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";/* empty css                              */const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CloseIcon } from '~/icons'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = args => {
  return <Badge {...args} />
}

export const SingleCharacter = Template.bind({})
SingleCharacter.args = {
  value: '3',
  variant: 'info',
}

export const MultiCharacter = Template.bind({})
MultiCharacter.args = {
  value: '2713',
  variant: 'success',
}

export const Icon = Template.bind({})
Icon.args = {
  value: <CloseIcon />,
  variant: 'error',
  size: 'lg',
}
`,locationsMap:{"single-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},"multi-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},icon:{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}}}}},title:"Components/Badge",component:t},o=e(n=>r(t,{...n}),"Template"),l=o.bind({});l.args={value:"3",variant:"info"};const s=o.bind({});s.args={value:"2713",variant:"success"};const p=o.bind({});p.args={value:r(i,{}),variant:"error",size:"lg"};const x=["SingleCharacter","MultiCharacter","Icon"];export{p as Icon,s as MultiCharacter,l as SingleCharacter,x as __namedExportsOrder,b as default};
//# sourceMappingURL=Badge.stories-ad10a09f.js.map
