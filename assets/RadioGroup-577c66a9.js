import{j as _}from"./jsx-runtime-399103ca.js";import{_ as w}from"./extends-98964cd2.js";import{r as t}from"./index-b1819cdf.js";import{$ as k,a as S,b as N,f as te,c as C,d as R}from"./index.module-2169cd94.js";import{$ as oe,a as V}from"./index.module-dbe64ce1.js";import{$ as ne}from"./index.module-17452d70.js";import{$ as re}from"./index.module-75092779.js";import{$ as ae}from"./index.module-835e3c61.js";import{$ as ce}from"./index.module-5cd0964b.js";import{B as O}from"./Box-2cd000c9.js";import{F as se}from"./Field-0bf8c435.js";/* empty css                             */import{c as M}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";const F="rovingFocusGroup.onEntryFocus",de={bubbles:!1,cancelable:!0},A="RovingFocusGroup",[y,L,ie]=oe(A),[fe,q]=k(A,[ie]),[ue,le]=fe(A),be=t.forwardRef((e,n)=>t.createElement(y.Provider,{scope:e.__scopeRovingFocusGroup},t.createElement(y.Slot,{scope:e.__scopeRovingFocusGroup},t.createElement(pe,w({},e,{ref:n}))))),pe=t.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:o,orientation:r,loop:a=!1,dir:c,currentTabStopId:i,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:l,onEntryFocus:$,...b}=e,p=t.useRef(null),f=S(n,p),d=V(c),[v=null,u]=N({prop:i,defaultProp:s,onChange:l}),[g,T]=t.useState(!1),h=te($),W=L(o),I=t.useRef(!1),[X,G]=t.useState(0);return t.useEffect(()=>{const m=p.current;if(m)return m.addEventListener(F,h),()=>m.removeEventListener(F,h)},[h]),t.createElement(ue,{scope:o,orientation:r,dir:d,loop:a,currentTabStopId:v,onItemFocus:t.useCallback(m=>u(m),[u]),onItemShiftTab:t.useCallback(()=>T(!0),[]),onFocusableItemAdd:t.useCallback(()=>G(m=>m+1),[]),onFocusableItemRemove:t.useCallback(()=>G(m=>m-1),[])},t.createElement(C.div,w({tabIndex:g||X===0?-1:0,"data-orientation":r},b,{ref:f,style:{outline:"none",...e.style},onMouseDown:R(e.onMouseDown,()=>{I.current=!0}),onFocus:R(e.onFocus,m=>{const J=!I.current;if(m.target===m.currentTarget&&J&&!g){const P=new CustomEvent(F,de);if(m.currentTarget.dispatchEvent(P),!P.defaultPrevented){const x=W().filter(E=>E.focusable),Q=x.find(E=>E.active),Z=x.find(E=>E.id===v),ee=[Q,Z,...x].filter(Boolean).map(E=>E.ref.current);K(ee)}}I.current=!1}),onBlur:R(e.onBlur,()=>T(!1))})))}),$e="RovingFocusGroupItem",me=t.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:o,focusable:r=!0,active:a=!1,...c}=e,i=ne(),s=le($e,o),l=s.currentTabStopId===i,$=L(o),{onFocusableItemAdd:b,onFocusableItemRemove:p}=s;return t.useEffect(()=>{if(r)return b(),()=>p()},[r,b,p]),t.createElement(y.ItemSlot,{scope:o,id:i,focusable:r,active:a},t.createElement(C.span,w({tabIndex:l?0:-1,"data-orientation":s.orientation},c,{ref:n,onMouseDown:R(e.onMouseDown,f=>{r?s.onItemFocus(i):f.preventDefault()}),onFocus:R(e.onFocus,()=>s.onItemFocus(i)),onKeyDown:R(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){s.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const d=we(f,s.orientation,s.dir);if(d!==void 0){f.preventDefault();let u=$().filter(g=>g.focusable).map(g=>g.ref.current);if(d==="last")u.reverse();else if(d==="prev"||d==="next"){d==="prev"&&u.reverse();const g=u.indexOf(f.currentTarget);u=s.loop?Re(u,g+1):u.slice(g+1)}setTimeout(()=>K(u))}})})))}),ve={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ge(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function we(e,n,o){const r=ge(e.key,o);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ve[r]}function K(e){const n=document.activeElement;for(const o of e)if(o===n||(o.focus(),document.activeElement!==n))return}function Re(e,n){return e.map((o,r)=>e[(n+r)%e.length])}const Ee=be,_e=me,U="Radio",[Ce,B]=k(U),[he,Ie]=Ce(U),xe=t.forwardRef((e,n)=>{const{__scopeRadio:o,name:r,checked:a=!1,required:c,disabled:i,value:s="on",onCheck:l,...$}=e,[b,p]=t.useState(null),f=S(n,u=>p(u)),d=t.useRef(!1),v=b?Boolean(b.closest("form")):!0;return t.createElement(he,{scope:o,checked:a,disabled:i},t.createElement(C.button,w({type:"button",role:"radio","aria-checked":a,"data-state":z(a),"data-disabled":i?"":void 0,disabled:i,value:s},$,{ref:f,onClick:R(e.onClick,u=>{a||l==null||l(),v&&(d.current=u.isPropagationStopped(),d.current||u.stopPropagation())})})),v&&t.createElement(ke,{control:b,bubbles:!d.current,name:r,value:s,checked:a,required:c,disabled:i,style:{transform:"translateX(-100%)"}}))}),Fe="RadioIndicator",ye=t.forwardRef((e,n)=>{const{__scopeRadio:o,forceMount:r,...a}=e,c=Ie(Fe,o);return t.createElement(ce,{present:r||c.checked},t.createElement(C.span,w({"data-state":z(c.checked),"data-disabled":c.disabled?"":void 0},a,{ref:n})))}),ke=e=>{const{control:n,checked:o,bubbles:r=!0,...a}=e,c=t.useRef(null),i=ae(o),s=re(n);return t.useEffect(()=>{const l=c.current,$=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor($,"checked").set;if(i!==o&&p){const f=new Event("click",{bubbles:r});p.call(l,o),l.dispatchEvent(f)}},[i,o,r]),t.createElement("input",w({type:"radio","aria-hidden":!0,defaultChecked:o},a,{tabIndex:-1,ref:c,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function z(e){return e?"checked":"unchecked"}const Se=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],j="RadioGroup",[Ae,rt]=k(j,[q,B]),Y=q(),H=B(),[Te,Ge]=Ae(j),Pe=t.forwardRef((e,n)=>{const{__scopeRadioGroup:o,name:r,defaultValue:a,value:c,required:i=!1,disabled:s=!1,orientation:l,dir:$,loop:b=!0,onValueChange:p,...f}=e,d=Y(o),v=V($),[u,g]=N({prop:c,defaultProp:a,onChange:p});return t.createElement(Te,{scope:o,name:r,required:i,disabled:s,value:u,onValueChange:g},t.createElement(Ee,w({asChild:!0},d,{orientation:l,dir:v,loop:b}),t.createElement(C.div,w({role:"radiogroup","aria-required":i,"aria-orientation":l,"data-disabled":s?"":void 0,dir:v},f,{ref:n}))))}),De="RadioGroupItem",Ne=t.forwardRef((e,n)=>{const{__scopeRadioGroup:o,disabled:r,...a}=e,c=Ge(De,o),i=c.disabled||r,s=Y(o),l=H(o),$=t.useRef(null),b=S(n,$),p=c.value===a.value,f=t.useRef(!1);return t.useEffect(()=>{const d=u=>{Se.includes(u.key)&&(f.current=!0)},v=()=>f.current=!1;return document.addEventListener("keydown",d),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",v)}},[]),t.createElement(_e,w({asChild:!0},s,{focusable:!i,active:p}),t.createElement(xe,w({disabled:i,required:c.required,checked:p},l,a,{name:c.name,ref:b,onCheck:()=>c.onValueChange(a.value),onKeyDown:R(d=>{d.key==="Enter"&&d.preventDefault()}),onFocus:R(a.onFocus,()=>{var d;f.current&&((d=$.current)===null||d===void 0||d.click())})})))}),Ve=t.forwardRef((e,n)=>{const{__scopeRadioGroup:o,...r}=e,a=H(o);return t.createElement(ye,w({},a,r,{ref:n}))}),Oe=Pe,Me=Ne,Le=Ve;var qe=M({defaultClassName:"io59uy6 tnw2be1cs tnw2be1g0 tnw2be1ew tnw2be1do tnw2be20 tnw2be58 tnw2be2j8",variantClassNames:{size:{sm:"io59uy7",lg:"io59uy8"}},defaultVariants:{},compoundVariants:[]}),Ke=M({defaultClassName:"tnw2be194 tnw2be19s tnw2be17s tnw2be18g tnw2be2bk tnw2be24w tnw2be1rk tnw2be1y8 tnw2be2ew tnw2be288 tnw2be1uw tnw2be21k tnw2be1iw tnw2be2lq tnw2be2lm tnw2be2ma",variantClassNames:{size:{sm:"io59uy3 tnw2be160 tnw2be16c tnw2be16o tnw2be170",lg:"io59uy4 tnw2be164 tnw2be16g tnw2be16s tnw2be174"}},defaultVariants:{},compoundVariants:[]});const Ue=e=>{const{id:n,label:o,size:r="sm",value:a,disabled:c}=e;return _(O,{alignItems:"center",children:_(se,{disabled:c,display:"flex",id:n,label:o,labelLocation:"right",children:_(Me,{className:Ke({size:r}),value:a,id:n,disabled:c,children:_(Le,{className:qe({size:r})})})})})},D=t.forwardRef((e,n)=>{const{flexDirection:o="column",disabled:r=!1,gap:a="2",name:c,options:i,size:s="sm",...l}=e;return _(Oe,{disabled:r,name:c,ref:n,...l,children:_(O,{flexDirection:o,gap:a,children:i.map(({label:$,value:b,disabled:p})=>_(Ue,{id:`${c}-${b}`,label:$,size:s,value:b,disabled:p},b))})})});try{D.displayName="RadioGroup",D.__docgenInfo={description:"",displayName:"RadioGroup",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'ConditionalStyle<Values<("column" | "column-reverse" | "row" | "row-reverse")[], { defaultClass: string; conditions: { sm: string; md: string; lg: string; xl: string; }; }>>'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ '0': string; '0.25': string; '0.5': string; '1': string; '1.5': string; '2': string; '3': string; '4': string; '5': string; '6': string; '8': string; '10': string; '12': string; '14': string; '16': string; }, CSSVarFunction>, { ...; }>>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}}}}}catch{}export{q as $,D as R,Ee as a,_e as b};
//# sourceMappingURL=RadioGroup-577c66a9.js.map
