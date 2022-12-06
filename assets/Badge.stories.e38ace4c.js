var c=Object.defineProperty;var e=(n,a)=>c(n,"name",{value:a,configurable:!0});import{b as i}from"./WarningIcon.8742b689.js";import{B as t}from"./Badge.62aea64d.js";import{j as r}from"./jsx-runtime.70563c3e.js";import"./Box.5c89af15.js";/* empty css                             */import"./atoms.css.2d566a90.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./iframe.61a675ee.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckmarkIcon, CloseIcon } from '~/icons'

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
`,locationsMap:{"single-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},"multi-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},icon:{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}}}}},title:"Components/Badge",component:t},o=e(n=>r(t,{...n}),"Template"),l=o.bind({});l.args={value:"3",variant:"info"};const s=o.bind({});s.args={value:"2713",variant:"success"};const m=o.bind({});m.args={value:r(i,{}),variant:"error",size:"lg"};const I=["SingleCharacter","MultiCharacter","Icon"];export{m as Icon,s as MultiCharacter,l as SingleCharacter,I as __namedExportsOrder,b as default};
//# sourceMappingURL=Badge.stories.e38ace4c.js.map
