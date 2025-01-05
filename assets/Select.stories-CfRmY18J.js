import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as n}from"./Box-bu-4z69b.js";import{N as a}from"./NetworkImage-DtTFCiyi.js";import{T as o}from"./Text-DgiYudWs.js";import{S as u}from"./Select-DesvXJWo.js";import"./index-BP8_t0zE.js";import"./helpers.css.ts.vanilla-BZdCf6XI.js";/* empty css                            */import"./Image-tVagy99b.js";import"./motion-Djta419p.js";import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";/* empty css                              */import"./index-BxmsGmlx.js";import"./index-Bs37d09a.js";import"./index-D9BCMdC1.js";import"./index-BEGV7LFS.js";import"./index-0utPunYv.js";import"./index-CC_leflP.js";import"./Combination-IvoEgOJT.js";import"./index-BISih6-y.js";import"./index-CcgnftcY.js";import"./index-nCODJAFu.js";import"./index-DenE5TFG.js";import"./index-Ccgn4ofI.js";import"./Field-BM8ZWItO.js";import"./WarningIcon-D-LJY-sK.js";const F={title:"Forms/Select",component:u},l={args:{borderRadius:"md",onValueChange:i=>{console.log("selected: ",i)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},t={args:{borderRadius:"md",onValueChange:i=>{console.log("selected: ",i)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs(n,{alignItems:"center",gap:"2",children:[e.jsx(a,{chainId:1}),e.jsx(o,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs(n,{alignItems:"center",gap:"2",children:[e.jsx(a,{chainId:137}),e.jsx(o,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs(n,{alignItems:"center",gap:"2",children:[e.jsx(a,{chainId:56}),e.jsx(o,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs(n,{alignItems:"center",gap:"2",children:[e.jsx(a,{chainId:43114}),e.jsx(o,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs(n,{alignItems:"center",gap:"2",children:[e.jsx(a,{chainId:42161}),e.jsx(o,{children:"Arbitrum"})]}),value:"arbitrum"}]}};var r,s,m;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    borderRadius: 'md',
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
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    borderRadius: 'md',
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
    label: 'Networks',
    labelLocation: 'top',
    disabled: false,
    defaultValue: 'mainnet',
    options: [{
      label: <Box alignItems="center" gap="2">
            <NetworkImage chainId={1} />
            <Text>Mainnet</Text>
          </Box>,
      value: 'mainnet'
    }, {
      label: <Box alignItems="center" gap="2">
            <NetworkImage chainId={137} />
            <Text>Polygon</Text>
          </Box>,
      value: 'polygon'
    }, {
      label: <Box alignItems="center" gap="2">
            <NetworkImage chainId={56} />
            <Text>BNB Smart Chain</Text>
          </Box>,
      value: 'bsc'
    }, {
      label: <Box alignItems="center" gap="2">
            <NetworkImage chainId={43114} />
            <Text>Avalanche</Text>
          </Box>,
      value: 'avalanche'
    }, {
      label: <Box alignItems="center" gap="2">
            <NetworkImage chainId={42161} />
            <Text>Arbitrum</Text>
          </Box>,
      value: 'arbitrum'
    }]
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const q=["Default","Custom"];export{t as Custom,l as Default,q as __namedExportsOrder,F as default};
