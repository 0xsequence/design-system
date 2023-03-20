import{a as R,j as L}from"./jsx-runtime-a9c13c85.js";import{B as j}from"./Badge-05c91c91.js";import{B as O}from"./Box-63eb24b2.js";import{H as c,g as A}from"./WarningIcon-d73a79c6.js";import{B as _}from"./Button-f5fc896c.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./Text-cc9cad53.js";import"./typography-f274f330.js";const T={title:"Components/Button",component:_},e={args:{as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass"}},a={args:{as:"a",disabled:!0,href:"#",label:"Click me",size:"md",variant:"glass"}},s={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:c,size:"md",variant:"glass"}},n={args:{disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:A,size:"md",variant:"glass"}},r={args:{disabled:!1,label:"Click me",leftIcon:c,onClick:()=>console.log("Clicked!"),rightIcon:A,size:"md",variant:"glass"}},o={args:{disabled:!1,label:R(O,{gap:"1",children:["Click me",L(j,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:c,size:"md",variant:"glass"}},l={args:{as:"a",href:"/wallet",label:"Click me",leftIcon:c,size:"md"}};var i,t,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'a',
    disabled: false,
    href: '#',
    label: 'Click me',
    size: 'md',
    variant: 'glass'
  }
}`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,g,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    as: 'a',
    disabled: true,
    href: '#',
    label: 'Click me',
    size: 'md',
    variant: 'glass'
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,C,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass'
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var f,b,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass'
  }
}`,...(I=(b=n.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var h,S,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click me',
    leftIcon: ScanIcon,
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass'
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var z,B,x;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: <Box gap="1">
        Click me
        <Badge value="3" />
      </Box>,
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass'
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var y,w,W;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: '/wallet',
    label: 'Click me',
    leftIcon: ScanIcon,
    size: 'md'
  }
}`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};e.parameters={storySource:{source:`{
  args: {
    as: 'a',
    disabled: false,
    href: '#',
    label: 'Click me',
    size: 'md',
    variant: 'glass'
  }
}`},...e.parameters};a.parameters={storySource:{source:`{
  args: {
    as: 'a',
    disabled: true,
    href: '#',
    label: 'Click me',
    size: 'md',
    variant: 'glass'
  }
}`},...a.parameters};s.parameters={storySource:{source:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass'
  }
}`},...s.parameters};n.parameters={storySource:{source:`{
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass'
  }
}`},...n.parameters};r.parameters={storySource:{source:`{
  args: {
    disabled: false,
    label: 'Click me',
    leftIcon: ScanIcon,
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass'
  }
}`},...r.parameters};o.parameters={storySource:{source:`{
  args: {
    disabled: false,
    label: <Box gap="1">
        Click me
        <Badge value="3" />
      </Box>,
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass'
  }
}`},...o.parameters};l.parameters={storySource:{source:`{
  args: {
    as: 'a',
    href: '/wallet',
    label: 'Click me',
    leftIcon: ScanIcon,
    size: 'md'
  }
}`},...l.parameters};const U=["LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcon","WithCountIcon","AnchorButton"];export{l as AnchorButton,a as Disabled,e as LabelOnly,r as WithBothIcon,o as WithCountIcon,s as WithLeftIcon,n as WithRightIcon,U as __namedExportsOrder,T as default};
//# sourceMappingURL=Button.stories-d7751e4b.js.map
