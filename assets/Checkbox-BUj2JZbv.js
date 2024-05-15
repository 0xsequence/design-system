import{j as b}from"./jsx-runtime-CexXSJP5.js";import{a as V,$ as N,c as E,d as x}from"./index-CeXBLvNc.js";import{r}from"./index-BP8_t0zE.js";import{a as P,c as _}from"./index-C-LszQ6e.js";import{$ as I}from"./index-CF1bRcOk.js";import{$ as S}from"./index-pC7lLcKS.js";import{$ as z}from"./index-CnD1ylEj.js";import{F as L}from"./Field-CEph7VCa.js";import{i as D}from"./WarningIcon-B1ZRyEXn.js";import"./helpers.css.ts.vanilla-CPoYynXN.js";/* empty css                            */import{c as M}from"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";const q="Checkbox",[B,ie]=V(q),[F,O]=B(q),A=r.forwardRef((e,l)=>{const{__scopeCheckbox:t,name:c,checked:s,defaultChecked:a,required:f,disabled:d,value:i="on",onCheckedChange:v,...k}=e,[n,$]=r.useState(null),R=N(l,o=>$(o)),y=r.useRef(!1),C=n?!!n.closest("form"):!0,[p=!1,h]=P({prop:s,defaultProp:a,onChange:v}),j=r.useRef(p);return r.useEffect(()=>{const o=n==null?void 0:n.form;if(o){const m=()=>h(j.current);return o.addEventListener("reset",m),()=>o.removeEventListener("reset",m)}},[n,h]),r.createElement(F,{scope:t,state:p,disabled:d},r.createElement(E.button,x({type:"button",role:"checkbox","aria-checked":u(p)?"mixed":p,"aria-required":f,"data-state":w(p),"data-disabled":d?"":void 0,disabled:d,value:i},k,{ref:R,onKeyDown:_(e.onKeyDown,o=>{o.key==="Enter"&&o.preventDefault()}),onClick:_(e.onClick,o=>{h(m=>u(m)?!0:!m),C&&(y.current=o.isPropagationStopped(),y.current||o.stopPropagation())})})),C&&r.createElement(T,{control:n,bubbles:!y.current,name:c,value:i,checked:p,required:f,disabled:d,style:{transform:"translateX(-100%)"}}))}),K="CheckboxIndicator",H=r.forwardRef((e,l)=>{const{__scopeCheckbox:t,forceMount:c,...s}=e,a=O(K,t);return r.createElement(z,{present:c||u(a.state)||a.state===!0},r.createElement(E.span,x({"data-state":w(a.state),"data-disabled":a.disabled?"":void 0},s,{ref:l,style:{pointerEvents:"none",...e.style}})))}),T=e=>{const{control:l,checked:t,bubbles:c=!0,...s}=e,a=r.useRef(null),f=I(t),d=S(l);return r.useEffect(()=>{const i=a.current,v=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(v,"checked").set;if(f!==t&&n){const $=new Event("click",{bubbles:c});i.indeterminate=u(t),n.call(i,u(t)?!1:t),i.dispatchEvent($)}},[f,t,c]),r.createElement("input",x({type:"checkbox","aria-hidden":!0,defaultChecked:u(t)?!1:t},s,{tabIndex:-1,ref:a,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function u(e){return e==="indeterminate"}function w(e){return u(e)?"indeterminate":e?"checked":"unchecked"}const X=A,G=H;var J=M({defaultClassName:"_1c9x66f1 _1c9x66f0 fyvr11a8 fyvr11ak fyvr11aw fyvr11b8 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr12nd fyvr12g1 fyvr121d fyvr128p fyvr12nj fyvr12g7 fyvr121j fyvr128v fyvr11h0 fyvr11ko fyvr11jg fyvr11od fyvr12w1 fyvr12vz fyvr12vr fyvr12v7 fyvr12v3 _4efw240",variantClassNames:{size:{sm:"_1c9x66f2",lg:"_1c9x66f3"}},defaultVariants:{},compoundVariants:[]}),Q="_1c9x66f4 fyvr12s1 fyvr11h0 fyvr11ko fyvr11jg fyvr128 fyvr15o";const U=({size:e="sm"})=>b.jsx(G,{className:Q,children:b.jsx(D,{size:e==="lg"?"sm":"xs"})}),g=r.forwardRef((e,l)=>{const{disabled:t=!1,id:c,name:s,label:a="",labelLocation:f="left",size:d="sm",...i}=e;return b.jsx(L,{disabled:t,display:"flex",id:c??s,label:a,labelLocation:f,whiteSpace:"nowrap",children:b.jsx(X,{className:J({size:d}),disabled:t,id:c??s,name:s,ref:l,...i,children:b.jsx(U,{size:d})})})});try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{g as C};