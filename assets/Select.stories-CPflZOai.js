import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{N as a}from"./NetworkImage-CHOry2CE.js";import{T as l}from"./Text-CX0KV9o3.js";import{S as d}from"./Select-DHiWHBR4.js";import"./index-yBjzXJbu.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-DubqEmGm.js";import"./classnames-D6E8UiG_.js";import"./Image-CKeEnp65.js";import"./proxy-BbLcDzuY.js";import"./index-BkTKsPvT.js";import"./index-DCU19ADU.js";import"./index-IE9ObSwG.js";import"./index-DKEAZgBW.js";import"./index-uAfqLnsi.js";import"./index-D9OL-CBG.js";import"./index-BPXglf9v.js";import"./index-CgSAbh1h.js";import"./Combination-DJeA0G6w.js";import"./index-Cbw-VAaK.js";import"./index-zr2Eu3hM.js";import"./index-JD-fg0In.js";import"./index-CfbYICbs.js";import"./index-vvl_XaO4.js";import"./Field-CSTtEB36.js";import"./WarningIcon-DdHI6DsF.js";const R={title:"Forms/Select",component:d},t={args:{onValueChange:n=>{console.log("selected: ",n)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},o={args:{onValueChange:n=>{console.log("selected: ",n)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{chainId:1}),e.jsx(l,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{chainId:137}),e.jsx(l,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{chainId:56}),e.jsx(l,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{chainId:43114}),e.jsx(l,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{chainId:42161}),e.jsx(l,{children:"Arbitrum"})]}),value:"arbitrum"}]}};var i,s,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const q=["Default","Custom"];export{o as Custom,t as Default,q as __namedExportsOrder,R as default};
