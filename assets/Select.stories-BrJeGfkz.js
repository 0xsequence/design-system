import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as l}from"./NetworkImage-j3Qod0UC.js";import{T as t}from"./Text-Vf0bTgHv.js";import{M as b}from"./Modal-4JBkjOHl.js";import{S as x}from"./Select-B691d3D3.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-CFahbR6w.js";import"./classnames-Dx2cly0x.js";import"./Image-BpOGqigi.js";import"./proxy-BNSlCH7V.js";import"./index-AemB5ySP.js";import"./index-By4xKCrq.js";import"./index-uKUYdOYu.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./index-C-MTDzn3.js";import"./index-R-Jffeda.js";import"./Combination-1ojrrKJk.js";import"./index-DYKS6Wkw.js";import"./YoutubeIcon-DIH2dKHH.js";import"./IconButton-C8M4SpWw.js";import"./Button-BafyUhnU.js";import"./Scroll-Cg7iLfAt.js";import"./ThemeProvider-Bf-MMZPN.js";import"./color-DbP-jgcz.js";import"./index-BONQ-nWO.js";import"./index-BcsFqELm.js";import"./index-DTW3a5fS.js";import"./index-bEydcn_X.js";import"./index-BLmjmuzb.js";import"./index-DvN2G9j9.js";import"./Field-uTSufkFG.js";const Y={title:"Forms/Select",component:x},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},s={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:1}),e.jsx(t,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:137}),e.jsx(t,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:56}),e.jsx(t,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:43114}),e.jsx(t,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:42161}),e.jsx(t,{children:"Arbitrum"})]}),value:"arbitrum"}]}},i={tags:["!autodocs"],render:a=>e.jsx(b,{children:e.jsx("div",{className:"flex p-4 gap-2",children:e.jsx(x,{...a})})}),args:o.args};var n,r,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    return <Modal>
        <div className="flex p-4 gap-2">
          <Select {...args} />
        </div>
      </Modal>;
  },
  args: Default.args
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const Z=["Default","Custom","WithinModal"];export{s as Custom,o as Default,i as WithinModal,Z as __namedExportsOrder,Y as default};
