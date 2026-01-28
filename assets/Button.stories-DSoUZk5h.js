import{j as e}from"./iframe-DVHNgKy8.js";import{S as h,a as p,b as u}from"./YoutubeIcon-DmMRlnhJ.js";import"./SearchIcon-BCjMaWeG.js";import{S as g}from"./Spinner-CCw5E0FC.js";import{B as a}from"./Button-MoqeDLV9.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-Cf5f3TJi.js";import"./index-D6ac5apA.js";import"./index-DC42UMvT.js";import"./styles-D3VuZg3D.js";import"./Text-BM34eQKh.js";const I={title:"Components/Buttons/Button",component:a},s={render:r=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary"}),e.jsx(a,{...r,variant:"outline",children:"Outline"}),e.jsx(a,{...r,variant:"emphasis",children:"Emphasis"}),e.jsx(a,{...r,variant:"ghost",children:"Ghost"}),e.jsx(a,{...r,variant:"destructive",children:"Destructive"}),e.jsx(a,{...r,variant:"text",children:"Text"}),e.jsx(a,{...r,variant:null,children:"Null"})]}),args:{disabled:!1,size:"md",shape:"circle"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4"}}},n={args:{disabled:!1,children:"Click me",size:"md",variant:"secondary"}},i={args:{disabled:!0,children:"Click me",size:"md",variant:"secondary"}},t={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{}),"Click me"]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary"}},o={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Click me"}),e.jsx(u,{})]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary"}},c={args:{disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(p,{}),"Click me",e.jsx(u,{className:"ml-auto"})]}),onClick:()=>console.log("Clicked!"),size:"md",variant:"secondary",className:"w-full"}},l={args:{size:"md",variant:"secondary",children:e.jsx(h,{}),disabled:!1,iconOnly:!0}},d={args:{size:"md",asChild:!0,children:e.jsx("a",{href:"/wallet",children:"Click me"}),disabled:!1}},m={args:{size:"md",variant:"secondary",children:e.jsxs(e.Fragment,{children:["Click me",e.jsx(g,{})]}),disabled:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4 items-center flex-wrap">
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
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
      <Button {...args} variant={null}>
        Null
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
        <ArrowRightIcon className="ml-auto" />
      </>,
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary',
    className: 'w-full'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'secondary',
    children: <WalletIcon />,
    disabled: false,
    iconOnly: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    asChild: true,
    children: <a href="/wallet">Click me</a>,
    disabled: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'secondary',
    children: <>
        Click me
        <Spinner />
      </>,
    disabled: false
  }
}`,...m.parameters?.docs?.source}}};const w=["Default","LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcon","IconOnly","WithAnchor","WithSpinner"];export{s as Default,i as Disabled,l as IconOnly,n as LabelOnly,d as WithAnchor,c as WithBothIcon,t as WithLeftIcon,o as WithRightIcon,m as WithSpinner,w as __namedExportsOrder,I as default};
