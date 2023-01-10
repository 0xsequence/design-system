import{j as h}from"./jsx-runtime-a9c13c85.js";import{_ as m}from"./extends-98964cd2.js";import{r as t}from"./index-d8ade8ea.js";import{$ as g,a as P,b as B,c as w,d as N}from"./index.module-d15610cf.js";import{$ as R}from"./index.module-e6a6661a.js";import{$ as q}from"./index.module-45828978.js";import{B as I}from"./Box-6ce8bd92.js";import"./atoms.css-3866390b.js";const v="Switch",[M,Z]=g(v),[T,j]=M(v),H=t.forwardRef((e,s)=>{const{__scopeSwitch:c,name:o,checked:r,defaultChecked:i,required:d,disabled:a,value:b="on",onCheckedChange:p,..._}=e,[n,u]=t.useState(null),S=P(s,l=>u(l)),$=t.useRef(!1),k=n?Boolean(n.closest("form")):!0,[f=!1,y]=B({prop:r,defaultProp:i,onChange:p});return t.createElement(T,{scope:c,checked:f,disabled:a},t.createElement(w.button,m({type:"button",role:"switch","aria-checked":f,"aria-required":d,"data-state":C(f),"data-disabled":a?"":void 0,disabled:a,value:b},_,{ref:S,onClick:N(e.onClick,l=>{y(E=>!E),k&&($.current=l.isPropagationStopped(),$.current||l.stopPropagation())})})),k&&t.createElement(z,{control:n,bubbles:!$.current,name:o,value:b,checked:f,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),A="SwitchThumb",O=t.forwardRef((e,s)=>{const{__scopeSwitch:c,...o}=e,r=j(A,c);return t.createElement(w.span,m({"data-state":C(r.checked),"data-disabled":r.disabled?"":void 0},o,{ref:s}))}),z=e=>{const{control:s,checked:c,bubbles:o=!0,...r}=e,i=t.useRef(null),d=R(c),a=q(s);return t.useEffect(()=>{const b=i.current,p=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(p,"checked").set;if(d!==c&&n){const u=new Event("click",{bubbles:o});n.call(b,c),b.dispatchEvent(u)}},[d,c,o]),t.createElement("input",m({type:"checkbox","aria-hidden":!0,defaultChecked:c},r,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function C(e){return e?"checked":"unchecked"}const D=H,F=O;var L="_1lp2u8e0",U="_1lp2u8e1";const x=e=>h(D,{className:L,...e,children:h(I,{position:"relative",width:"full",height:"full",children:h(F,{className:U})})});try{x.displayName="Switch",x.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{x as S};
//# sourceMappingURL=Switch-55f30ced.js.map