import{j as e}from"./jsx-runtime-5c44f2f2.js";import{r as p}from"./index-32f9f3e1.js";import{B as b}from"./Badge-848b1a99.js";import{B as o}from"./Box-f57a83a8.js";import{T as g}from"./Text-370b9e32.js";import{c as f,d as v}from"./WarningIcon-3c982767.js";import{T as c}from"./TabbedNav-3f02e5f1.js";import"./atoms-8c839198.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";import"./Button-c8e55548.js";const W={title:"Components/TabbedNav",component:c},n=r=>new Promise(l=>setTimeout(l,r*1e3)),x=r=>{const[l,u]=p.useState("wallet"),m=t=>{u(t)};return e.jsxs(o,{flexDirection:"column",gap:"4",children:[e.jsx(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e.jsx(c,{...r,onTabChange:t=>m(t)})}),e.jsx(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e.jsx(g,{variant:"normal",color:"text100",children:l})})]})},a={render:x,args:{defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:e.jsxs(o,{gap:"1",children:["History",e.jsx(b,{value:"3"})]}),leftIcon:f,value:"history",onLoad:async()=>(console.log("processing..."),await n(1),!0)},{label:"Contacts (Fails to load)",leftIcon:v,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await n(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}]}};var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    size: 'sm',
    tabs: [{
      label: 'Wallet',
      value: 'wallet',
      onLoad: () => {
        return true;
      }
    }, {
      label: 'Simple',
      value: 'simple'
    },
    // no onClick
    {
      label: 'Another Tab',
      value: 'another',
      onLoad: () => {
        return true;
      }
    }, {
      label: <Box gap="1">
            History
            <Badge value="3" />
          </Box>,
      leftIcon: TransactionIcon,
      value: 'history',
      onLoad: async () => {
        console.log('processing...');
        await delay(1);
        return true;
      }
    }, {
      label: 'Contacts (Fails to load)',
      leftIcon: ProfileIcon,
      value: 'contacts',
      onLoad: async () => {
        console.log('expecting fail...');
        await delay(1);
        return false;
      }
    }, {
      label: 'Disabled',
      value: 'disabled',
      disabled: true
    }]
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,W as default};
//# sourceMappingURL=TabbedNav.stories-eb3f6dcc.js.map
