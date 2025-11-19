import{j as r}from"./iframe-DvCWmpfk.js";import{S as i}from"./SearchIcon-D60Glcfa.js";import{I as n,a as l,b as a,c as d,d as c}from"./InputGroup-BOoHXb4v.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./Input-Cm0-efsM.js";import"./Text-D9Rr0CBh.js";import"./index-DJZN4Ino.js";import"./index-DnZ_W-5S.js";import"./TextArea-BjcwvL_c.js";const A={title:"Forms/InputGroup"},t={render:e=>r.jsx(n,{children:r.jsx(l,{placeholder:"Enter text...",...e})}),args:{disabled:!1,"aria-invalid":!1}},s={render:e=>r.jsxs(n,{children:[r.jsx(l,{placeholder:"Search...",...e}),r.jsx(a,{align:"inline-start",children:r.jsx(i,{})}),r.jsx(a,{align:"inline-end",children:"12 items found."})]}),args:{disabled:!1}},p={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",className:"!pl-1",...e})]}),args:{disabled:!1}},o={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",value:"invalid value",className:"!pl-1",...e})]}),args:{disabled:!1,"aria-invalid":!0}},u={render:e=>r.jsxs(n,{children:[r.jsx(c,{placeholder:"Enter text...",...e}),r.jsx(a,{align:"block-end",children:r.jsx(d,{children:"52% used"})})]}),args:{disabled:!1,"aria-invalid":!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupInput placeholder="Enter text..." {...args} />
      </InputGroup>;
  },
  args: {
    disabled: false,
    ['aria-invalid']: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupInput placeholder="Search..." {...args} />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 items found.</InputGroupAddon>
      </InputGroup>;
  },
  args: {
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-1" {...args} />
      </InputGroup>;
  },
  args: {
    disabled: false
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" value="invalid value" className="!pl-1" {...args} />
      </InputGroup>;
  },
  args: {
    disabled: false,
    ['aria-invalid']: true
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupTextarea placeholder="Enter text..." {...args} />
        <InputGroupAddon align="block-end">
          <InputGroupText>52% used</InputGroupText>
        </InputGroupAddon>
      </InputGroup>;
  },
  args: {
    disabled: false,
    ['aria-invalid']: false
  }
}`,...u.parameters?.docs?.source}}};const T=["Default","SearchInput","UrlInput","WithError","TextareaInput"];export{t as Default,s as SearchInput,u as TextareaInput,p as UrlInput,o as WithError,T as __namedExportsOrder,A as default};
