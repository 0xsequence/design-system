import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{B as a}from"./Box-CSVoV9_J.js";import{T as n}from"./Text-DvqEgTZb.js";import{T as t}from"./TokenImage-DYhhELLC.js";import{S as d}from"./Select-CKI3YJfD.js";import"./index-Cu9bd8lq.js";/* empty css                            */import"./atoms-Bkv7MA-K.js";import"./typography-BClcJN8w.js";/* empty css                              */import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./Image-idi_BteP.js";import"./motion-DWzcalHj.js";import"./index-BUipU-ak.js";import"./index-Ckls47V4.js";import"./index-BdmuMSao.js";import"./index-CpmPR2CU.js";import"./index-kf8sWm_p.js";import"./index-YuaQHXCO.js";import"./Combination-DJgGMDtU.js";import"./index-Dg3K3zqj.js";import"./index-tPEEydhP.js";import"./index-C_rCLuZS.js";import"./index-BtV2h-_m.js";import"./index-Ckou9O5b.js";import"./Field-l5LApfde.js";import"./WarningIcon-Bq5A6s__.js";const F={title:"Forms/Select",component:d},o={args:{borderRadius:"md",onValueChange:l=>{console.log("selected: ",l)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},s={args:{borderRadius:"md",onValueChange:l=>{console.log("selected: ",l)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(t,{src:"https://sequence.app/static/images/1.cb52a9be955ddf5eacbe.png"}),e.jsx(n,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(t,{src:"https://sequence.app/static/images/137.1c36e6b6953be3aacff4.png"}),e.jsx(n,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(t,{src:"https://sequence.app/static/images/56.ef53ab0cdafe86027deb.png"}),e.jsx(n,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(t,{src:"https://sequence.app/static/images/43114.9b2c1709ab950bf92deb.png"}),e.jsx(n,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(t,{src:"https://sequence.app/static/images/42161.a74b6921ab2c28356575.png"}),e.jsx(n,{children:"Arbitrum"})]}),value:"gnosis"}]}};var i,p,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(p=o.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <TokenImage src="https://sequence.app/static/images/1.cb52a9be955ddf5eacbe.png" />
            <Text>Mainnet</Text>
          </Box>,
      value: 'mainnet'
    }, {
      label: <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/137.1c36e6b6953be3aacff4.png" />
            <Text>Polygon</Text>
          </Box>,
      value: 'polygon'
    }, {
      label: <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/56.ef53ab0cdafe86027deb.png" />
            <Text>BNB Smart Chain</Text>
          </Box>,
      value: 'bsc'
    }, {
      label: <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/43114.9b2c1709ab950bf92deb.png" />
            <Text>Avalanche</Text>
          </Box>,
      value: 'avalanche'
    }, {
      label: <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/42161.a74b6921ab2c28356575.png" />
            <Text>Arbitrum</Text>
          </Box>,
      value: 'gnosis'
    }]
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const z=["Default","Custom"];export{s as Custom,o as Default,z as __namedExportsOrder,F as default};
