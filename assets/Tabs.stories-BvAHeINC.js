import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{C as H}from"./Card-DlZiBGQQ.js";import{T as E}from"./Text-3Q8ouUOS.js";import{r as p}from"./index-D1TSixAU.js";import{a as K,c as v}from"./index-BWtkTp-R.js";import{c as z,P as h}from"./index-CJCvYUNY.js";import{c as $,R as B,I as W}from"./index-7x9DFM8F.js";import{P as X}from"./index-DogTl_U1.js";import{u as J}from"./index-Bac_1hpE.js";import{u as Q}from"./index-VR-_z_Zs.js";import"./index-C9rmetsa.js";import"./index-DEvaI7vP.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./classnames-D6E8UiG_.js";import"./index-BNXY6jv6.js";import"./index-wgz3LQUQ.js";import"./index-Wpiz0KKn.js";var y="Tabs",[U,Te]=z(y,[$]),M=$(),[Y,C]=U(y),q=p.forwardRef((e,a)=>{const{__scopeTabs:i,value:n,onValueChange:r,defaultValue:o,orientation:s="horizontal",dir:u,activationMode:l="automatic",...b}=e,d=J(u),[c,m]=K({prop:n,onChange:r,defaultProp:o});return t.jsx(Y,{scope:i,baseId:Q(),value:c,onValueChange:m,orientation:s,dir:d,activationMode:l,children:t.jsx(h.div,{dir:d,"data-orientation":s,...b,ref:a})})});q.displayName=y;var D="TabsList",x=p.forwardRef((e,a)=>{const{__scopeTabs:i,loop:n=!0,...r}=e,o=C(D,i),s=M(i);return t.jsx(B,{asChild:!0,...s,orientation:o.orientation,dir:o.dir,loop:n,children:t.jsx(h.div,{role:"tablist","aria-orientation":o.orientation,...r,ref:a})})});x.displayName=D;var F="TabsTrigger",N=p.forwardRef((e,a)=>{const{__scopeTabs:i,value:n,disabled:r=!1,...o}=e,s=C(F,i),u=M(i),l=G(s.baseId,n),b=O(s.baseId,n),d=n===s.value;return t.jsx(W,{asChild:!0,...u,focusable:!r,active:d,children:t.jsx(h.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":b,"data-state":d?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:l,...o,ref:a,onMouseDown:v(e.onMouseDown,c=>{!r&&c.button===0&&c.ctrlKey===!1?s.onValueChange(n):c.preventDefault()}),onKeyDown:v(e.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&s.onValueChange(n)}),onFocus:v(e.onFocus,()=>{const c=s.activationMode!=="manual";!d&&!r&&c&&s.onValueChange(n)})})})});N.displayName=F;var L="TabsContent",I=p.forwardRef((e,a)=>{const{__scopeTabs:i,value:n,forceMount:r,children:o,...s}=e,u=C(L,i),l=G(u.baseId,n),b=O(u.baseId,n),d=n===u.value,c=p.useRef(d);return p.useEffect(()=>{const m=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(m)},[]),t.jsx(X,{present:r||d,children:({present:m})=>t.jsx(h.div,{"data-state":d?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":l,hidden:!m,id:b,tabIndex:0,...s,ref:a,style:{...e.style,animationDuration:c.current?"0s":void 0},children:m&&o})})});I.displayName=L;function G(e,a){return`${e}-trigger-${a}`}function O(e,a){return`${e}-content-${a}`}var k=q,Z=x,ee=N,te=I;const g=e=>{const{tabs:a,onValueChange:i,className:n,...r}=e,[o,s]=p.useState(r.defaultValue);if(!a.length)return null;const u=l=>{s(l),i==null||i(l)};return t.jsxs(k,{onValueChange:u,className:n,...r,children:[t.jsx(T,{tabs:a,value:o}),a.map(l=>t.jsx(te,{className:"outline-hidden",value:l.value,children:l.content},l.value))]})},T=e=>{const{tabs:a,value:i}=e;if(!a.length)return null;const n=100/a.length,r=a.findIndex(o=>o.value===i);return t.jsxs(Z,{className:"px-2 flex relative w-full rounded-xl bg-background-secondary h-12 outline-hidden ring-inset focus-within:[&:has(:focus-visible)]:ring-2 focus-within:ring-border-focus",style:{outline:void 0},children:[t.jsx("div",{className:"flex absolute inset-2 h-8",children:t.jsx("div",{className:"absolute rounded-lg top-0 left-0 h-8 bg-button-glass pointer-events-none transition-transform duration-200 ease-out",style:{width:`${n}%`,transform:`translateX(${r*100}%)`}})}),a.map(o=>t.jsx(ee,{className:"w-full h-full rounded-lg cursor-pointer relative bg-transparent select-none text-secondary outline-hidden appearance-none border-none z-2 data-[state=active]:text-primary disabled:opacity-50",value:o.value,children:t.jsx(E,{variant:"normal",fontWeight:"bold",className:"block",children:o.label})},o.value))]})},j=k,V=x,R=N,P=I;try{g.displayName="Tabs",g.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"(TabItemProps & { content: ReactNode; })[]"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="TabsHeader",T.__docgenInfo={description:"",displayName:"TabsHeader",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabItemProps[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | undefined"}}}}}catch{}try{j.displayName="TabsRoot",j.__docgenInfo={description:"",displayName:"TabsRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{V.displayName="TabsList",V.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{R.displayName="TabsTrigger",R.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="TabsContent",P.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"Components/Tabs",component:g},_=({children:e})=>t.jsx(H,{className:"mt-4",children:t.jsx(E,{variant:"normal",color:"secondary",children:e})}),f={args:{defaultValue:"coins",tabs:[{value:"coins",label:"Coins",content:t.jsx(_,{children:"Coins content"})},{value:"collectibles",label:"Collectibles",content:t.jsx(_,{children:"Collectibles content"})},{value:"other",label:"Other",content:t.jsx(_,{children:"Other content"})}]}};var S,w,A;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    defaultValue: 'coins',
    tabs: [{
      value: 'coins',
      label: 'Coins',
      content: <Content>Coins content</Content>
    }, {
      value: 'collectibles',
      label: 'Collectibles',
      content: <Content>Collectibles content</Content>
    }, {
      value: 'other',
      label: 'Other',
      content: <Content>Other content</Content>
    }]
  }
}`,...(A=(w=f.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Ce=["Default"];export{f as Default,Ce as __namedExportsOrder,ye as default};
