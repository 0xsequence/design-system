import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{a as R,c as E}from"./index-Bs37d09a.js";import{c as N,u as V,P as k}from"./index-BEGV7LFS.js";import{u as B}from"./index-DenE5TFG.js";import{u as T}from"./index-nCODJAFu.js";import{B as I}from"./Box-CtdtY7xp.js";import{F as H}from"./Field-D7YQmrKp.js";import"./helpers.css.ts.vanilla-BZdCf6XI.js";/* empty css                            */var y="Switch",[L,te]=N(y),[M,z]=L(y),x=d.forwardRef((e,a)=>{const{__scopeSwitch:t,name:o,checked:n,defaultChecked:l,required:s,disabled:i,value:u="on",onCheckedChange:m,...b}=e,[c,h]=d.useState(null),P=V(a,f=>h(f)),v=d.useRef(!1),w=c?!!c.closest("form"):!0,[p=!1,q]=R({prop:n,defaultProp:l,onChange:m});return r.jsxs(M,{scope:t,checked:p,disabled:i,children:[r.jsx(k.button,{type:"button",role:"switch","aria-checked":p,"aria-required":s,"data-state":_(p),"data-disabled":i?"":void 0,disabled:i,value:u,...b,ref:P,onClick:E(e.onClick,f=>{q(j=>!j),w&&(v.current=f.isPropagationStopped(),v.current||f.stopPropagation())})}),w&&r.jsx(F,{control:c,bubbles:!v.current,name:o,value:u,checked:p,required:s,disabled:i,style:{transform:"translateX(-100%)"}})]})});x.displayName=y;var C="SwitchThumb",g=d.forwardRef((e,a)=>{const{__scopeSwitch:t,...o}=e,n=z(C,t);return r.jsx(k.span,{"data-state":_(n.checked),"data-disabled":n.disabled?"":void 0,...o,ref:a})});g.displayName=C;var F=e=>{const{control:a,checked:t,bubbles:o=!0,...n}=e,l=d.useRef(null),s=B(t),i=T(a);return d.useEffect(()=>{const u=l.current,m=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(m,"checked").set;if(s!==t&&c){const h=new Event("click",{bubbles:o});c.call(u,t),u.dispatchEvent(h)}},[s,t,o]),r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...n,tabIndex:-1,ref:l,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function _(e){return e?"checked":"unchecked"}var A=x,O=g,D="_1lp2u8e1 _1lp2u8e0 fyvr11hk fyvr11i8 fyvr11g8 fyvr11gw fyvr1v0 fyvr1x4 fyvr1z8 fyvr111c fyvr11v9 fyvr11m4 fyvr12nf fyvr12i9 _4efw240",U="_1lp2u8e3 _1lp2u8e2 fyvr11hk fyvr11i8 fyvr11g8 fyvr11gw fyvr11lw fyvr1m0 fyvr1qg fyvr1k fyvr148 fyvr11s9";const S=e=>{const{disabled:a,label:t,labelLocation:o="left",description:n,id:l,name:s,...i}=e;return r.jsx(H,{disabled:a,display:"flex",id:l??s,label:t,labelLocation:o,description:n,whiteSpace:"nowrap",children:r.jsx(A,{className:D,disabled:a,...i,children:r.jsx(I,{position:"relative",width:"full",height:"full",children:r.jsx(O,{className:U})})})})};try{S.displayName="Switch",S.__docgenInfo={description:"",displayName:"Switch",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{S};