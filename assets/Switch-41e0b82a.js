import{j as u}from"./jsx-runtime-69eee039.js";import{_ as h}from"./extends-9cd95192.js";import{r}from"./index-7c191284.js";import{a as q,c as E}from"./index-006d63ff.js";import{b as P,$ as R,a as k}from"./index-147fd682.js";import{$ as N}from"./index-555f5aa0.js";import{$ as V}from"./index-3842af66.js";import{B as j}from"./Box-b958d23a.js";import{F as B}from"./Field-34aa5a10.js";import"./atoms-dc8b8460.js";const w="Switch",[I,re]=P(w),[L,M]=I(w),T=r.forwardRef((e,c)=>{const{__scopeSwitch:t,name:a,checked:o,defaultChecked:s,required:d,disabled:n,value:i="on",onCheckedChange:p,...v}=e,[l,m]=r.useState(null),C=R(c,b=>m(b)),$=r.useRef(!1),y=l?!!l.closest("form"):!0,[f=!1,S]=q({prop:o,defaultProp:s,onChange:p});return r.createElement(L,{scope:t,checked:f,disabled:n},r.createElement(k.button,h({type:"button",role:"switch","aria-checked":f,"aria-required":d,"data-state":_(f),"data-disabled":n?"":void 0,disabled:n,value:i},v,{ref:C,onClick:E(e.onClick,b=>{S(g=>!g),y&&($.current=b.isPropagationStopped(),$.current||b.stopPropagation())})})),y&&r.createElement(H,{control:l,bubbles:!$.current,name:a,value:i,checked:f,required:d,disabled:n,style:{transform:"translateX(-100%)"}}))}),z="SwitchThumb",F=r.forwardRef((e,c)=>{const{__scopeSwitch:t,...a}=e,o=M(z,t);return r.createElement(k.span,h({"data-state":_(o.checked),"data-disabled":o.disabled?"":void 0},a,{ref:c}))}),H=e=>{const{control:c,checked:t,bubbles:a=!0,...o}=e,s=r.useRef(null),d=N(t),n=V(c);return r.useEffect(()=>{const i=s.current,p=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(p,"checked").set;if(d!==t&&l){const m=new Event("click",{bubbles:a});l.call(i,t),i.dispatchEvent(m)}},[d,t,a]),r.createElement("input",h({type:"checkbox","aria-hidden":!0,defaultChecked:t},o,{tabIndex:-1,ref:s,style:{...e.style,...n,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function _(e){return e?"checked":"unchecked"}const A=T,O=F;var D="_1lp2u8e1 fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr1ss fyvr1uo fyvr1wk fyvr1yg fyvr11qb fyvr11hw fyvr12uz",U="_1lp2u8e3 fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr11ho fyvr1ko fyvr1oo fyvr1k fyvr140 fyvr11nz";const x=e=>{const{disabled:c,label:t,labelLocation:a="left",description:o,id:s,name:d,...n}=e;return u.jsx(B,{disabled:c,display:"flex",id:s??d,label:t,labelLocation:a,description:o,whiteSpace:"nowrap",children:u.jsx(A,{className:D,disabled:c,...n,children:u.jsx(j,{position:"relative",width:"full",height:"full",children:u.jsx(O,{className:U})})})})};try{x.displayName="Switch",x.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{x as S};
//# sourceMappingURL=Switch-41e0b82a.js.map
