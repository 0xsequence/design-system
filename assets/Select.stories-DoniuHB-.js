import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as O}from"./Modal-DMTCMCQH.js";import{N as t}from"./NetworkImage-CN-3BrzK.js";import{T as l}from"./Text-QMiqgxpG.js";import{S as c}from"./Select-DsuIjWVu.js";import"./index-CFahbR6w.js";import"./index-CwKqVHPA.js";import"./index-B2_zDxcN.js";import"./index-8B1X6Yi1.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-I99my8Lv.js";import"./index-58Ynm-YQ.js";import"./Combination-UMvBg7LK.js";import"./index-B02fpc2Q.js";import"./index-dqOyKpGN.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./IconButton-CIaBO2lV.js";import"./Button-gms0tifL.js";import"./classnames-DQzbijWx.js";import"./Scroll-D5dPdDPH.js";import"./ThemeProvider-hJ7w0fTq.js";import"./color-BQU-ub23.js";import"./YoutubeIcon-C3fBr_q2.js";import"./proxy-BOwv2kQK.js";import"./Image-DyDdfPPk.js";import"./index-BvHc6LbR.js";import"./index-BcsFqELm.js";import"./index-QCEmxFZi.js";import"./index-BYZlhqyu.js";import"./index-BLmjmuzb.js";import"./Field-CMe64AkL.js";const ne={title:"Forms/Select",component:c},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},n={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(l,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(l,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(l,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(l,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(l,{children:"Arbitrum"})]}),value:"arbitrum"}]}},s={args:{...o.args,options:Array.from({length:100},(a,m)=>({label:`Option ${m+1}`,value:`option-${m+1}`}))}},r={tags:["!autodocs"],render:a=>e.jsx(O,{children:e.jsx("div",{className:"p-4",children:e.jsx(c,{className:"w-full",...a})})}),args:o.args},i={args:{...s.args},render:a=>e.jsx(O,{children:e.jsx("div",{className:"p-4",children:e.jsx(c,{...a})})})};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const re=["Default","Custom","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{n as Custom,o as Default,s as TooManyOptions,i as TooManyOptionsWithModal,r as WithinModal,re as __namedExportsOrder,ne as default};
