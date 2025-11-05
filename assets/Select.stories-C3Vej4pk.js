import{j as e,r as d}from"./iframe-Da4M60Pm.js";import{B as u}from"./Button-C8brzJia.js";import{M as g}from"./Modal-DioAY-EP.js";import{N as t}from"./NetworkImage-XJn3QcGw.js";import{e as m,S as h,a as S,b as I,c as v,f as O,d as o}from"./Select-BGBOpdLA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXXpuJUT.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./Text-CbT9jUU2.js";import"./index-Cyq02m5W.js";import"./index-BiUP8D5E.js";import"./index-C4Amj-p8.js";import"./index-FO3j98MH.js";import"./index-DC2ZhH18.js";import"./index-Cakqwd1O.js";import"./index-DqdTB7QA.js";import"./index-4Tqp9Mei.js";import"./index-B-r9oMSg.js";import"./component-CXhPQTre.js";import"./index-B5vaS4pK.js";import"./index-DoQmv-1l.js";import"./index-CtQdIeyD.js";import"./YoutubeIcon-h9RsJGM1.js";import"./SearchIcon-B39Jxi2k.js";import"./IconButton-Bb3bY3UV.js";import"./ButtonPreset-CKTwJ_VJ.js";import"./Scroll-BrDcZiOc.js";import"./proxy-CFMibwCJ.js";import"./Image-DjMdfS24.js";import"./index-Dhs_Unk_.js";import"./index-DIRrNYAv.js";import"./index-CRImizBk.js";import"./index-DZcb4IwF.js";import"./index-_S54k7ni.js";const te={title:"Forms/Select",component:m},n={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={render:a=>e.jsxs(h,{defaultValue:a.defaultValue,onValueChange:a.onValueChange,disabled:a.disabled,children:[e.jsx(S,{children:e.jsx(I,{placeholder:"Select a network"})}),e.jsx(v,{align:"start",position:"popper",children:e.jsxs(O,{className:"[&>*]:h-13",children:[e.jsxs(o,{value:"mainnet",children:[e.jsx(t,{chainId:1}),"Mainnet"]}),e.jsxs(o,{value:"polygon",children:[e.jsx(t,{chainId:137}),"Polygon"]}),e.jsxs(o,{value:"bsc",children:[e.jsx(t,{chainId:56}),"BNB Smart Chain"]}),e.jsxs(o,{value:"avalanche",children:[e.jsx(t,{chainId:43114}),"Avalanche"]}),e.jsxs(o,{value:"arbitrum",children:[e.jsx(t,{chainId:42161}),"Arbitrum"]}),e.jsxs(o,{value:"optimism",children:[e.jsx(t,{chainId:10}),"Optimism"]}),e.jsxs(o,{value:"base",children:[e.jsx(t,{chainId:8453}),"Base"]})]})})]}),args:{onValueChange:a=>{console.log("selected: ",a)},disabled:!1,defaultValue:"mainnet"}},r={args:{...n.args,options:Array.from({length:100},(a,s)=>({label:`Option ${s+1}`,value:`option-${s+1}`}))}},c={tags:["!autodocs"],render:a=>{const[s,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),s&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})})]})},args:n.args},p={args:{...r.args},render:a=>{const[s,l]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>l(!0),children:"Open Modal"}),s&&e.jsx(g,{onClose:()=>l(!1),children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
              <SelectHelper className="w-full" {...args} />
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
              <SelectHelper className="w-full" {...args} />
            </div>
          </Modal>}
      </>;
  }
}`,...p.parameters?.docs?.source}}};const oe=["Default","NetworkSelect","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{n as Default,i as NetworkSelect,r as TooManyOptions,p as TooManyOptionsWithModal,c as WithinModal,oe as __namedExportsOrder,te as default};
