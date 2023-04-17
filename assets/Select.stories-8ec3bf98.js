import{a,j as e}from"./jsx-runtime-a9c13c85.js";import{B as t}from"./Box-bf594931.js";import{T as o}from"./Text-9dc723e0.js";import{T as n}from"./TokenImage-e95c04f1.js";import{S as g}from"./Select-a669cbb8.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-c8fed878.js";import"./typography-f274f330.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Image-de0e247f.js";import"./motion-bd85eac6.js";import"./index.module-dbe82d0b.js";import"./extends-98964cd2.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-25c2402a.js";import"./index.module-1e59790f.js";import"./index.module-67c2286f.js";import"./Combination-b249c846.js";import"./index.module-cc7c4bf6.js";import"./index.module-ff50cecd.js";import"./index.module-f6547125.js";import"./index.module-e6a6661a.js";import"./index.module-3cdd84d6.js";import"./index-807b81f6.js";import"./Field-900ad967.js";import"./WarningIcon-90ab5d0b.js";const H={title:"Forms/Select",component:g},l={args:{borderRadius:"md",onValueChange:i=>{console.log("selected: ",i)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},s={args:{borderRadius:"md",onValueChange:i=>{console.log("selected: ",i)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:a(t,{alignItems:"center",gap:"2",children:[e(n,{src:"https://sequence.app/static/images/1.cb52a9be955ddf5eacbe.png"}),e(o,{children:"Mainnet"})]}),value:"mainnet"},{label:a(t,{alignItems:"center",gap:"2",children:[e(n,{src:"https://sequence.app/static/images/137.1c36e6b6953be3aacff4.png"}),e(o,{children:"Polygon"})]}),value:"polygon"},{label:a(t,{alignItems:"center",gap:"2",children:[e(n,{src:"https://sequence.app/static/images/56.ef53ab0cdafe86027deb.png"}),e(o,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:a(t,{alignItems:"center",gap:"2",children:[e(n,{src:"https://sequence.app/static/images/43114.9b2c1709ab950bf92deb.png"}),e(o,{children:"Avalanche"})]}),value:"avalanche"},{label:a(t,{alignItems:"center",gap:"2",children:[e(n,{src:"https://sequence.app/static/images/42161.a74b6921ab2c28356575.png"}),e(o,{children:"Arbitrum"})]}),value:"gnosis"}]}};var p,r,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(r=l.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,b,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(b=s.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const J=["Default","Custom"];export{s as Custom,l as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Select.stories-8ec3bf98.js.map
