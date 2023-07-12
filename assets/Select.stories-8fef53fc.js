import{j as e}from"./jsx-runtime-5c44f2f2.js";import{B as a}from"./Box-2976c0bf.js";import{T as t}from"./Text-ee7d813c.js";import{T as o}from"./TokenImage-1a605941.js";import{S as d}from"./Select-b723b5d6.js";import"./index-32f9f3e1.js";import"./atoms-8c839198.js";import"./typography-f274f330.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Image-7b35e6f4.js";import"./motion-4bf1f684.js";import"./index-6f43092a.js";import"./index-81ed4395.js";import"./index-b52b8797.js";import"./index-8f4e5a65.js";import"./index-7ba41556.js";import"./index-7b73788f.js";import"./Combination-35ba128e.js";import"./index-15d4be11.js";import"./index-ebcda687.js";import"./index-8354a9f7.js";import"./index-6a3890d8.js";import"./index-3d0a8b6c.js";import"./Field-7121152d.js";import"./WarningIcon-3f6f3ec5.js";const P={title:"Forms/Select",component:d},n={args:{borderRadius:"md",onValueChange:l=>{console.log("selected: ",l)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},s={args:{borderRadius:"md",onValueChange:l=>{console.log("selected: ",l)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(o,{src:"https://sequence.app/static/images/1.cb52a9be955ddf5eacbe.png"}),e.jsx(t,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(o,{src:"https://sequence.app/static/images/137.1c36e6b6953be3aacff4.png"}),e.jsx(t,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(o,{src:"https://sequence.app/static/images/56.ef53ab0cdafe86027deb.png"}),e.jsx(t,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(o,{src:"https://sequence.app/static/images/43114.9b2c1709ab950bf92deb.png"}),e.jsx(t,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs(a,{alignItems:"center",gap:"2",children:[e.jsx(o,{src:"https://sequence.app/static/images/42161.a74b6921ab2c28356575.png"}),e.jsx(t,{children:"Arbitrum"})]}),value:"gnosis"}]}};var i,p,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(p=n.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const F=["Default","Custom"];export{s as Custom,n as Default,F as __namedExportsOrder,P as default};
//# sourceMappingURL=Select.stories-8fef53fc.js.map
