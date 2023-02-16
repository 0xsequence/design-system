import{j as y}from"./jsx-runtime-a9c13c85.js";import{_ as v}from"./extends-98964cd2.js";import{r as e}from"./index-d8ade8ea.js";import{$ as A,a as g}from"./index.module-99b258bb.js";import{$ as _,b as R,a as x}from"./index.module-1b91e82f.js";import{$ as k,a as I,b as D}from"./index.module-9fd418d9.js";import{$ as z}from"./index.module-207f3122.js";import{$ as F}from"./index.module-f6547125.js";import{$ as M}from"./index.module-e6a6661a.js";import{$ as O}from"./index.module-5cafe27c.js";import{B as C}from"./Box-62a4f41e.js";import{F as L}from"./Field-ba8754b2.js";import"./atoms-b77c2037.js";import{c as E}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";const w="Radio",[B,V]=_(w),[K,j]=B(w),T=e.forwardRef((a,c)=>{const{__scopeRadio:r,name:n,checked:o=!1,required:t,disabled:s,value:l="on",onCheck:d,...p}=a,[f,u]=e.useState(null),$=x(c,m=>u(m)),i=e.useRef(!1),b=f?Boolean(f.closest("form")):!0;return e.createElement(K,{scope:r,checked:o,disabled:s},e.createElement(R.button,v({type:"button",role:"radio","aria-checked":o,"data-state":G(o),"data-disabled":s?"":void 0,disabled:s,value:l},p,{ref:$,onClick:g(a.onClick,m=>{o||d==null||d(),b&&(i.current=m.isPropagationStopped(),i.current||m.stopPropagation())})})),b&&e.createElement(W,{control:f,bubbles:!i.current,name:n,value:l,checked:o,required:t,disabled:s,style:{transform:"translateX(-100%)"}}))}),U="RadioIndicator",H=e.forwardRef((a,c)=>{const{__scopeRadio:r,forceMount:n,...o}=a,t=j(U,r);return e.createElement(O,{present:n||t.checked},e.createElement(R.span,v({"data-state":G(t.checked),"data-disabled":t.disabled?"":void 0},o,{ref:c})))}),W=a=>{const{control:c,checked:r,bubbles:n=!0,...o}=a,t=e.useRef(null),s=M(r),l=F(c);return e.useEffect(()=>{const d=t.current,p=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(p,"checked").set;if(s!==r&&u){const $=new Event("click",{bubbles:n});u.call(d,r),d.dispatchEvent($)}},[s,r,n]),e.createElement("input",v({type:"radio","aria-hidden":!0,defaultChecked:r},o,{tabIndex:-1,ref:t,style:{...a.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function G(a){return a?"checked":"unchecked"}const X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],P="RadioGroup",[Y,xe]=_(P,[k,V]),S=k(),q=V(),[J,Q]=Y(P),Z=e.forwardRef((a,c)=>{const{__scopeRadioGroup:r,name:n,defaultValue:o,value:t,required:s=!1,disabled:l=!1,orientation:d,dir:p,loop:f=!0,onValueChange:u,...$}=a,i=S(r),b=z(p),[m,N]=A({prop:t,defaultProp:o,onChange:u});return e.createElement(J,{scope:r,name:n,required:s,disabled:l,value:m,onValueChange:N},e.createElement(I,v({asChild:!0},i,{orientation:d,dir:b,loop:f}),e.createElement(R.div,v({role:"radiogroup","aria-required":s,"aria-orientation":d,"data-disabled":l?"":void 0,dir:b},$,{ref:c}))))}),ee="RadioGroupItem",re=e.forwardRef((a,c)=>{const{__scopeRadioGroup:r,disabled:n,...o}=a,t=Q(ee,r),s=t.disabled||n,l=S(r),d=q(r),p=e.useRef(null),f=x(c,p),u=t.value===o.value,$=e.useRef(!1);return e.useEffect(()=>{const i=m=>{X.includes(m.key)&&($.current=!0)},b=()=>$.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",b)}},[]),e.createElement(D,v({asChild:!0},l,{focusable:!s,active:u}),e.createElement(T,v({disabled:s,required:t.required,checked:u},d,o,{name:t.name,ref:f,onCheck:()=>t.onValueChange(o.value),onKeyDown:g(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:g(o.onFocus,()=>{var i;$.current&&((i=p.current)===null||i===void 0||i.click())})})))}),oe=e.forwardRef((a,c)=>{const{__scopeRadioGroup:r,...n}=a,o=q(r);return e.createElement(H,v({},o,n,{ref:c}))}),te=Z,ae=re,ne=oe;var ce=E({defaultClassName:"io59uy6 fyvr11h0 fyvr11ko fyvr11jg fyvr11hw fyvr128 fyvr15o fyvr12oz",variantClassNames:{size:{sm:"io59uy7",lg:"io59uy8"}},defaultVariants:{},compoundVariants:[]}),se=E({defaultClassName:"fyvr11dc fyvr11e0 fyvr11c0 fyvr11co fyvr12h5 fyvr12ab fyvr11wn fyvr123h fyvr12kh fyvr12dn fyvr11zz fyvr126t fyvr11nt fyvr12rh fyvr12rd fyvr12s1",variantClassNames:{size:{sm:"io59uy3 fyvr11a8 fyvr11ak fyvr11aw fyvr11b8",lg:"io59uy4 fyvr11ac fyvr11ao fyvr11b0 fyvr11bc"}},defaultVariants:{},compoundVariants:[]});const ie=a=>{const{id:c,label:r,size:n="sm",value:o,disabled:t}=a;return y(C,{alignItems:"center",children:y(L,{disabled:t,display:"flex",id:c,label:r,labelLocation:"right",children:y(ae,{className:se({size:n}),value:o,id:c,disabled:t,children:y(ne,{className:ce({size:n})})})})})},h=e.forwardRef((a,c)=>{const{flexDirection:r="column",disabled:n=!1,gap:o="2",name:t,options:s,size:l="sm",...d}=a;return y(te,{disabled:n,name:t,ref:c,...d,children:y(C,{flexDirection:r,gap:o,children:s.map(({label:p,value:f,disabled:u})=>y(ie,{id:`${t}-${f}`,label:p,size:l,value:f,disabled:u},f))})})});try{h.displayName="RadioGroup",h.__docgenInfo={description:"",displayName:"RadioGroup",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '7': string; '8': string; '9': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}}}}}catch{}export{h as R};
//# sourceMappingURL=RadioGroup-0a434049.js.map
