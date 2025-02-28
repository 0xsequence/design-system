import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{N as l}from"./NetworkImage-BbaEGYA9.js";import{T as t}from"./Text-BP7FPHpg.js";import{M as b}from"./Modal-qpY2f8dv.js";import{S as x}from"./Select-CiMMA8MI.js";import"./index-C9rmetsa.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./index-D1TSixAU.js";import"./classnames-Dx2cly0x.js";import"./Image-Dobprhtr.js";import"./proxy-CYprtF8D.js";import"./index-DEvaI7vP.js";import"./index-BWtkTp-R.js";import"./index-CuZtKiOG.js";import"./index-Dcf1nc42.js";import"./index-D2m0ySOf.js";import"./index-VR-_z_Zs.js";import"./index-DCVWRiMv.js";import"./Combination-DfJfzaFg.js";import"./index-DogTl_U1.js";import"./WarningIcon-Bz_YTmeh.js";import"./IconButton-4QFb-HhN.js";import"./Button-DaJh_8Si.js";import"./Scroll-HNtTmBVf.js";import"./ThemeProvider-9Kl_03Oo.js";import"./color-Cn0GlU5F.js";import"./index-BFS5t9Ij.js";import"./index-Bac_1hpE.js";import"./index-4RitGr_c.js";import"./index-CdSWItFS.js";import"./index-CpZK5cx3.js";import"./index--wnn4zir.js";import"./Field-CndLg3yr.js";const Z={title:"Forms/Select",component:x},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},i={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:1}),e.jsx(t,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:137}),e.jsx(t,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:56}),e.jsx(t,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:43114}),e.jsx(t,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:42161}),e.jsx(t,{children:"Arbitrum"})]}),value:"arbitrum"}]}},s={tags:["!autodocs"],render:a=>e.jsx(b,{children:e.jsx("div",{className:"flex p-4 gap-2",children:e.jsx(x,{...a})})}),args:o.args};var n,r,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
