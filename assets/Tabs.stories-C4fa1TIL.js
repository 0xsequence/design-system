import{j as t}from"./jsx-runtime-CexXSJP5.js";import{C as B}from"./Card-D3ajx_Gi.js";import{T as E}from"./Text-y71BusdA.js";import{r as u}from"./index-BP8_t0zE.js";import{a as H,c as y}from"./index-Bs37d09a.js";import{c as K,P as b}from"./index-BEGV7LFS.js";import{c as $,R as W,I as z}from"./index-CgR5GlLn.js";import{P as X}from"./index-FuRlZgql.js";import{u as J}from"./index-0utPunYv.js";import{u as Q}from"./index-BISih6-y.js";import{B as U}from"./Box-CtdtY7xp.js";import"./helpers.css.ts.vanilla-BZdCf6XI.js";/* empty css                            */import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./typography-BClcJN8w.js";/* empty css                              */import"./index-BxmsGmlx.js";import"./index-D9BCMdC1.js";var T="Tabs",[Y,Ne]=K(T,[$]),q=$(),[Z,C]=Y(T),M=u.forwardRef((e,a)=>{const{__scopeTabs:s,value:r,onValueChange:i,defaultValue:o,orientation:n="horizontal",dir:l,activationMode:f="automatic",...v}=e,d=J(l),[c,p]=H({prop:r,onChange:i,defaultProp:o});return t.jsx(Z,{scope:s,baseId:Q(),value:c,onValueChange:p,orientation:n,dir:d,activationMode:f,children:t.jsx(b.div,{dir:d,"data-orientation":n,...v,ref:a})})});M.displayName=T;var D="TabsList",x=u.forwardRef((e,a)=>{const{__scopeTabs:s,loop:r=!0,...i}=e,o=C(D,s),n=q(s);return t.jsx(W,{asChild:!0,...n,orientation:o.orientation,dir:o.dir,loop:r,children:t.jsx(b.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:a})})});x.displayName=D;var F="TabsTrigger",I=u.forwardRef((e,a)=>{const{__scopeTabs:s,value:r,disabled:i=!1,...o}=e,n=C(F,s),l=q(s),f=L(n.baseId,r),v=G(n.baseId,r),d=r===n.value;return t.jsx(z,{asChild:!0,...l,focusable:!i,active:d,children:t.jsx(b.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":v,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:f,...o,ref:a,onMouseDown:y(e.onMouseDown,c=>{!i&&c.button===0&&c.ctrlKey===!1?n.onValueChange(r):c.preventDefault()}),onKeyDown:y(e.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&n.onValueChange(r)}),onFocus:y(e.onFocus,()=>{const c=n.activationMode!=="manual";!d&&!i&&c&&n.onValueChange(r)})})})});I.displayName=F;var k="TabsContent",N=u.forwardRef((e,a)=>{const{__scopeTabs:s,value:r,forceMount:i,children:o,...n}=e,l=C(k,s),f=L(l.baseId,r),v=G(l.baseId,r),d=r===l.value,c=u.useRef(d);return u.useEffect(()=>{const p=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(p)},[]),t.jsx(X,{present:i||d,children:({present:p})=>t.jsx(b.div,{"data-state":d?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":f,hidden:!p,id:v,tabIndex:0,...n,ref:a,style:{...e.style,animationDuration:c.current?"0s":void 0},children:p&&o})})});N.displayName=k;function L(e,a){return`${e}-trigger-${a}`}function G(e,a){return`${e}-content-${a}`}var O=M,ee=x,te=I,ae=N,re="_10c8o0n1 _10c8o0n0 fyvr11hc fyvr11i0 fyvr11g0 fyvr11go fyvr11l8 fyvr11m4 fyvr12g fyvr11ur fyvr14w",oe="_10c8o0n3 _10c8o0n2 fyvr11h8 fyvr11hw fyvr11fw fyvr11gk fyvr12ox fyvr12or fyvr12g fyvr164 fyvr12nf fyvr11m4 fyvr11sl fyvr11rc fyvr12kf",ne="_10c8o0n5 _10c8o0n4 fyvr11h8 fyvr11hw fyvr11fw fyvr11gk fyvr11lw fyvr1m0 fyvr1qg fyvr14k fyvr11w3 fyvr12of",se="_10c8o0n6 fyvr12ox fyvr12or";const g=e=>{const{tabs:a,onValueChange:s,...r}=e,[i,o]=u.useState(r.defaultValue);if(!a.length)return null;const n=l=>{o(l),s==null||s(l)};return t.jsxs(O,{onValueChange:n,...r,children:[t.jsx(h,{tabs:a,value:i}),a.map(l=>t.jsx(ae,{className:se,value:l.value,children:l.content},l.value))]})},h=e=>{const{tabs:a,value:s}=e;if(!a.length)return null;const r=100/a.length,i=a.findIndex(o=>o.value===s);return t.jsxs(ee,{className:re,style:{outline:void 0},children:[t.jsx(U,{display:"flex",position:"absolute",inset:"2",height:"8",children:t.jsx("div",{className:ne,style:{width:`${r}%`,transform:`translateX(${i*100}%)`}})}),a.map(o=>t.jsx(te,{className:oe,value:o.value,children:t.jsx(E,{variant:"normal",fontWeight:"bold",children:o.label})},o.value))]})},j=O,V=x,R=I,w=N;try{g.displayName="Tabs",g.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"(TabItemProps & { content: ReactNode; })[]"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="TabsHeader",h.__docgenInfo={description:"",displayName:"TabsHeader",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabItemProps[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | undefined"}}}}}catch{}try{j.displayName="TabsRoot",j.__docgenInfo={description:"",displayName:"TabsRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{V.displayName="TabsList",V.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{R.displayName="TabsTrigger",R.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{w.displayName="TabsContent",w.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const je={title:"Components/Tabs",component:g},_=({children:e})=>t.jsx(B,{marginTop:"4",children:t.jsx(E,{variant:"normal",color:"text100",children:e})}),m={args:{defaultValue:"coins",tabs:[{value:"coins",label:"Coins",content:t.jsx(_,{children:"Coins"})},{value:"collectibles",label:"Collectibles",content:t.jsx(_,{children:"Collectibles"})},{value:"other",label:"Other",content:t.jsx(_,{children:"Other"})}]}};var P,S,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Ve=["Default"];export{m as Default,Ve as __namedExportsOrder,je as default};