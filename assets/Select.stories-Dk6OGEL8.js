import{j as e}from"./iframe-CEBGsxht.js";import{M as p}from"./Modal-BCiyGZf0.js";import{N as t}from"./NetworkImage-fyIezDyF.js";import{T as s}from"./Text-C1CTKZYh.js";import{S as m}from"./Select-B75Ll5K7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8_ke9uTL.js";import"./index-B_ewnVLa.js";import"./index-C3n5f5AG.js";import"./index-BgYWh0mh.js";import"./index-Dr7tSuFd.js";import"./index-BLXwKcTw.js";import"./index-BOw7vfM6.js";import"./index-Co5Ovxbk.js";import"./index-C6O-H2UX.js";import"./index-DEdYw-iO.js";import"./component-BhuFX6f7.js";import"./index-DxOa_yPB.js";import"./index-DqMHP-1G.js";import"./index-CetPjlNc.js";import"./index-jbG8BFt3.js";import"./YoutubeIcon-CXHvyj1-.js";import"./classnames-By7m_D43.js";import"./SearchIcon-DVyE4Q8D.js";import"./IconButton-B4KHeI53.js";import"./ButtonPreset-Bd5M1u3w.js";import"./Button-BrNDy21d.js";import"./styles-S7yBqErU.js";import"./Scroll-BdLP6IPr.js";import"./proxy-B8PbKp_-.js";import"./Image-QPDCkxJT.js";import"./index-BZcLCKB6.js";import"./index-DJtptALg.js";import"./index-D_ZY9gmb.js";import"./index-CTq3hmOT.js";import"./index-DAWxpg2E.js";const L={title:"Forms/Select",component:m},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},l={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(s,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(s,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(s,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(s,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(s,{children:"Arbitrum"})]}),value:"arbitrum"}]}},r={args:{...o.args,options:Array.from({length:100},(a,c)=>({label:`Option ${c+1}`,value:`option-${c+1}`}))}},n={tags:["!autodocs"],render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})}),args:o.args},i={args:{...r.args},render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{...a})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
