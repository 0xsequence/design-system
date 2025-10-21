import{j as e}from"./iframe-CXXZZJqO.js";import{S as m,a as p,b as u}from"./YoutubeIcon-CQZNXsaH.js";import"./SearchIcon-2vz8hXfd.js";import{B as a}from"./Button-BCne5Svs.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-By7m_D43.js";import"./index-jbG8BFt3.js";import"./index-DgpCyxu5.js";import"./styles-S7yBqErU.js";import"./Text-gsUq4eMD.js";const S={title:"Components/Buttons/Button",component:a},s={render:r=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary"}),e.jsx(a,{...r,variant:"outline",children:"Outline"}),e.jsx(a,{...r,variant:"emphasis",children:"Emphasis"}),e.jsx(a,{...r,variant:"glass",children:"Glass"}),e.jsx(a,{...r,variant:"ghost",children:"Ghost"}),e.jsx(a,{...r,variant:"raised",children:"Raised"}),e.jsx(a,{...r,variant:"destructive",children:"Destructive"}),e.jsx(a,{...r,variant:"text",children:"Text"})]}),args:{disabled:!1,size:"md",shape:"circle"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4"}}},n={args:{disabled:!1,children:"Click me",size:"md",variant:"secondary"}},i={args:{disabled:!0,children:"Click me",size:"md",variant:"secondary"}},t={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{}),"Click me"]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary"}},o={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Click me"}),e.jsx(p,{})]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary"}},c={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(m,{}),"Click me",e.jsx(p,{})]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary"}},d={args:{size:"md",variant:"secondary",children:e.jsx(u,{}),disabled:!1,iconOnly:!0}},l={args:{size:"md",asChild:!0,children:e.jsx("a",{href:"/wallet",children:"Click me"}),disabled:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 flex-wrap">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="emphasis">
        Emphasis
      </Button>
      <Button {...args} variant="glass">
        Glass
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="raised">
        Raised
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </div>,
  args: {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: 'Click me',
    size: 'md',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Click me',
    size: 'md',
    variant: 'secondary'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: <>
        <ScanIcon />
        Click me
      </>,
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: <>
        <span>Click me</span>
        <ArrowRightIcon />
      </>,
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    children: <>
        <ScanIcon />
        Click me
        <ArrowRightIcon />
      </>,
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'secondary',
    children: <WalletIcon />,
    disabled: false,
    iconOnly: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    asChild: true,
    children: <a href="/wallet">Click me</a>,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcon","IconOnly","WithAnchor"];export{s as Default,i as Disabled,d as IconOnly,n as LabelOnly,l as WithAnchor,c as WithBothIcon,t as WithLeftIcon,o as WithRightIcon,j as __namedExportsOrder,S as default};
