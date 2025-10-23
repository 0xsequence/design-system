import{j as e}from"./iframe-Bu-Dw3ML.js";import{M as p}from"./Modal-WSQWXcH9.js";import{N as t}from"./NetworkImage-BMrtnM-o.js";import{T as s}from"./Text-ChHdDdTP.js";import{S as m}from"./Select-Du4rMpO8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL20dyok.js";import"./index-B5S27zRS.js";import"./index-uA3EHRjx.js";import"./index-D1cltFMJ.js";import"./index-DN-2K_TF.js";import"./index-Cps4iE6T.js";import"./index-CosbDRfJ.js";import"./index-DRnf3Feb.js";import"./index-DRXNDmie.js";import"./index-Cfqt4_hk.js";import"./component-jxnCu7-S.js";import"./index-DcA6J5zM.js";import"./index-qQeja2ay.js";import"./index-CVaYfZgR.js";import"./index-jbG8BFt3.js";import"./YoutubeIcon-CLfAmdGg.js";import"./classnames-By7m_D43.js";import"./SearchIcon-u9gj3KaQ.js";import"./IconButton-CpLClnnj.js";import"./ButtonPreset-GFzxsorb.js";import"./Button-DYmiTE4p.js";import"./styles-S7yBqErU.js";import"./Scroll-DqkFZccH.js";import"./proxy-NO_eKK-a.js";import"./Image-nOlHVw4t.js";import"./index-BvCG11f3.js";import"./index-BpR2MTLf.js";import"./index-CGMWyuzd.js";import"./index-C4h8Id06.js";import"./index-gafpiNhs.js";const L={title:"Forms/Select",component:m},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},l={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(s,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(s,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(s,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(s,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(s,{children:"Arbitrum"})]}),value:"arbitrum"}]}},r={args:{...o.args,options:Array.from({length:100},(a,c)=>({label:`Option ${c+1}`,value:`option-${c+1}`}))}},n={tags:["!autodocs"],render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})}),args:o.args},i={args:{...r.args},render:a=>e.jsx(p,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{...a})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
