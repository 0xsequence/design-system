var q=Object.defineProperty;var v=(o,n)=>q(o,"name",{value:n,configurable:!0});import{$ as h,b as N,_ as x,c as _,a as y,d as g}from"./index.module.1afbe699.js";import{r as e,j as R}from"./jsx-runtime.53f893fc.js";import{$ as C,a as L,b as D}from"./index.module.0183f882.js";import{$ as F}from"./index.module.36105670.js";import{$ as M}from"./index.module.51c9920e.js";import{$ as B}from"./index.module.47d9de43.js";import{$ as K}from"./index.module.c8de35a5.js";import{B as E}from"./Box.73518095.js";import{L as T}from"./LabelledField.f99649d9.js";/* empty css                             */import{c as k}from"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";const G="Radio",[z,S]=h(G),[j,U]=z(G),Y=e.exports.forwardRef((o,n)=>{const{__scopeRadio:t,name:s,checked:r=!1,required:a,disabled:c,value:u="on",onCheck:i,...l}=o,[b,p]=e.exports.useState(null),f=y(n,m=>p(m)),d=e.exports.useRef(!1),$=b?Boolean(b.closest("form")):!0;return e.exports.createElement(j,{scope:t,checked:r,disabled:c},e.exports.createElement(_.button,x({type:"button",role:"radio","aria-checked":r,"data-state":V(r),"data-disabled":c?"":void 0,disabled:c,value:u},l,{ref:f,onClick:g(o.onClick,m=>{r||i==null||i(),$&&(d.current=m.isPropagationStopped(),d.current||m.stopPropagation())})})),$&&e.exports.createElement(X,{control:b,bubbles:!d.current,name:s,value:u,checked:r,required:a,disabled:c,style:{transform:"translateX(-100%)"}}))}),H="RadioIndicator",W=e.exports.forwardRef((o,n)=>{const{__scopeRadio:t,forceMount:s,...r}=o,a=U(H,t);return e.exports.createElement(K,{present:s||a.checked},e.exports.createElement(_.span,x({"data-state":V(a.checked),"data-disabled":a.disabled?"":void 0},r,{ref:n})))}),X=v(o=>{const{control:n,checked:t,bubbles:s=!0,...r}=o,a=e.exports.useRef(null),c=B(t),u=M(n);return e.exports.useEffect(()=>{const i=a.current,l=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(l,"checked").set;if(c!==t&&p){const f=new Event("click",{bubbles:s});p.call(i,t),i.dispatchEvent(f)}},[c,t,s]),e.exports.createElement("input",x({type:"radio","aria-hidden":!0,defaultChecked:t},r,{tabIndex:-1,ref:a,style:{...o.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$ce77a8961b41be9e$var$BubbleInput");function V(o){return o?"checked":"unchecked"}v(V,"$ce77a8961b41be9e$var$getState");const J=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],A="RadioGroup",[Q,he]=h(A,[C,S]),P=C(),I=S(),[Z,ee]=Q(A),oe=e.exports.forwardRef((o,n)=>{const{__scopeRadioGroup:t,name:s,defaultValue:r,value:a,required:c=!1,disabled:u=!1,orientation:i,dir:l,loop:b=!0,onValueChange:p,...f}=o,d=P(t),$=F(l),[m,O]=N({prop:a,defaultProp:r,onChange:p});return e.exports.createElement(Z,{scope:t,name:s,required:c,disabled:u,value:m,onValueChange:O},e.exports.createElement(L,x({asChild:!0},d,{orientation:i,dir:$,loop:b}),e.exports.createElement(_.div,x({role:"radiogroup","aria-required":c,"aria-orientation":i,"data-disabled":u?"":void 0,dir:$},f,{ref:n}))))}),te="RadioGroupItem",re=e.exports.forwardRef((o,n)=>{const{__scopeRadioGroup:t,disabled:s,...r}=o,a=ee(te,t),c=a.disabled||s,u=P(t),i=I(t),l=e.exports.useRef(null),b=y(n,l),p=a.value===r.value,f=e.exports.useRef(!1);return e.exports.useEffect(()=>{const d=v(m=>{J.includes(m.key)&&(f.current=!0)},"handleKeyDown"),$=v(()=>f.current=!1,"handleKeyUp");return document.addEventListener("keydown",d),document.addEventListener("keyup",$),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",$)}},[]),e.exports.createElement(D,x({asChild:!0},u,{focusable:!c,active:p}),e.exports.createElement(Y,x({disabled:c,required:a.required,checked:p},i,r,{name:a.name,ref:b,onCheck:()=>a.onValueChange(r.value),onKeyDown:g(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:g(r.onFocus,()=>{var d;f.current&&((d=l.current)===null||d===void 0||d.click())})})))}),ae=e.exports.forwardRef((o,n)=>{const{__scopeRadioGroup:t,...s}=o,r=I(t);return e.exports.createElement(W,x({},r,s,{ref:n}))}),ne=oe,se=re,ce=ae;var de=k({defaultClassName:"io59uy6 tnw2berc tnw2beu4 tnw2bet0 tnw2bes8 tnw2be8 tnw2be18 tnw2be1dc",variantClassNames:{size:{sm:"io59uy7",lg:"io59uy8"}},defaultVariants:{},compoundVariants:[]}),ie=k({defaultClassName:"tnw2beo0 tnw2beoo tnw2bemo tnw2benc tnw2be19o tnw2be196 tnw2be12c tnw2be18o tnw2bewu tnw2be15c",variantClassNames:{size:{sm:"io59uy3 tnw2bekw tnw2bel8 tnw2belk tnw2belw",lg:"io59uy4 tnw2bel0 tnw2belc tnw2belo tnw2bem0"}},defaultVariants:{},compoundVariants:[]});const le=v(({id:o,label:n,size:t="sm",value:s})=>R(E,{alignItems:"center",children:R(T,{label:n,labelLocation:"right",forId:o,children:R(se,{className:ie({size:t}),value:s,id:o,children:R(ce,{className:de({size:t})})})})}),"RadioOption"),w=e.exports.forwardRef(({flexDirection:o="column",disabled:n=!1,gap:t="2",name:s,options:r,size:a="sm",...c},u)=>R(ne,{disabled:n,name:s,ref:u,...c,children:R(E,{flexDirection:o,gap:t,children:r.map(({label:i,value:l})=>R(le,{id:`${s}-${l}`,label:i,size:a,value:l},l))})}));try{w.displayName="RadioGroup",w.__docgenInfo={description:"",displayName:"RadioGroup",props:{size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},gap:{defaultValue:{value:"2"},description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; }, CSSVarFunction>, { ...; }>>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:w.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch{}export{w as R};
//# sourceMappingURL=RadioGroup.248895a5.js.map