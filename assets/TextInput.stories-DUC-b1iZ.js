import{j as n}from"./iframe-D00-goLr.js";import{S as l,a as p,c as h}from"./YoutubeIcon-B6FNeEVh.js";import{S as d}from"./SearchIcon-DmZBuCwJ.js";import{B as i}from"./Button-D6vGoBUo.js";import{I as m}from"./IconButton-aTonD1Wx.js";import{T as u}from"./TextInput-D4x2t0YF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./index-CkZCWXXn.js";import"./index-Dp9UmCQa.js";import"./styles-DSBOcsIh.js";import"./Text-DDMnqWt5.js";import"./InputGroup-DqdS-ozQ.js";import"./Input-BZqbEEDU.js";import"./TextArea-Xp3l-ZbW.js";const E={title:"Forms/TextInput",component:u},e={args:{placeholder:"This is the placeholder",disabled:!1}},r={args:{placeholder:"This is the placeholder",leftIcon:l}},o={args:{placeholder:"This is the placeholder",rightIcon:p}},s={args:{placeholder:"This is the placeholder",leftIcon:l,rightIcon:p}},a={args:{placeholder:"Search for coins or collectibles",leftIcon:d,controls:n.jsx(m,{icon:h,size:"xs"})}},t={args:{placeholder:"This is the placeholder","aria-invalid":!0}},c={args:{placeholder:"This is the placeholder",controls:n.jsxs("div",{className:"flex gap-2",children:[n.jsx(i,{size:"xs",shape:"square",disabled:!0,children:"Max"}),n.jsx(i,{size:"xs",shape:"square",children:"Paste"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    rightIcon: ArrowRightIcon
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon,
    rightIcon: ArrowRightIcon
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search for coins or collectibles',
    leftIcon: SearchIcon,
    controls: <IconButton icon={CloseIcon} size="xs" />
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    ['aria-invalid']: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'This is the placeholder',
    controls: <div className="flex gap-2">
        <Button size="xs" shape="square" disabled>
          Max
        </Button>
        <Button size="xs" shape="square">
          Paste
        </Button>
      </div>
  }
}`,...c.parameters?.docs?.source}}};const w=["Default","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","Error","WithComplexControls"];export{e as Default,t as Error,a as SearchInput,s as WithBothIcons,c as WithComplexControls,r as WithLeftIcon,o as WithRightIcon,w as __namedExportsOrder,E as default};
