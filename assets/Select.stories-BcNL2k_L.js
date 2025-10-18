import{j as e}from"./iframe-4jdeRta1.js";import{M as S}from"./Modal-DhTnQ-Gf.js";import{N as t}from"./NetworkImage-Cd4vIZNy.js";import{T as s}from"./Text-DZp5baOb.js";import{S as m}from"./Select-4cx1FNHz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-oprlvr7y.js";import"./index-Du8aI101.js";import"./index-DPmhm0QD.js";import"./index-CKEn7-ll.js";import"./index-BGtbfsCd.js";import"./index-CbmC5du2.js";import"./index-BSVC6t3j.js";import"./index-BmaIzK7v.js";import"./index-DQun6Vyh.js";import"./component-DWS1xVr0.js";import"./index-BuGF1HL0.js";import"./Combination-kno8-m_j.js";import"./index-DmOhWMz8.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./YoutubeIcon-CzVHBqrL.js";import"./classnames-CzI9s_aO.js";import"./SearchIcon-C82-TMiw.js";import"./IconButton-D7ddeTCO.js";import"./ButtonPreset-g3SsR6Z9.js";import"./Button-DFSpQNYd.js";import"./styles-Dnb-ama7.js";import"./Scroll-DsSfj1Bd.js";import"./proxy-aPoHd49G.js";import"./Image-DDqXYKbT.js";import"./index-l6xu4HSI.js";import"./index-1KCW_-RE.js";import"./index-D_eK1M6D.js";import"./index-Cpbi7xEm.js";import"./index-BEa5SOjr.js";const me={title:"Forms/Select",component:m},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},l={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:1}),e.jsx(s,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:137}),e.jsx(s,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:56}),e.jsx(s,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:43114}),e.jsx(s,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{chainId:42161}),e.jsx(s,{children:"Arbitrum"})]}),value:"arbitrum"}]}},r={args:{...o.args,options:Array.from({length:100},(a,c)=>({label:`Option ${c+1}`,value:`option-${c+1}`}))}},n={tags:["!autodocs"],render:a=>e.jsx(S,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{className:"w-full",...a})})}),args:o.args},i={args:{...r.args},render:a=>e.jsx(S,{children:e.jsx("div",{className:"p-4",children:e.jsx(m,{...a})})})};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onValueChange: value => {
      console.log('selected: ', value);
    },
    name: 'selectDemo',
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${i + 1}\`,
      value: \`option-\${i + 1}\`
    }))
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var N,j,M;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: args => {
    return <Modal>
        <div className="p-4">
          <Select className="w-full" {...args} />
        </div>
      </Modal>;
  },
  args: Default.args
}`,...(M=(j=n.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var T,I,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ce=["Default","Custom","TooManyOptions","WithinModal","TooManyOptionsWithModal"];export{l as Custom,o as Default,r as TooManyOptions,i as TooManyOptionsWithModal,n as WithinModal,ce as __namedExportsOrder,me as default};
