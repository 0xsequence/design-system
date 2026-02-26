import{j as e,r as d}from"./iframe-BBMF4_Co.js";import{B as u}from"./Button-CSQJ1WJf.js";import{M as g}from"./Modal-8mD06x3C.js";import{N as t}from"./NetworkImage-zEdVusE8.js";import{S as m,a as h,b as S,c as I,e as v,d as o}from"./Select-BUOcI1D0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcWdqSRI.js";import"./index-CDvyhB7W.js";import"./classnames-DhbneTZY.js";import"./styles-B8EbM403.js";import"./Text-8ROiINqS.js";import"./index-CNZ3u0ku.js";import"./index-DOlUJV33.js";import"./index-BmlS9TJy.js";import"./index-uT0_8KTM.js";import"./index-CiBFt9EQ.js";import"./index-B0hR6Dd2.js";import"./index-5YeAqW__.js";import"./component-BwdJI_53.js";import"./index-DPxi4w9-.js";import"./index-BQzv07Ih.js";import"./index-DrjdG31K.js";import"./YoutubeIcon-BKceRl2c.js";import"./SearchIcon-25ZybBlU.js";import"./IconButton-CFYavApe.js";import"./Scroll-BK45UeAZ.js";import"./proxy-ocELyNN4.js";import"./Image-BpfZ9JbM.js";import"./index-B1yS4AEW.js";import"./index-DqjWjuea.js";import"./index-xiuPdoyJ.js";import"./index-CK90BcEh.js";import"./index-DiII6Gyb.js";import"./index-B4S1Apww.js";const Z={title:"Forms/Select",component:m.Helper},s={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={render:a=>e.jsxs(m,{defaultValue:a.defaultValue,onValueChange:a.onValueChange,disabled:a.disabled,children:[e.jsx(h,{children:e.jsx(S,{placeholder:"Select a network"})}),e.jsx(I,{align:"start",position:"popper",children:e.jsxs(v,{className:"[&>*]:h-13",children:[e.jsxs(o,{value:"mainnet",children:[e.jsx(t,{chainId:1}),"Mainnet"]}),e.jsxs(o,{value:"polygon",children:[e.jsx(t,{chainId:137}),"Polygon"]}),e.jsxs(o,{value:"bsc",children:[e.jsx(t,{chainId:56}),"BNB Smart Chain"]}),e.jsxs(o,{value:"avalanche",children:[e.jsx(t,{chainId:43114}),"Avalanche"]}),e.jsxs(o,{value:"arbitrum",children:[e.jsx(t,{chainId:42161}),"Arbitrum"]}),e.jsxs(o,{value:"optimism",children:[e.jsx(t,{chainId:10}),"Optimism"]}),e.jsxs(o,{value:"base",children:[e.jsx(t,{chainId:8453}),"Base"]})]})})]}),args:{onValueChange:a=>{console.log("selected: ",a)},disabled:!1,defaultValue:"mainnet"}},r={args:{...s.args,options:Array.from({length:100},(a,n)=>({label:`Option ${n+1}`,value:`option-${n+1}`}))}},c={tags:["!autodocs"],render:a=>{const[n,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),n&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m.Helper,{className:"w-full",...a})})})]})},args:s.args},p={args:{...r.args},render:a=>{const[n,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),n&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m.Helper,{className:"w-full",...a})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
