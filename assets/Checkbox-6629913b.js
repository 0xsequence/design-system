import{j as b}from"./jsx-runtime-69eee039.js";import{b as j,$ as P,a as g,_ as x}from"./index-7928010f.js";import{r as a}from"./index-7c191284.js";import{a as I,c as _}from"./index-14f6abe2.js";import{$ as S}from"./index-555f5aa0.js";import{$ as z}from"./index-68f53824.js";import{$ as L}from"./index-73913900.js";import{F as D}from"./Field-fe8d85f8.js";import{l as M}from"./WarningIcon-70ed10e0.js";import"./atoms-27ff9aca.js";import{c as q}from"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";const V="Checkbox",[B,de]=j(V),[F,O]=B(V),A=a.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:c,checked:s,defaultChecked:r,required:f,disabled:d,value:l="on",onCheckedChange:v,...k}=e,[o,$]=a.useState(null),R=P(i,n=>$(n)),y=a.useRef(!1),C=o?!!o.closest("form"):!0,[p=!1,h]=I({prop:s,defaultProp:r,onChange:v}),N=a.useRef(p);return a.useEffect(()=>{const n=o==null?void 0:o.form;if(n){const m=()=>h(N.current);return n.addEventListener("reset",m),()=>n.removeEventListener("reset",m)}},[o,h]),a.createElement(F,{scope:t,state:p,disabled:d},a.createElement(g.button,x({type:"button",role:"checkbox","aria-checked":u(p)?"mixed":p,"aria-required":f,"data-state":w(p),"data-disabled":d?"":void 0,disabled:d,value:l},k,{ref:R,onKeyDown:_(e.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:_(e.onClick,n=>{h(m=>u(m)?!0:!m),C&&(y.current=n.isPropagationStopped(),y.current||n.stopPropagation())})})),C&&a.createElement(T,{control:o,bubbles:!y.current,name:c,value:l,checked:p,required:f,disabled:d,style:{transform:"translateX(-100%)"}}))}),K="CheckboxIndicator",H=a.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:c,...s}=e,r=O(K,t);return a.createElement(L,{present:c||u(r.state)||r.state===!0},a.createElement(g.span,x({"data-state":w(r.state),"data-disabled":r.disabled?"":void 0},s,{ref:i,style:{pointerEvents:"none",...e.style}})))}),T=e=>{const{control:i,checked:t,bubbles:c=!0,...s}=e,r=a.useRef(null),f=S(t),d=z(i);return a.useEffect(()=>{const l=r.current,v=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(v,"checked").set;if(f!==t&&o){const $=new Event("click",{bubbles:c});l.indeterminate=u(t),o.call(l,u(t)?!1:t),l.dispatchEvent($)}},[f,t,c]),a.createElement("input",x({type:"checkbox","aria-hidden":!0,defaultChecked:u(t)?!1:t},s,{tabIndex:-1,ref:r,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function u(e){return e==="indeterminate"}function w(e){return u(e)?"indeterminate":e?"checked":"unchecked"}const X=A,G=H;var J=q({defaultClassName:"_1c9x66f1 fyvr11a8 fyvr11ak fyvr11aw fyvr11b8 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr12jb fyvr12c5 fyvr11xt fyvr124z fyvr12mn fyvr12fh fyvr1215 fyvr128b fyvr11h0 fyvr11ko fyvr11jg fyvr12ut fyvr12ur fyvr12uj fyvr12tz fyvr12tv",variantClassNames:{size:{sm:"_1c9x66f2",lg:"_1c9x66f3"}},defaultVariants:{},compoundVariants:[]}),Q=q({defaultClassName:"_1c9x66f5 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr12rh fyvr11rt",variantClassNames:{size:{sm:"_1c9x66f6",lg:"_1c9x66f7"}},defaultVariants:{},compoundVariants:[]});const U=({size:e="sm"})=>b.jsx(G,{className:Q({size:e}),children:b.jsx(M,{size:e})}),E=a.forwardRef((e,i)=>{const{disabled:t=!1,id:c,name:s,label:r="",labelLocation:f="left",size:d="sm",...l}=e;return b.jsx(D,{disabled:t,display:"flex",id:c??s,label:r,labelLocation:f,whiteSpace:"nowrap",children:b.jsx(X,{className:J({size:d}),disabled:t,id:c??s,name:s,ref:i,...l,children:b.jsx(U,{})})})});try{E.displayName="Checkbox",E.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{E as C};
//# sourceMappingURL=Checkbox-6629913b.js.map
