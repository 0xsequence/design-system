import{j as e}from"./iframe-CK7chGrn.js";import{M as O}from"./Modal-BAaOyNdl.js";import{N as t}from"./NetworkImage-aKTQm-aa.js";import{T as l}from"./Text-BnVXOSII.js";import{S as c}from"./Select-0Ueni7F7.js";import"./index-C9-LZ-Gh.js";import"./index-Z66RKodH.js";import"./index-DHdfMIoK.js";import"./index-CDuvoDPp.js";import"./index-BILj1UYP.js";import"./index-CvgJxzRW.js";import"./index-CMSBc2tk.js";import"./index-Cl8MXT5H.js";import"./index-DPoeEHGp.js";import"./index-CHMnxVqt.js";import"./index-DT4C3Unq.js";import"./Combination-CJTxDYF3.js";import"./index-2tJgLkbr.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./IconButton-DAkyS-Jf.js";import"./Button-DTerBTk0.js";import"./classnames-DQzbijWx.js";import"./Scroll-CecFw_KS.js";import"./YoutubeIcon-DyElyhvz.js";import"./proxy-ZIVey8Ng.js";import"./Image-BefGqkb-.js";import"./index-C0dM7zi-.js";import"./floating-ui.react-dom-CTbDagt6.js";import"./index-DLHz47rr.js";import"./index-DKQUMJ_M.js";import"./Field-CRW2f5Uf.js";const se={title:"Forms/Select",component:c},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},n={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(l,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(l,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(l,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(l,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(l,{children:"Arbitrum"})]}),value:"arbitrum"}]}},s={args:{...o.args,options:Array.from({length:100},(a,m)=>({label:`Option ${m+1}`,value:`option-${m+1}`}))}},r={tags:["!autodocs"],render:a=>e.jsx(O,{children:e.jsx("div",{className:"p-4",children:e.jsx(c,{className:"w-full",...a})})}),args:o.args},i={args:{...s.args},render:a=>e.jsx(O,{children:e.jsx("div",{className:"p-4",children:e.jsx(c,{...a})})})};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`option-\${i + 1}\`
    }))
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,j,T;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    return <Modal>
        <div className="p-4">
          <Select className="w-full" {...args} />
        </div>
      </Modal>;
  },
  args: Default.args
}`,...(T=(j=r.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var M,S,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...TooManyOptions.args
  },
  render: args => {
    return <Modal>
        <div className="p-4">
          <Select {...args} />
        </div>
      </Modal>;
  }
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const ne=["Default","Custom","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{n as Custom,o as Default,s as TooManyOptions,i as TooManyOptionsWithModal,r as WithinModal,ne as __namedExportsOrder,se as default};
