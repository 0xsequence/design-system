import{j as e,r as d}from"./iframe-DVpTyOqq.js";import{B as u}from"./Button-BI1B_92Z.js";import{M as g}from"./Modal-g-8MciaJ.js";import{N as t}from"./NetworkImage-CwFEJNBT.js";import{S as m,a as h,b as S,c as I,e as v,d as o}from"./Select-CLMQPyyL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dr8QvyYb.js";import"./index-CJezIvJD.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./Text-CXv7c80j.js";import"./index-CQF2fUc_.js";import"./index-X_SM0Ghf.js";import"./index-BKHnpAHy.js";import"./index-CSVmpO1B.js";import"./index-CTt9Oopj.js";import"./index-PKjdgpw0.js";import"./index-Cd2yUr1u.js";import"./component-DLRFWEdr.js";import"./index-CnBcfIUi.js";import"./index-BJC_OqkK.js";import"./index-Dc3w96IN.js";import"./YoutubeIcon-CCib6wCt.js";import"./SearchIcon-B13Dck_7.js";import"./IconButton-0OFOtcvI.js";import"./Scroll-DWKn5EtT.js";import"./proxy-BiI0eA5t.js";import"./Image-C5I8ubnA.js";import"./index-Bd5hFHj5.js";import"./index-C-pcHA47.js";import"./index-Bfv2ATLc.js";import"./index-B-h0Uw-U.js";import"./index-DAAKnxvc.js";import"./index-BfxlNCXC.js";const Z={title:"Forms/Select",component:m.Helper},s={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={render:a=>e.jsxs(m,{defaultValue:a.defaultValue,onValueChange:a.onValueChange,disabled:a.disabled,children:[e.jsx(h,{children:e.jsx(S,{placeholder:"Select a network"})}),e.jsx(I,{align:"start",position:"popper",children:e.jsxs(v,{className:"[&>*]:h-13",children:[e.jsxs(o,{value:"mainnet",children:[e.jsx(t,{chainId:1}),"Mainnet"]}),e.jsxs(o,{value:"polygon",children:[e.jsx(t,{chainId:137}),"Polygon"]}),e.jsxs(o,{value:"bsc",children:[e.jsx(t,{chainId:56}),"BNB Smart Chain"]}),e.jsxs(o,{value:"avalanche",children:[e.jsx(t,{chainId:43114}),"Avalanche"]}),e.jsxs(o,{value:"arbitrum",children:[e.jsx(t,{chainId:42161}),"Arbitrum"]}),e.jsxs(o,{value:"optimism",children:[e.jsx(t,{chainId:10}),"Optimism"]}),e.jsxs(o,{value:"base",children:[e.jsx(t,{chainId:8453}),"Base"]})]})})]}),args:{onValueChange:a=>{console.log("selected: ",a)},disabled:!1,defaultValue:"mainnet"}},r={args:{...s.args,options:Array.from({length:100},(a,n)=>({label:`Option ${n+1}`,value:`option-${n+1}`}))}},c={tags:["!autodocs"],render:a=>{const[n,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),n&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m.Helper,{className:"w-full",...a})})})]})},args:s.args},p={args:{...r.args},render:a=>{const[n,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),n&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m.Helper,{className:"w-full",...a})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Select defaultValue={args.defaultValue} onValueChange={args.onValueChange} disabled={args.disabled}>
      <SelectTrigger>
        <SelectValue placeholder="Select a network" />
      </SelectTrigger>
      <SelectContent align="start" position="popper">
        <SelectGroup className="[&>*]:h-13">
          <SelectItem value="mainnet">
            <NetworkImage chainId={1} />
            Mainnet
          </SelectItem>
          <SelectItem value="polygon">
            <NetworkImage chainId={137} />
            Polygon
          </SelectItem>
          <SelectItem value="bsc">
            <NetworkImage chainId={56} />
            BNB Smart Chain
          </SelectItem>
          <SelectItem value="avalanche">
            <NetworkImage chainId={43114} />
            Avalanche
          </SelectItem>
          <SelectItem value="arbitrum">
            <NetworkImage chainId={42161} />
            Arbitrum
          </SelectItem>
          <SelectItem value="optimism">
            <NetworkImage chainId={10} />
            Optimism
          </SelectItem>
          <SelectItem value="base">
            <NetworkImage chainId={8453} />
            Base
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>,
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    disabled: false,
    defaultValue: 'mainnet'
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <Select.Helper className="w-full" {...args} />
            </div>
          </Modal>}
      </>;
  },
  args: Default.args
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...TooManyOptions.args
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <Select.Helper className="w-full" {...args} />
            </div>
          </Modal>}
      </>;
  }
}`,...p.parameters?.docs?.source}}};const ee=["Default","NetworkSelect","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{s as Default,i as NetworkSelect,r as TooManyOptions,p as TooManyOptionsWithModal,c as WithinModal,ee as __namedExportsOrder,Z as default};
