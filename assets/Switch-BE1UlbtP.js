import{j as b}from"./jsx-runtime-DoxjgJx5.js";import{a as q,$ as E,c as k,d as h}from"./index-BUipU-ak.js";import{r}from"./index-Cu9bd8lq.js";import{a as P,c as R}from"./index-BdmuMSao.js";import{$ as N}from"./index-BtV2h-_m.js";import{$ as V}from"./index-C_rCLuZS.js";import{B as j}from"./Box-CAc3ZENg.js";import{F as B}from"./Field-Dfg-0MHN.js";/* empty css                            */import"./atoms-IWQDe5VI.js";const w="Switch",[I,re]=q(w),[z,L]=I(w),M=r.forwardRef((e,c)=>{const{__scopeSwitch:t,name:a,checked:o,defaultChecked:s,required:d,disabled:n,value:i="on",onCheckedChange:p,...v}=e,[l,$]=r.useState(null),C=E(c,u=>$(u)),m=r.useRef(!1),y=l?!!l.closest("form"):!0,[f=!1,S]=P({prop:o,defaultProp:s,onChange:p});return r.createElement(z,{scope:t,checked:f,disabled:n},r.createElement(k.button,h({type:"button",role:"switch","aria-checked":f,"aria-required":d,"data-state":_(f),"data-disabled":n?"":void 0,disabled:n,value:i},v,{ref:C,onClick:R(e.onClick,u=>{S(g=>!g),y&&(m.current=u.isPropagationStopped(),m.current||u.stopPropagation())})})),y&&r.createElement(H,{control:l,bubbles:!m.current,name:a,value:i,checked:f,required:d,disabled:n,style:{transform:"translateX(-100%)"}}))}),T="SwitchThumb",F=r.forwardRef((e,c)=>{const{__scopeSwitch:t,...a}=e,o=L(T,t);return r.createElement(k.span,h({"data-state":_(o.checked),"data-disabled":o.disabled?"":void 0},a,{ref:c}))}),H=e=>{const{control:c,checked:t,bubbles:a=!0,...o}=e,s=r.useRef(null),d=N(t),n=V(c);return r.useEffect(()=>{const i=s.current,p=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(p,"checked").set;if(d!==t&&l){const $=new Event("click",{bubbles:a});l.call(i,t),i.dispatchEvent($)}},[d,t,a]),r.createElement("input",h({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:s,style:{...e.style,...n,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e?"checked":"unchecked"}const A=M,O=F;var D="_1lp2u8e1 _1lp2u8e0 fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr1ss fyvr1uo fyvr1wk fyvr1yg fyvr11sz fyvr11hw fyvr12uz",U="_1lp2u8e3 _1lp2u8e2 fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr11ho fyvr1ko fyvr1oo fyvr1k fyvr140 fyvr11nz";const x=e=>{const{disabled:c,label:t,labelLocation:a="left",description:o,id:s,name:d,...n}=e;return b.jsx(B,{disabled:c,display:"flex",id:s??d,label:t,labelLocation:a,description:o,whiteSpace:"nowrap",children:b.jsx(A,{className:D,disabled:c,...n,children:b.jsx(j,{position:"relative",width:"full",height:"full",children:b.jsx(O,{className:U})})})})};try{x.displayName="Switch",x.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{x as S};
