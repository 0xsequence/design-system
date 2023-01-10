import{a as i,j as e}from"./jsx-runtime-a9c13c85.js";import{r as m}from"./index-d8ade8ea.js";import{B as p}from"./Badge-e1afcc96.js";import{B as a}from"./Box-48c74dc7.js";import{T as b}from"./Text-590e8548.js";import"./atoms.css-1d735476.js";/* empty css                              */import{U as g,F as f}from"./WarningIcon-3632b2bf.js";import{T as d}from"./TabbedNav-0a681274.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./Button-1ee84e56.js";const j={title:"Components/TabbedNav",component:d},n=o=>new Promise(r=>setTimeout(r,o*1e3)),v=o=>{const[r,c]=m.useState("wallet"),u=l=>{c(l)};return i(a,{flexDirection:"column",gap:"4",children:[e(a,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e(d,{...o,onTabChange:l=>u(l)})}),e(a,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e(b,{variant:"normal",color:"text100",children:r})})]})},t={render:v,args:{defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:i(a,{gap:"1",children:["History",e(p,{value:"3"})]}),leftIcon:g,value:"history",onLoad:async()=>(console.log("processing..."),await n(1),!0)},{label:"Contacts (Fails to load)",leftIcon:f,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await n(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}]}};var s;t.parameters={...t.parameters,storySource:{source:`{
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
}`,...(s=t.parameters)==null?void 0:s.storySource}};const F=["Default"];export{t as Default,F as __namedExportsOrder,j as default};
//# sourceMappingURL=TabbedNav.stories-ce7fad26.js.map
