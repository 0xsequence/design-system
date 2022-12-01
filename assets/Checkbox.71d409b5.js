var P=Object.defineProperty;var u=(e,a)=>P(e,"name",{value:a,configurable:!0});import{$ as O,a as V,b as q,c as g,_ as k,d as y}from"./index.module.4c1372dc.js";import{r as o,j as m}from"./jsx-runtime.5a74c576.js";import{$ as A}from"./index.module.6f921187.js";import{$ as L}from"./index.module.95cdf3d2.js";import{$ as B}from"./index.module.66c0e02b.js";import{L as T}from"./LabelledField.a10dcee1.js";import{S as D}from"./WarningIcon.060345c6.js";/* empty css                             */import{c as E}from"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";const S="Checkbox",[K,de]=O(S),[M,z]=K(S),j=o.exports.forwardRef((e,a)=>{const{__scopeCheckbox:t,name:c,checked:s,defaultChecked:n,required:d,disabled:r,value:b="on",onCheckedChange:$,...w}=e,[p,x]=o.exports.useState(null),R=V(a,l=>x(l)),h=o.exports.useRef(!1),v=p?Boolean(p.closest("form")):!0,[f=!1,N]=q({prop:s,defaultProp:n,onChange:$});return o.exports.createElement(M,{scope:t,state:f,disabled:r},o.exports.createElement(g.button,k({type:"button",role:"checkbox","aria-checked":i(f)?"mixed":f,"aria-required":d,"data-state":I(f),"data-disabled":r?"":void 0,disabled:r,value:b},w,{ref:R,onKeyDown:y(e.onKeyDown,l=>{l.key==="Enter"&&l.preventDefault()}),onClick:y(e.onClick,l=>{N(_=>i(_)?!0:!_),v&&(h.current=l.isPropagationStopped(),h.current||l.stopPropagation())})})),v&&o.exports.createElement(X,{control:p,bubbles:!h.current,name:c,value:b,checked:f,required:d,disabled:r,style:{transform:"translateX(-100%)"}}))}),F="CheckboxIndicator",H=o.exports.forwardRef((e,a)=>{const{__scopeCheckbox:t,forceMount:c,...s}=e,n=z(F,t);return o.exports.createElement(B,{present:c||i(n.state)||n.state===!0},o.exports.createElement(g.span,k({"data-state":I(n.state),"data-disabled":n.disabled?"":void 0},s,{ref:a,style:{pointerEvents:"none",...e.style}})))}),X=u(e=>{const{control:a,checked:t,bubbles:c=!0,...s}=e,n=o.exports.useRef(null),d=A(t),r=L(a);return o.exports.useEffect(()=>{const b=n.current,$=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor($,"checked").set;if(d!==t&&p){const x=new Event("click",{bubbles:c});b.indeterminate=i(t),p.call(b,i(t)?!1:t),b.dispatchEvent(x)}},[d,t,c]),o.exports.createElement("input",k({type:"checkbox","aria-hidden":!0,defaultChecked:i(t)?!1:t},s,{tabIndex:-1,ref:n,style:{...e.style,...r,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function i(e){return e==="indeterminate"}u(i,"$e698a72e93240346$var$isIndeterminate");function I(e){return i(e)?"indeterminate":e?"checked":"unchecked"}u(I,"$e698a72e93240346$var$getState");const Y=j,G=H;var J=E({defaultClassName:"tnw2bekw tnw2bel8 tnw2belk tnw2belw tnw2benk tnw2beo8 tnw2bem8 tnw2bemw tnw2be19o tnw2be196 tnw2be12c tnw2be18o tnw2berc tnw2beu4 tnw2bet0 tnw2be15c tnw2be1h0 tnw2be1gy tnw2be1gq",variantClassNames:{size:{sm:"_1c9x66f1",lg:"_1c9x66f2"}},defaultVariants:{},compoundVariants:[]}),Q=E({defaultClassName:"tnw2be1dc tnw2be100",variantClassNames:{size:{sm:"_1c9x66f4",lg:"_1c9x66f5"}},defaultVariants:{},compoundVariants:[]});const U=u(({size:e="sm"})=>m(G,{className:Q({size:e}),children:m(D,{size:e})}),"Indicator"),C=o.exports.forwardRef(({disabled:e=!1,id:a,name:t,label:c="",labelLocation:s="hidden",size:n="sm",...d},r)=>m(T,{forId:a!=null?a:t,label:c,labelLocation:s,whiteSpace:"nowrap",children:m(Y,{className:J({size:n}),disabled:e,id:a!=null?a:t,name:t,ref:r,...d,children:m(U,{})})}));try{C.displayName="Checkbox",C.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},labelLocation:{defaultValue:{value:"hidden"},description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:C.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch{}export{C};
//# sourceMappingURL=Checkbox.71d409b5.js.map
