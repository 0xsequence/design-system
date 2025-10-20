import{j as e}from"./iframe-Cl2_sPGO.js";import{M as p}from"./Modal-DomfOSZn.js";import{N as t}from"./NetworkImage-BMmppqo_.js";import{T as s}from"./Text-Cm33UXDq.js";import{S as m}from"./Select-vV8pt61F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQn1fbeG.js";import"./index-CW9leUiE.js";import"./index-BHTpT2tX.js";import"./index-DVN1Ucj3.js";import"./index-s7iFmre4.js";import"./index-Dst0-rGJ.js";import"./index-C-0pdBG7.js";import"./index-FSVptkDK.js";import"./index-C1qlk7jn.js";import"./index-CzA1uZ2B.js";import"./component-DW41AYAy.js";import"./index-512678Tw.js";import"./Combination-C1JCgcmb.js";import"./index-B6bupPGk.js";import"./index-jbG8BFt3.js";import"./YoutubeIcon-gIJFUimF.js";import"./classnames-By7m_D43.js";import"./SearchIcon-OaXi2OyC.js";import"./IconButton-Bi0ZQzzO.js";import"./ButtonPreset-CEXm-JOP.js";import"./Button-BevjkyNd.js";import"./styles-S7yBqErU.js";import"./Scroll-CzOL1_NX.js";import"./proxy-DQ5Ee-gt.js";import"./Image-Dme9Jxnw.js";import"./index-D3X_Yifb.js";import"./index-BJRl7mGI.js";import"./index-Cv5Hmah1.js";import"./index-BmzSv1nC.js";import"./index-dXFe99hN.js";const L={title:"Forms/Select",component:m},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},l={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(s,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(s,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(s,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(s,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(s,{children:"Arbitrum"})]}),value:"arbitrum"}]}},r={args:{...o.args,options:Array.from({length:100},(a,c)=>({label:`Option ${c+1}`,value:`option-${c+1}`}))}},n={tags:["!autodocs"],render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})}),args:o.args},i={args:{...r.args},render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{...a})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
    placeholder: 'Select an option',
    disabled: false,
    options: [{
      label: 'Option 1',
      value: 'option-1'
    }, {
      label: 'Option 2',
      value: 'option-2'
    }, {
      label: 'Option 3',
      value: 'option-3'
    }, {
      label: 'Disabled Option',
      value: 'option-4',
      disabled: true
    }, {
      label: 'Custom Action',
      value: 'option-5'
    }]
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
    disabled: false,
    defaultValue: 'mainnet',
    options: [{
      label: <div className="flex items-center gap-2">
            <NetworkImage chainId={1} />
            <Text>Mainnet</Text>
          </div>,
      value: 'mainnet'
    }, {
      label: <div className="flex items-center gap-2">
            <NetworkImage chainId={137} />
            <Text>Polygon</Text>
          </div>,
      value: 'polygon'
    }, {
      label: <div className="flex items-center gap-2">
            <NetworkImage chainId={56} />
            <Text>BNB Smart Chain</Text>
          </div>,
      value: 'bsc'
    }, {
      label: <div className="flex items-center gap-2">
            <NetworkImage chainId={43114} />
            <Text>Avalanche</Text>
          </div>,
      value: 'avalanche'
    }, {
      label: <div className="flex items-center gap-2">
            <NetworkImage chainId={42161} />
            <Text>Arbitrum</Text>
          </div>,
      value: 'arbitrum'
    }]
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`option-\${i + 1}\`
    }))
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    return <Modal>
        <div className="p-4">
          <Select className="w-full" {...args} />
        </div>
      </Modal>;
  },
  args: Default.args
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...TooManyOptions.args
  },
  render: args => {
    return <Modal>
        <div className="p-4">
          <Select {...args} />
        </div>
      </Modal>;
  }
}`,...i.parameters?.docs?.source}}};const Q=["Default","Custom","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{l as Custom,o as Default,r as TooManyOptions,i as TooManyOptionsWithModal,n as WithinModal,Q as __namedExportsOrder,L as default};
