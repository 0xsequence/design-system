import{j as e,r as d}from"./iframe-PraEDYtv.js";import{B as u}from"./Button-Cx1a8ZcL.js";import{M as g}from"./Modal-BTlT9jem.js";import{N as t}from"./NetworkImage-t1abCzr9.js";import{T as l}from"./Text-DFW0qT39.js";import{e as m}from"./Select-CTauRMjC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNN8ziOl.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-Ch70o0ld.js";import"./index-CZq0IdwY.js";import"./index-RIrJ9vUx.js";import"./index-xKPRByH5.js";import"./index-FwI0r-Xt.js";import"./index-DvUALpVK.js";import"./index-Op_NiLtJ.js";import"./index-VVcGUtwz.js";import"./index-BzDtmRPl.js";import"./component-vxorUtT4.js";import"./index-SMpoecPk.js";import"./index-BCgsvHPf.js";import"./index-CF8mHGba.js";import"./YoutubeIcon-0cMEZV85.js";import"./SearchIcon-5EnGycls.js";import"./IconButton-B_k2e4mp.js";import"./ButtonPreset-wrSABhF_.js";import"./Scroll-DZj6GDRk.js";import"./proxy-BfXnwmfL.js";import"./Image-DdD1qNEV.js";import"./index-R_FjgKcy.js";import"./index-CdeI35dG.js";import"./index-D_YCLchf.js";import"./index-DkmKAYt5.js";import"./index-CigVeMVL.js";const X={title:"Forms/Select",component:m},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(l,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(l,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(l,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(l,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(l,{children:"Arbitrum"})]}),value:"arbitrum"}]}},r={args:{...o.args,options:Array.from({length:100},(a,s)=>({label:`Option ${s+1}`,value:`option-${s+1}`}))}},p={tags:["!autodocs"],render:a=>{const[s,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open Modal"}),s&&e.jsx(g,{onClose:()=>n(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})})]})},args:o.args},c={args:{...r.args},render:a=>{const[s,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open Modal"}),s&&e.jsx(g,{onClose:()=>n(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`option-\${i + 1}\`
    }))
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <SelectHelper className="w-full" {...args} />
            </div>
          </Modal>}
      </>;
  },
  args: Default.args
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...TooManyOptions.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <SelectHelper className="w-full" {...args} />
            </div>
          </Modal>}
      </>;
  }
}`,...c.parameters?.docs?.source}}};const Y=["Default","Custom","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{i as Custom,o as Default,r as TooManyOptions,c as TooManyOptionsWithModal,p as WithinModal,Y as __namedExportsOrder,X as default};
