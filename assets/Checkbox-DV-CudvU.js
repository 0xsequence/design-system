import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{r as o}from"./index-D1TSixAU.js";import{u as S}from"./index-DEvaI7vP.js";import{c as z,P as N}from"./index-CJCvYUNY.js";import{a as L,c as E}from"./index-BWtkTp-R.js";import{u as D}from"./index-CpZK5cx3.js";import{u as M}from"./index-CdSWItFS.js";import{P as O}from"./index-DogTl_U1.js";import{c as A}from"./index-DKHC-OhD.js";import{F as B}from"./Field-CwJyPn-K.js";import{e as F}from"./WarningIcon-C89T6cr0.js";import{c as H}from"./classnames-D6E8UiG_.js";var R="Checkbox",[K,le]=z(R),[T,X]=K(R),q=o.forwardRef((e,u)=>{const{__scopeCheckbox:t,name:i,checked:c,defaultChecked:r,required:f,disabled:n,value:p="on",onCheckedChange:b,form:m,...k}=e,[l,C]=o.useState(null),y=S(u,a=>C(a)),v=o.useRef(!1),j=l?m||!!l.closest("form"):!0,[h=!1,g]=L({prop:c,defaultProp:r,onChange:b}),V=o.useRef(h);return o.useEffect(()=>{const a=l==null?void 0:l.form;if(a){const x=()=>g(V.current);return a.addEventListener("reset",x),()=>a.removeEventListener("reset",x)}},[l,g]),s.jsxs(T,{scope:t,state:h,disabled:n,children:[s.jsx(N.button,{type:"button",role:"checkbox","aria-checked":d(h)?"mixed":h,"aria-required":f,"data-state":I(h),"data-disabled":n?"":void 0,disabled:n,value:p,...k,ref:y,onKeyDown:E(e.onKeyDown,a=>{a.key==="Enter"&&a.preventDefault()}),onClick:E(e.onClick,a=>{g(x=>d(x)?!0:!x),j&&(v.current=a.isPropagationStopped(),v.current||a.stopPropagation())})}),j&&s.jsx($,{control:l,bubbles:!v.current,name:i,value:p,checked:h,required:f,disabled:n,form:m,style:{transform:"translateX(-100%)"},defaultChecked:d(r)?!1:r})]})});q.displayName=R;var w="CheckboxIndicator",_=o.forwardRef((e,u)=>{const{__scopeCheckbox:t,forceMount:i,...c}=e,r=X(w,t);return s.jsx(O,{present:i||d(r.state)||r.state===!0,children:s.jsx(N.span,{"data-state":I(r.state),"data-disabled":r.disabled?"":void 0,...c,ref:u,style:{pointerEvents:"none",...e.style}})})});_.displayName=w;var $=e=>{const{control:u,checked:t,bubbles:i=!0,defaultChecked:c,...r}=e,f=o.useRef(null),n=D(t),p=M(u);o.useEffect(()=>{const m=f.current,k=window.HTMLInputElement.prototype,C=Object.getOwnPropertyDescriptor(k,"checked").set;if(n!==t&&C){const y=new Event("click",{bubbles:i});m.indeterminate=d(t),C.call(m,d(t)?!1:t),m.dispatchEvent(y)}},[n,t,i]);const b=o.useRef(d(t)?!1:t);return s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:c??b.current,...r,tabIndex:-1,ref:f,style:{...e.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function d(e){return e==="indeterminate"}function I(e){return d(e)?"indeterminate":e?"checked":"unchecked"}var G=q,J=_;const Q=A(["flex items-center justify-center bg-transparent","rounded-sm cursor-pointer opacity-100 hover:opacity-80 disabled:opacity-50 disabled:cursor-default","outline-hidden ring-inset ring-1 ring-border-focus focus-visible:ring-2 focus-visible:ring-border-focus"],{variants:{size:{sm:"h-5 w-5",lg:"h-7 w-7"}},defaultVariants:{size:"sm"}}),U=({size:e="sm"})=>s.jsx(J,{className:"flex items-center justify-center w-full h-full text-primary",children:s.jsx(F,{size:e==="lg"?"sm":"xs"})}),P=o.forwardRef((e,u)=>{const{disabled:t=!1,id:i,name:c,label:r="",labelLocation:f="left",size:n="sm",className:p,...b}=e;return s.jsx(B,{disabled:t,id:i??c,label:r,labelLocation:f,className:"whitespace-nowrap",children:s.jsx(G,{className:H(Q({size:n}),p),disabled:t,id:i??c,name:c,ref:u,...b,children:s.jsx(U,{size:n})})})});try{P.displayName="Checkbox",P.__docgenInfo={description:"",displayName:"Checkbox",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:'"hidden" | "top" | "left" | "right" | null'}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | null'}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{P as C};
