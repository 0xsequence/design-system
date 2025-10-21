import{j as l}from"./iframe-CXXZZJqO.js";import{S as t,a as d}from"./YoutubeIcon-CQZNXsaH.js";import"./SearchIcon-2vz8hXfd.js";import{B as m}from"./Badge-B-_hFJs3.js";import{B as p}from"./ButtonPreset-BTNOy8uc.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-By7m_D43.js";import"./index-jbG8BFt3.js";import"./Text-gsUq4eMD.js";import"./index-DgpCyxu5.js";import"./Button-BCne5Svs.js";import"./styles-S7yBqErU.js";const B={title:"Components/Buttons/ButtonPreset",component:p},e={args:{label:"Click me",variant:"primary"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4"}}},a={args:{disabled:!1,label:"Click me",size:"md",variant:"secondary"}},r={args:{disabled:!0,label:"Click me",size:"md",variant:"secondary"}},s={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:t,size:"md",variant:"secondary"}},o={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:d,size:"md",variant:"secondary"}},n={args:{disabled:!1,label:"Click me",leftIcon:t,onClick:()=>console.log("Clicked!"),rightIcon:d,size:"md",variant:"secondary"}},c={args:{disabled:!1,label:l.jsxs("div",{className:"flex items-center gap-1",children:["Click me",l.jsx(m,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:t,size:"md",variant:"secondary"}},i={args:{label:"Click me",leftIcon:t,size:"md",asChild:!0,children:l.jsx("a",{href:"/wallet"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'primary'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4'
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    size: 'md',
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Click me',
    size: 'md',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    leftIcon: ScanIcon,
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: <div className="flex items-center gap-1">
        Click me
        <Badge value="3" />
      </div>,
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'secondary'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    leftIcon: ScanIcon,
    size: 'md',
    asChild: true,
    children: <a href="/wallet" />
  }
}`,...i.parameters?.docs?.source}}};const w=["Primary","LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcon","WithCountIcon","AnchorButton"];export{i as AnchorButton,r as Disabled,a as LabelOnly,e as Primary,n as WithBothIcon,c as WithCountIcon,s as WithLeftIcon,o as WithRightIcon,w as __namedExportsOrder,B as default};
