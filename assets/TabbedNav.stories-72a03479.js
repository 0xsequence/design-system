import{a as c,j as e}from"./jsx-runtime-a9c13c85.js";import{r as b}from"./index-d8ade8ea.js";import{B as g}from"./Badge-05c91c91.js";import{B as o}from"./Box-63eb24b2.js";import{T as f}from"./Text-cc9cad53.js";import{R as v,D as y}from"./WarningIcon-75993e4b.js";import{T as u}from"./TabbedNav-0da048a9.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./Button-f5fc896c.js";const P={title:"Components/TabbedNav",component:u},n=r=>new Promise(l=>setTimeout(l,r*1e3)),h=r=>{const[l,m]=b.useState("wallet"),p=t=>{m(t)};return c(o,{flexDirection:"column",gap:"4",children:[e(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e(u,{...r,onTabChange:t=>p(t)})}),e(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e(f,{variant:"normal",color:"text100",children:l})})]})},a={render:h,args:{defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:c(o,{gap:"1",children:["History",e(g,{value:"3"})]}),leftIcon:v,value:"history",onLoad:async()=>(console.log("processing..."),await n(1),!0)},{label:"Contacts (Fails to load)",leftIcon:y,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await n(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}]}};var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,P as default};
//# sourceMappingURL=TabbedNav.stories-72a03479.js.map
