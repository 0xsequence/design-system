import{j as t}from"./iframe-D3urtAcx.js";import{S as l,a as d}from"./YoutubeIcon-wN_emOBW.js";import"./SearchIcon-Dd6kfm2T.js";import{B as m}from"./Badge-BFbf8s3X.js";import{B as p}from"./Button-D4z4UJ9K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./Text-474fLcxl.js";import"./index-BWhJH_mv.js";import"./index-CsriaMcm.js";import"./styles-DSBOcsIh.js";const z={title:"Components/Buttons/ButtonHelper",component:p.Helper},e={args:{label:"Click me",variant:"primary"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4"}}},a={args:{disabled:!1,label:"Click me",size:"md",variant:"secondary"}},r={args:{disabled:!0,label:"Click me",size:"md",variant:"secondary"}},s={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:l,size:"md",variant:"secondary"}},o={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:d,size:"md",variant:"secondary"}},n={args:{disabled:!1,label:"Click me",leftIcon:l,onClick:()=>console.log("Clicked!"),rightIcon:d,size:"md",variant:"secondary"}},c={args:{disabled:!1,label:t.jsxs("div",{className:"flex items-center gap-1",children:["Click me",t.jsx(m,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:l,size:"md",variant:"secondary"}},i={args:{label:"Click me",leftIcon:l,size:"md",asChild:!0,children:t.jsx("a",{href:"/wallet"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const B=["Primary","LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcon","WithCountIcon","AnchorButton"];export{i as AnchorButton,r as Disabled,a as LabelOnly,e as Primary,n as WithBothIcon,c as WithCountIcon,s as WithLeftIcon,o as WithRightIcon,B as __namedExportsOrder,z as default};
