import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{N as l}from"./NetworkImage-SJY1DR57.js";import{T as t}from"./Text-c-Dt_3pd.js";import{M as b}from"./Modal-6MB-wm-d.js";import{S as x}from"./Select-DxvlIVLn.js";import"./index-yBjzXJbu.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-DubqEmGm.js";import"./classnames-Dx2cly0x.js";import"./Image-BYRrYa8a.js";import"./proxy-71i4uxHe.js";import"./index-BkTKsPvT.js";import"./index-DKEAZgBW.js";import"./index-EKtyzmkF.js";import"./index-e5epXPAg.js";import"./index-fNjTmf9T.js";import"./index-Cbw-VAaK.js";import"./index-DC1_uW73.js";import"./Combination-B30zI8Yx.js";import"./index-SbpNQzLY.js";import"./WarningIcon-Z1cZGh4-.js";import"./IconButton-tt72d-YU.js";import"./Button-CJ_2iam3.js";import"./Scroll-CD1l9_-j.js";import"./ThemeProvider-BFEsm4Z9.js";import"./color-CiP8tUik.js";import"./index-BKFtrmjf.js";import"./index-BPXglf9v.js";import"./index-Cbr3GIiu.js";import"./index-JD-fg0In.js";import"./index-CfbYICbs.js";import"./index-uUNwjQTH.js";import"./Field-BUPg2hwy.js";const Z={title:"Forms/Select",component:x},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:1}),e.jsx(t,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:137}),e.jsx(t,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:56}),e.jsx(t,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:43114}),e.jsx(t,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:42161}),e.jsx(t,{children:"Arbitrum"})]}),value:"arbitrum"}]}},s={tags:["!autodocs"],render:a=>e.jsx(b,{children:e.jsx("div",{className:"flex p-4 gap-2",children:e.jsx(x,{...a})})}),args:o.args};var n,r,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
    label: 'Select',
    description: 'This is a description',
    labelLocation: 'top',
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
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
    label: 'Networks',
    labelLocation: 'top',
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    return <Modal>
        <div className="flex p-4 gap-2">
          <Select {...args} />
        </div>
      </Modal>;
  },
  args: Default.args
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const $=["Default","Custom","WithinModal"];export{i as Custom,o as Default,s as WithinModal,$ as __namedExportsOrder,Z as default};
