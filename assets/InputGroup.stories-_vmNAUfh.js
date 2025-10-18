import{j as r}from"./iframe-4jdeRta1.js";import{S as E}from"./SearchIcon-C82-TMiw.js";import{I as n,a as l,b as a,c as d,d as N}from"./InputGroup-DO5rFfoD.js";import"./preload-helper-Dp1pzeXC.js";import"./classnames-CzI9s_aO.js";import"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";import"./styles-Dnb-ama7.js";import"./Input-BgT8pFxp.js";import"./Text-DZp5baOb.js";import"./index-DPmhm0QD.js";import"./TextArea-CGMg1YNK.js";const B={title:"Forms/InputGroup"},t={render:e=>r.jsx(n,{children:r.jsx(l,{placeholder:"Enter text...",...e})}),args:{disabled:!1,"aria-invalid":!1}},s={render:e=>r.jsxs(n,{children:[r.jsx(l,{placeholder:"Search...",...e}),r.jsx(a,{align:"inline-start",children:r.jsx(E,{})}),r.jsx(a,{align:"inline-end",children:"12 items found."})]}),args:{disabled:!1}},p={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",className:"!pl-1",...e})]}),args:{disabled:!1}},o={render:e=>r.jsxs(n,{children:[r.jsx(a,{align:"inline-start",children:r.jsx(d,{children:"https://"})}),r.jsx(l,{placeholder:"example.com",value:"invalid value",className:"!pl-1",...e})]}),args:{disabled:!1,"aria-invalid":!0}},u={render:e=>r.jsxs(n,{children:[r.jsx(N,{placeholder:"Enter text...",...e}),r.jsx(a,{align:"block-end",children:r.jsx(d,{children:"52% used"})})]}),args:{disabled:!1,"aria-invalid":!1}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return <InputGroup>
        <InputGroupInput placeholder="Enter text..." {...args} />
      </InputGroup>;
  },
  args: {
    disabled: false,
    ['aria-invalid']: false
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var I,x,G;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(x=s.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var g,h,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,b,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,A,T;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const C=["Default","SearchInput","UrlInput","WithError","TextareaInput"];export{t as Default,s as SearchInput,u as TextareaInput,p as UrlInput,o as WithError,C as __namedExportsOrder,B as default};
