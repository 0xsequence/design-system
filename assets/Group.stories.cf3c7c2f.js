var s=Object.defineProperty;var e=(o,l)=>s(o,"name",{value:l,configurable:!0});import{G as r}from"./Group.fd7ae060.js";import{a as n,j as i}from"./jsx-runtime.41e417f8.js";import"./Box.86996807.js";/* empty css                             */import"./atoms.css.b06098ab.js";import"./Text.3db88a83.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c2f87c82.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Group } from './Group'

export default {
  title: 'Components/Group',
  component: Group
} as ComponentMeta<typeof Group>

const Template: ComponentStory<typeof Group> = args => <Group {...args} />

export const Rows = Template.bind({})
Rows.args = {
  label: 'Rows',
  children: [1, 2, 3, 4, 5].map(x => <div key={x}>Item {x}</div>)
}

export const RowsWithContentRight = Template.bind({})
RowsWithContentRight.args = {
  label: 'Rows',
  children: [1, 2, 3, 4, 5].map(x => <div key={x}>Item {x}</div>),
  contentRight: <div>Menu</div>
}

export const Grid = Template.bind({})
Grid.args = {
  label: 'Grid',
  children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => <div key={x}>Item {x}</div>),
  layout: 'grid'
}
`,locationsMap:{rows:{startLoc:{col:47,line:10},endLoc:{col:74,line:10},startBody:{col:47,line:10},endBody:{col:74,line:10}},"rows-with-content-right":{startLoc:{col:47,line:10},endLoc:{col:74,line:10},startBody:{col:47,line:10},endBody:{col:74,line:10}},grid:{startLoc:{col:47,line:10},endLoc:{col:74,line:10},startBody:{col:47,line:10},endBody:{col:74,line:10}}}}},title:"Components/Group",component:r},t=e(o=>i(r,{...o}),"Template"),d=t.bind({});d.args={label:"Rows",children:[1,2,3,4,5].map(o=>n("div",{children:["Item ",o]},o))};const p=t.bind({});p.args={label:"Rows",children:[1,2,3,4,5].map(o=>n("div",{children:["Item ",o]},o)),contentRight:i("div",{children:"Menu"})};const a=t.bind({});a.args={label:"Grid",children:[1,2,3,4,5,6,7,8,9].map(o=>n("div",{children:["Item ",o]},o)),layout:"grid"};const v=["Rows","RowsWithContentRight","Grid"];export{a as Grid,d as Rows,p as RowsWithContentRight,v as __namedExportsOrder,b as default};
//# sourceMappingURL=Group.stories.cf3c7c2f.js.map
