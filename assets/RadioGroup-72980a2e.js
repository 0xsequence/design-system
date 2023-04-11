import{j as y}from"./jsx-runtime-a9c13c85.js";import{_ as v}from"./extends-9cd95192.js";import{r as e}from"./index-d8ade8ea.js";import{$ as A,a as g}from"./index.module-99b258bb.js";import{$ as x,b as R,a as _}from"./index.module-4456f0d6.js";import{$ as k,a as I,b as D}from"./index.module-880e327b.js";import{$ as F}from"./index.module-1e59790f.js";import{$ as M}from"./index.module-f6547125.js";import{$ as O}from"./index.module-e6a6661a.js";import{$ as z}from"./index.module-cacec922.js";import{B as C}from"./Box-9e9f1e0d.js";import{F as L}from"./Field-4954da28.js";import"./atoms-53256ec3.js";import{c as E}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";const w="Radio",[j,V]=x(w),[B,K]=j(w),T=e.forwardRef((a,s)=>{const{__scopeRadio:r,name:n,checked:o=!1,required:t,disabled:c,value:l="on",onCheck:d,...p}=a,[f,u]=e.useState(null),$=_(s,m=>u(m)),i=e.useRef(!1),b=f?Boolean(f.closest("form")):!0;return e.createElement(B,{scope:r,checked:o,disabled:c},e.createElement(R.button,v({type:"button",role:"radio","aria-checked":o,"data-state":G(o),"data-disabled":c?"":void 0,disabled:c,value:l},p,{ref:$,onClick:g(a.onClick,m=>{o||d==null||d(),b&&(i.current=m.isPropagationStopped(),i.current||m.stopPropagation())})})),b&&e.createElement(W,{control:f,bubbles:!i.current,name:n,value:l,checked:o,required:t,disabled:c,style:{transform:"translateX(-100%)"}}))}),U="RadioIndicator",H=e.forwardRef((a,s)=>{const{__scopeRadio:r,forceMount:n,...o}=a,t=K(U,r);return e.createElement(z,{present:n||t.checked},e.createElement(R.span,v({"data-state":G(t.checked),"data-disabled":t.disabled?"":void 0},o,{ref:s})))}),W=a=>{const{control:s,checked:r,bubbles:n=!0,...o}=a,t=e.useRef(null),c=O(r),l=M(s);return e.useEffect(()=>{const d=t.current,p=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(p,"checked").set;if(c!==r&&u){const $=new Event("click",{bubbles:n});u.call(d,r),d.dispatchEvent($)}},[c,r,n]),e.createElement("input",v({type:"radio","aria-hidden":!0,defaultChecked:r},o,{tabIndex:-1,ref:t,style:{...a.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function G(a){return a?"checked":"unchecked"}const X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],P="RadioGroup",[Y,_e]=x(P,[k,V]),S=k(),q=V(),[J,Q]=Y(P),Z=e.forwardRef((a,s)=>{const{__scopeRadioGroup:r,name:n,defaultValue:o,value:t,required:c=!1,disabled:l=!1,orientation:d,dir:p,loop:f=!0,onValueChange:u,...$}=a,i=S(r),b=F(p),[m,N]=A({prop:t,defaultProp:o,onChange:u});return e.createElement(J,{scope:r,name:n,required:c,disabled:l,value:m,onValueChange:N},e.createElement(I,v({asChild:!0},i,{orientation:d,dir:b,loop:f}),e.createElement(R.div,v({role:"radiogroup","aria-required":c,"aria-orientation":d,"data-disabled":l?"":void 0,dir:b},$,{ref:s}))))}),ee="RadioGroupItem",re=e.forwardRef((a,s)=>{const{__scopeRadioGroup:r,disabled:n,...o}=a,t=Q(ee,r),c=t.disabled||n,l=S(r),d=q(r),p=e.useRef(null),f=_(s,p),u=t.value===o.value,$=e.useRef(!1);return e.useEffect(()=>{const i=m=>{X.includes(m.key)&&($.current=!0)},b=()=>$.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",b)}},[]),e.createElement(D,v({asChild:!0},l,{focusable:!c,active:u}),e.createElement(T,v({disabled:c,required:t.required,checked:u},d,o,{name:t.name,ref:f,onCheck:()=>t.onValueChange(o.value),onKeyDown:g(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:g(o.onFocus,()=>{var i;$.current&&((i=p.current)===null||i===void 0||i.click())})})))}),oe=e.forwardRef((a,s)=>{const{__scopeRadioGroup:r,...n}=a,o=q(r);return e.createElement(H,v({},o,n,{ref:s}))}),te=Z,ae=re,ne=oe;var se=E({defaultClassName:"io59uy6 fyvr11h0 fyvr11ko fyvr11jg fyvr11hw fyvr128 fyvr15o fyvr12qh",variantClassNames:{size:{sm:"io59uy7",lg:"io59uy8"}},defaultVariants:{},compoundVariants:[]}),ce=E({defaultClassName:"fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr12ih fyvr12bh fyvr11xh fyvr124h fyvr12lt fyvr12et fyvr120t fyvr127t fyvr11ob fyvr12sz fyvr12sv fyvr12tj",variantClassNames:{size:{sm:"io59uy3 fyvr11a8 fyvr11ak fyvr11aw fyvr11b8",lg:"io59uy4 fyvr11ac fyvr11ao fyvr11b0 fyvr11bc"}},defaultVariants:{},compoundVariants:[]});const ie=a=>{const{id:s,label:r,size:n="sm",value:o,disabled:t}=a;return y(C,{alignItems:"center",children:y(L,{disabled:t,display:"flex",id:s,label:r,labelLocation:"right",children:y(ae,{className:ce({size:n}),value:o,id:s,disabled:t,children:y(ne,{className:se({size:n})})})})})},h=e.forwardRef((a,s)=>{const{flexDirection:r="column",disabled:n=!1,gap:o="2",name:t,options:c,size:l="sm",...d}=a;return y(te,{disabled:n,name:t,ref:s,...d,children:y(C,{flexDirection:r,gap:o,children:c.map(({label:p,value:f,disabled:u})=>y(ie,{id:`${t}-${f}`,label:p,size:l,value:f,disabled:u},f))})})});try{h.displayName="RadioGroup",h.__docgenInfo={description:"",displayName:"RadioGroup",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}}}}}catch{}export{h as R};
//# sourceMappingURL=RadioGroup-72980a2e.js.map
