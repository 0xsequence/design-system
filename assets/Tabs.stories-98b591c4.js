import{j as i}from"./jsx-runtime-69eee039.js";import{C as G}from"./Card-3644cb4b.js";import{T as R}from"./Text-23aecd3e.js";import{b as L,a as m,_ as u}from"./index-53a40ded.js";import{r as l}from"./index-7c191284.js";import{a as k,c as _}from"./index-006d63ff.js";import{$ as M,a as B,b as z}from"./index-6d114dbe.js";import{$ as H}from"./index-3baa516f.js";import{$ as K}from"./index-df712b54.js";import{$ as W}from"./index-8f163998.js";import{B as X}from"./Box-64e6f390.js";import"./atoms-27ff9aca.js";import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-98964cd2.js";import"./index-ecbee218.js";import"./index-cefa1e4b.js";const A="Tabs",[J,Ne]=L(A,[M]),w=M(),[Q,T]=J(A),U=l.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,onValueChange:s,defaultValue:o,orientation:r="horizontal",dir:c,activationMode:p="automatic",...v}=e,b=K(c),[d,f]=k({prop:a,onChange:s,defaultProp:o});return l.createElement(Q,{scope:n,baseId:W(),value:d,onValueChange:f,orientation:r,dir:b,activationMode:p},l.createElement(m.div,u({dir:b,"data-orientation":r},v,{ref:t})))}),Y="TabsList",P=l.forwardRef((e,t)=>{const{__scopeTabs:n,loop:a=!0,...s}=e,o=T(Y,n),r=w(n);return l.createElement(B,u({asChild:!0},r,{orientation:o.orientation,dir:o.dir,loop:a}),l.createElement(m.div,u({role:"tablist","aria-orientation":o.orientation},s,{ref:t})))}),Z="TabsTrigger",S=l.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,disabled:s=!1,...o}=e,r=T(Z,n),c=w(n),p=D(r.baseId,a),v=F(r.baseId,a),b=a===r.value;return l.createElement(z,u({asChild:!0},c,{focusable:!s,active:b}),l.createElement(m.button,u({type:"button",role:"tab","aria-selected":b,"aria-controls":v,"data-state":b?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p},o,{ref:t,onMouseDown:_(e.onMouseDown,d=>{!s&&d.button===0&&d.ctrlKey===!1?r.onValueChange(a):d.preventDefault()}),onKeyDown:_(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&r.onValueChange(a)}),onFocus:_(e.onFocus,()=>{const d=r.activationMode!=="manual";!b&&!s&&d&&r.onValueChange(a)})})))}),ee="TabsContent",q=l.forwardRef((e,t)=>{const{__scopeTabs:n,value:a,forceMount:s,children:o,...r}=e,c=T(ee,n),p=D(c.baseId,a),v=F(c.baseId,a),b=a===c.value,d=l.useRef(b);return l.useEffect(()=>{const f=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(f)},[]),l.createElement(H,{present:s||b},({present:f})=>l.createElement(m.div,u({"data-state":b?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":p,hidden:!f,id:v,tabIndex:0},r,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),f&&o))});function D(e,t){return`${e}-trigger-${t}`}function F(e,t){return`${e}-content-${t}`}const O=U,te=P,ae=S,oe=q;var re="fyvr12vh fyvr12vb",ne="_10c8o0n1 fyvr11d4 fyvr11ds fyvr11bs fyvr11cg fyvr11h0 fyvr11hw fyvr128 fyvr11pt fyvr14o",se="_10c8o0n5 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr11ho fyvr1ko fyvr1oo fyvr14c fyvr11rb fyvr12uz",ce="_10c8o0n3 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr12vh fyvr12vb fyvr128 fyvr15o fyvr12tz fyvr11hw fyvr11ob fyvr11n2 fyvr12rb";const h=e=>{const{tabs:t,onValueChange:n,...a}=e,[s,o]=l.useState(a.defaultValue);if(!t.length)return null;const r=c=>{o(c),n==null||n(c)};return i.jsxs(O,{onValueChange:r,...a,children:[i.jsx(g,{tabs:t,value:s}),t.map(c=>i.jsx(oe,{className:re,value:c.value,children:c.content},c.value))]})},g=e=>{const{tabs:t,value:n}=e;if(!t.length)return null;const a=100/t.length,s=t.findIndex(o=>o.value===n);return i.jsxs(te,{className:ne,style:{outline:void 0},children:[i.jsx(X,{display:"flex",position:"absolute",inset:"2",height:"8",children:i.jsx("div",{className:se,style:{width:`${a}%`,transform:`translateX(${s*100}%)`}})}),t.map(o=>i.jsx(ae,{className:ce,value:o.value,children:i.jsx(R,{variant:"normal",fontWeight:"bold",children:o.label})},o.value))]})},x=O,C=P,I=S,N=q;try{h.displayName="Tabs",h.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"(TabItemProps & { content: ReactNode; })[]"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{g.displayName="TabsHeader",g.__docgenInfo={description:"",displayName:"TabsHeader",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabItemProps[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | undefined"}}}}}catch{}try{x.displayName="TabsRoot",x.__docgenInfo={description:"",displayName:"TabsRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{C.displayName="TabsList",C.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="TabsTrigger",I.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="TabsContent",N.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={title:"Components/Tabs",component:h},y=({children:e})=>i.jsx(G,{marginTop:"4",children:i.jsx(R,{variant:"normal",color:"text100",children:e})}),$={args:{defaultValue:"coins",tabs:[{value:"coins",label:"Coins",content:i.jsx(y,{children:"Coins"})},{value:"collectibles",label:"Collectibles",content:i.jsx(y,{children:"Collectibles"})},{value:"other",label:"Other",content:i.jsx(y,{children:"Other"})}]}};var V,E,j;$.parameters={...$.parameters,docs:{...(V=$.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 'coins',
    tabs: [{
      value: 'coins',
      label: 'Coins',
      content: <Content>Coins</Content>
    }, {
      value: 'collectibles',
      label: 'Collectibles',
      content: <Content>Collectibles</Content>
    }, {
      value: 'other',
      label: 'Other',
      content: <Content>Other</Content>
    }]
  }
}`,...(j=(E=$.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const Ee=["Default"];export{$ as Default,Ee as __namedExportsOrder,Ve as default};
//# sourceMappingURL=Tabs.stories-98b591c4.js.map
