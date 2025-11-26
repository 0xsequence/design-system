import{j as r}from"./iframe-C9_X0O6_.js";import{a as n}from"./YoutubeIcon-DojP2ob7.js";import"./SearchIcon-DzM3F7JH.js";import{I as a}from"./IconButton-C7I0l1l4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./Button-B6g84b0A.js";import"./index-DaY3tqTu.js";import"./index-NpXQ3Rpf.js";import"./styles-DSBOcsIh.js";import"./Text-BsVz7nZj.js";const x={title:"Components/Buttons/IconButton",component:a},o={render:e=>r.jsxs("div",{className:"flex gap-4 flex-wrap",children:[r.jsx(a,{...e,variant:"primary"}),r.jsx(a,{...e,variant:"secondary"}),r.jsx(a,{...e,variant:"outline"}),r.jsx(a,{...e,variant:"emphasis"}),r.jsx(a,{...e,variant:"ghost"}),r.jsx(a,{...e,variant:"destructive"})]}),args:{icon:n,disabled:!1,size:"md",shape:"circle"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4"}}},t={args:{icon:n,disabled:!1,size:"md",onClick:()=>console.log("ouch!"),variant:"secondary"}},s={args:{icon:n,size:"md",variant:"secondary",asChild:!0,children:r.jsx("a",{href:"/wallet"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 flex-wrap">
      <IconButton {...args} variant="primary" />
      <IconButton {...args} variant="secondary" />
      <IconButton {...args} variant="outline" />
      <IconButton {...args} variant="emphasis" />
      <IconButton {...args} variant="ghost" />
      <IconButton {...args} variant="destructive" />
    </div>,
  args: {
    icon: ArrowRightIcon,
    disabled: false,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4'
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon,
    disabled: false,
    size: 'md',
    onClick: () => console.log('ouch!'),
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon,
    size: 'md',
    variant: 'secondary',
    asChild: true,
    children: <a href="/wallet" />
  }
}`,...s.parameters?.docs?.source}}};const w=["Default","ArrowButton","AnchorButton"];export{s as AnchorButton,t as ArrowButton,o as Default,w as __namedExportsOrder,x as default};
