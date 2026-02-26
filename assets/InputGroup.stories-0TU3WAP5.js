import{j as r,r as m}from"./iframe-CxR6Y5nx.js";import{S as x}from"./SearchIcon-Cx6_8xPY.js";import{I as n,a as l,b as a,c as g,d}from"./InputGroup-BWeXBWb0.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DhbneTZY.js";import"./styles-B8EbM403.js";import"./Input-Fpn5GQnz.js";import"./Text-7yyC1abT.js";import"./index-C548o_z_.js";import"./index-ynZb39QS.js";import"./TextArea-C3W2KG4W.js";const V={title:"Forms/InputGroup"},t={render:e=>r.jsx(n,{children:r.jsx(l,{placeholder:"Enter text...",...e})}),args:{disabled:!1,"aria-invalid":!1}},s={render:e=>r.jsxs(n,{children:[r.jsx(l,{placeholder:"Search...",...e}),r.jsx(a,{align:"inline-start",children:r.jsx(x,{})}),r.jsx(a,{align:"inline-end",children:"12 items found."})]}),args:{disabled:!1}},p={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",className:"!pl-1",...e})]}),args:{disabled:!1}},u={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",value:"invalid value",className:"!pl-1",...e})]}),args:{disabled:!1,"aria-invalid":!0}},o={render:e=>{const[i,c]=m.useState("");return r.jsxs(n,{children:[r.jsx(g,{placeholder:"Enter text...",value:i,onChange:I=>c(I.target.value),...e}),r.jsx(a,{align:"block-end",children:r.jsxs(d,{children:[i.length,"/100 characters used"]})})]})},args:{disabled:!1,"aria-invalid":!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup>
        <InputGroupTextarea placeholder="Enter text..." value={value} onChange={e => setValue(e.target.value)} {...args} />
        <InputGroupAddon align="block-end">
          <InputGroupText>{value.length}/100 characters used</InputGroupText>
        </InputGroupAddon>
      </InputGroup>;
  },
  args: {
    disabled: false,
    ['aria-invalid']: false
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","SearchInput","UrlInput","WithError","TextareaInput"];export{t as Default,s as SearchInput,o as TextareaInput,p as UrlInput,u as WithError,_ as __namedExportsOrder,V as default};
