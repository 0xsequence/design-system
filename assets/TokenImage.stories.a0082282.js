var a=Object.defineProperty;var e=(o,m)=>a(o,"name",{value:m,configurable:!0});import{T as t}from"./TokenImage.3f69190a.js";import{j as i}from"./jsx-runtime.7950ebae.js";import"./Box.a7ff084d.js";/* empty css                             */import"./atoms.css.66ddf8d3.js";import"./Text.cca25e33.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.fe1cae89.js";const u={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TokenImage } from './TokenImage'

export default {
  title: 'Components/TokenImage',
  component: TokenImage,
} as ComponentMeta<typeof TokenImage>

const Template: ComponentStory<typeof TokenImage> = args => {
  return <TokenImage {...args} />
}

export const WithImage = Template.bind({})
WithImage.args = {
  size: 'lg',
  src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  size: 'lg',
  symbol: 'SCAM',
}
`,locationsMap:{"with-image":{startLoc:{col:52,line:10},endLoc:{col:1,line:12},startBody:{col:52,line:10},endBody:{col:1,line:12}},"without-image":{startLoc:{col:52,line:10},endLoc:{col:1,line:12},startBody:{col:52,line:10},endBody:{col:1,line:12}}}}},title:"Components/TokenImage",component:t},n=e(o=>i(t,{...o}),"Template"),s=n.bind({});s.args={size:"lg",src:"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912"};const r=n.bind({});r.args={size:"lg",symbol:"SCAM"};const f=["WithImage","WithoutImage"];export{s as WithImage,r as WithoutImage,f as __namedExportsOrder,u as default};
//# sourceMappingURL=TokenImage.stories.a0082282.js.map
