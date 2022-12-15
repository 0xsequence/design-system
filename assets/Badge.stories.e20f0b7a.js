var c=Object.defineProperty;var e=(n,a)=>c(n,"name",{value:a,configurable:!0});import{c as i}from"./WarningIcon.1d3393be.js";import{B as t}from"./Badge.bfbbbc10.js";import{j as r}from"./jsx-runtime.45971c93.js";import"./Box.9ad41e42.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./iframe.c4333eae.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{"single-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},"multi-character":{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}},icon:{startLoc:{col:47,line:12},endLoc:{col:1,line:14},startBody:{col:47,line:12},endBody:{col:1,line:14}}}}},title:"Components/Badge",component:t},o=e(n=>r(t,{...n}),"Template"),l=o.bind({});l.args={value:"3",variant:"info"};const s=o.bind({});s.args={value:"2713",variant:"success"};const p=o.bind({});p.args={value:r(i,{}),variant:"error",size:"lg"};const b=["SingleCharacter","MultiCharacter","Icon"];export{p as Icon,s as MultiCharacter,l as SingleCharacter,b as __namedExportsOrder,S as default};
//# sourceMappingURL=Badge.stories.e20f0b7a.js.map
