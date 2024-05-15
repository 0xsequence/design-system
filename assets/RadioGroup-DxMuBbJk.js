import{j as y}from"./jsx-runtime-CexXSJP5.js";import{a as h,d as v,c as R,$ as _}from"./index-CeXBLvNc.js";import{r as e}from"./index-BP8_t0zE.js";import{a as j,c as g}from"./index-C-LszQ6e.js";import{$ as k,a as A,b as I}from"./index-DNJDfZCP.js";import{$ as D}from"./index-CX0kOEaK.js";import{$ as F}from"./index-pC7lLcKS.js";import{$ as M}from"./index-CF1bRcOk.js";import{$ as O}from"./index-CnD1ylEj.js";import{B as C}from"./Box-Cj61Dz8D.js";import{F as z}from"./Field-CEph7VCa.js";import"./helpers.css.ts.vanilla-CPoYynXN.js";/* empty css                            */import{c as E}from"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";const w="Radio",[L,V]=h(w),[B,K]=L(w),T=e.forwardRef((t,s)=>{const{__scopeRadio:r,name:n,checked:o=!1,required:a,disabled:c,value:l="on",onCheck:d,...p}=t,[f,u]=e.useState(null),$=_(s,m=>u(m)),i=e.useRef(!1),b=f?!!f.closest("form"):!0;return e.createElement(B,{scope:r,checked:o,disabled:c},e.createElement(R.button,v({type:"button",role:"radio","aria-checked":o,"data-state":G(o),"data-disabled":c?"":void 0,disabled:c,value:l},p,{ref:$,onClick:g(t.onClick,m=>{o||d==null||d(),b&&(i.current=m.isPropagationStopped(),i.current||m.stopPropagation())})})),b&&e.createElement(W,{control:f,bubbles:!i.current,name:n,value:l,checked:o,required:a,disabled:c,style:{transform:"translateX(-100%)"}}))}),U="RadioIndicator",H=e.forwardRef((t,s)=>{const{__scopeRadio:r,forceMount:n,...o}=t,a=K(U,r);return e.createElement(O,{present:n||a.checked},e.createElement(R.span,v({"data-state":G(a.checked),"data-disabled":a.disabled?"":void 0},o,{ref:s})))}),W=t=>{const{control:s,checked:r,bubbles:n=!0,...o}=t,a=e.useRef(null),c=M(r),l=F(s);return e.useEffect(()=>{const d=a.current,p=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(p,"checked").set;if(c!==r&&u){const $=new Event("click",{bubbles:n});u.call(d,r),d.dispatchEvent($)}},[c,r,n]),e.createElement("input",v({type:"radio","aria-hidden":!0,defaultChecked:r},o,{tabIndex:-1,ref:a,style:{...t.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function G(t){return t?"checked":"unchecked"}const X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],P="RadioGroup",[Y,_e]=h(P,[k,V]),S=k(),q=V(),[J,Q]=Y(P),Z=e.forwardRef((t,s)=>{const{__scopeRadioGroup:r,name:n,defaultValue:o,value:a,required:c=!1,disabled:l=!1,orientation:d,dir:p,loop:f=!0,onValueChange:u,...$}=t,i=S(r),b=D(p),[m,N]=j({prop:a,defaultProp:o,onChange:u});return e.createElement(J,{scope:r,name:n,required:c,disabled:l,value:m,onValueChange:N},e.createElement(A,v({asChild:!0},i,{orientation:d,dir:b,loop:f}),e.createElement(R.div,v({role:"radiogroup","aria-required":c,"aria-orientation":d,"data-disabled":l?"":void 0,dir:b},$,{ref:s}))))}),ee="RadioGroupItem",re=e.forwardRef((t,s)=>{const{__scopeRadioGroup:r,disabled:n,...o}=t,a=Q(ee,r),c=a.disabled||n,l=S(r),d=q(r),p=e.useRef(null),f=_(s,p),u=a.value===o.value,$=e.useRef(!1);return e.useEffect(()=>{const i=m=>{X.includes(m.key)&&($.current=!0)},b=()=>$.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",b)}},[]),e.createElement(I,v({asChild:!0},l,{focusable:!c,active:u}),e.createElement(T,v({disabled:c,required:a.required,checked:u},d,o,{name:a.name,ref:f,onCheck:()=>a.onValueChange(o.value),onKeyDown:g(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:g(o.onFocus,()=>{var i;$.current&&((i=p.current)===null||i===void 0||i.click())})})))}),oe=e.forwardRef((t,s)=>{const{__scopeRadioGroup:r,...n}=t,o=q(r);return e.createElement(H,v({},o,n,{ref:s}))}),ae=Z,te=re,ne=oe;var se=E({defaultClassName:"io59uy3 io59uy0 fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr1so fyvr1uk fyvr1wg fyvr1yc fyvr12nd fyvr12g1 fyvr121d fyvr128p fyvr12nj fyvr12g7 fyvr121j fyvr128v fyvr11od fyvr12v7 fyvr12v3 fyvr12vz fyvr12vr _4efw240",variantClassNames:{size:{sm:"io59uy4 io59uy1 fyvr11a8 fyvr11ak fyvr11aw fyvr11b8",lg:"io59uy5 io59uy2 fyvr11ac fyvr11ao fyvr11b0 fyvr11bc"}},defaultVariants:{},compoundVariants:[]}),ce=E({defaultClassName:"io59uy8 io59uy7 io59uy6 fyvr11h0 fyvr11ko fyvr11jg fyvr11hw fyvr128 fyvr15o fyvr12s1",variantClassNames:{size:{sm:"io59uy9",lg:"io59uya"}},defaultVariants:{},compoundVariants:[]});const ie=t=>{const{id:s,label:r,size:n="sm",value:o,disabled:a}=t;return y.jsx(C,{alignItems:"center",children:y.jsx(z,{disabled:a,display:"flex",id:s,label:r,labelLocation:"right",children:y.jsx(te,{className:se({size:n}),value:o,id:s,disabled:a,children:y.jsx(ne,{className:ce({size:n})})})})})},x=e.forwardRef((t,s)=>{const{flexDirection:r="column",disabled:n=!1,gap:o="2",name:a,options:c,size:l="sm",...d}=t;return y.jsx(ae,{disabled:n,name:a,ref:s,...d,children:y.jsx(C,{flexDirection:r,gap:o,children:c.map(({label:p,value:f,disabled:u})=>y.jsx(ie,{id:`${a}-${f}`,label:p,size:l,value:f,disabled:u},f))})})});try{x.displayName="RadioGroup",x.__docgenInfo={description:"",displayName:"RadioGroup",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}}}}}catch{}export{x as R};