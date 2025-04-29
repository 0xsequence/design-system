import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as l}from"./NetworkImage-BgQYECzl.js";import{T as t}from"./Text-BoSYkbIm.js";import{M as b}from"./Modal-Bztd5ANu.js";import{S as x}from"./Select-DMLXHi62.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-CFahbR6w.js";import"./classnames-BovuWA26.js";import"./Image-CHKvgobD.js";import"./proxy-CM0HYg4P.js";import"./index-B2_zDxcN.js";import"./index-CwKqVHPA.js";import"./index-8B1X6Yi1.js";import"./index-CHC4nfYS.js";import"./index-chp1rBSu.js";import"./index-I99my8Lv.js";import"./index-58Ynm-YQ.js";import"./Combination-UMvBg7LK.js";import"./index-B02fpc2Q.js";import"./index-dqOyKpGN.js";import"./YoutubeIcon-DD-bp7UA.js";import"./IconButton-Dnrw4IpY.js";import"./Button-B5zjpK5u.js";import"./Scroll-BSPgPk9N.js";import"./ThemeProvider-hJ7w0fTq.js";import"./color-BQU-ub23.js";import"./index-BvHc6LbR.js";import"./index-BcsFqELm.js";import"./index-QCEmxFZi.js";import"./index-BYZlhqyu.js";import"./index-BLmjmuzb.js";import"./Field-CKx0KBKO.js";const Y={title:"Forms/Select",component:x},o={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Select",description:"This is a description",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]}},s={args:{onValueChange:a=>{console.log("selected: ",a)},name:"selectDemo",label:"Networks",labelLocation:"top",disabled:!1,defaultValue:"mainnet",options:[{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:1}),e.jsx(t,{children:"Mainnet"})]}),value:"mainnet"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:137}),e.jsx(t,{children:"Polygon"})]}),value:"polygon"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:56}),e.jsx(t,{children:"BNB Smart Chain"})]}),value:"bsc"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:43114}),e.jsx(t,{children:"Avalanche"})]}),value:"avalanche"},{label:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(l,{chainId:42161}),e.jsx(t,{children:"Arbitrum"})]}),value:"arbitrum"}]}},i={tags:["!autodocs"],render:a=>e.jsx(b,{children:e.jsx("div",{className:"flex p-4 gap-2",children:e.jsx(x,{...a})})}),args:o.args};var n,r,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
