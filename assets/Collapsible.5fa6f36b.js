var I=Object.defineProperty;var x=(t,n)=>I(t,"name",{value:n,configurable:!0});import{$ as j,a as L,b as _,_ as b,c as M,d as k,e as D}from"./index.module.661b283b.js";import{r as e,j as c,a as N}from"./jsx-runtime.d0578377.js";import{$ as B,a as F}from"./index.module.09d38a34.js";import{c as V}from"./Box.948ea6da.js";import{T as q}from"./Text.750447f6.js";import{S as G}from"./TransactionIcon.d79d9e84.js";/* empty css                             */import{c as H}from"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import{m as S,A as K}from"./index.34596e48.js";const P="Collapsible",[Y,xe]=j(P),[z,h]=Y(P),J=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,open:s,defaultOpen:o,disabled:r,onOpenChange:i,...u}=t,[d=!1,p]=L({prop:s,defaultProp:o,onChange:i});return e.exports.createElement(z,{scope:a,disabled:r,contentId:B(),open:d,onOpenToggle:e.exports.useCallback(()=>p($=>!$),[p])},e.exports.createElement(_.div,b({"data-state":w(d),"data-disabled":r?"":void 0},u,{ref:n})))}),Q="CollapsibleTrigger",U=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,...s}=t,o=h(Q,a);return e.exports.createElement(_.button,b({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":w(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},s,{ref:n,onClick:M(t.onClick,o.onOpenToggle)}))}),T="CollapsibleContent",W=e.exports.forwardRef((t,n)=>{const{forceMount:a,...s}=t,o=h(T,t.__scopeCollapsible);return e.exports.createElement(F,{present:a||o.open},({present:r})=>e.exports.createElement(X,b({},s,{ref:n,present:r})))}),X=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,present:s,children:o,...r}=t,i=h(T,a),[u,d]=e.exports.useState(s),p=e.exports.useRef(null),$=k(n,p),g=e.exports.useRef(0),v=g.current,y=e.exports.useRef(0),R=y.current,m=i.open||u,E=e.exports.useRef(m),f=e.exports.useRef();return e.exports.useEffect(()=>{const l=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(l)},[]),D(()=>{const l=p.current;if(l){f.current=f.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const O=l.getBoundingClientRect();g.current=O.height,y.current=O.width,E.current||(l.style.transitionDuration=f.current.transitionDuration,l.style.animationName=f.current.animationName),d(s)}},[i.open,s]),e.exports.createElement(_.div,b({"data-state":w(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!m},r,{ref:$,style:{["--radix-collapsible-content-height"]:v?`${v}px`:void 0,["--radix-collapsible-content-width"]:R?`${R}px`:void 0,...t.style}}),m&&o)});function w(t){return t?"open":"closed"}x(w,"$409067139f391064$var$getState");const Z=J,ee=U,te=W;var A="65px",ne="_4j62fl5 tnw2beb4 tnw2beck tnw2be7s tnw2be9o",oe=H({defaultClassName:"_4j62fl8",variantClassNames:{expanded:{true:"_4j62fl9"}},defaultVariants:{},compoundVariants:[]}),ae="_4j62fl7 tnw2ber0 tnw2bets",se="_4j62fl1 tnw2beng tnw2beo0 tnw2bemc tnw2bemw tnw2beuw tnw2bev8 tnw2bexh tnw2berw tnw2befk",re="_4j62fl3 tnw2be88 tnw2be9o tnw2beb4 tnw2beck tnw2ber0 tnw2bets tnw2bewd";const C=x(t=>{const{defaultOpen:n,label:a,children:s,className:o}=t,[r,i]=e.exports.useState(n);return c(Z,{className:V(se,o),defaultOpen:n,onOpenChange:i,asChild:!0,children:N(S.div,{initial:{height:n?"auto":A},animate:{height:r?"auto":A},transition:{ease:"easeOut",duration:.3},children:[N(ee,{className:re,children:[typeof a=="string"?c("div",{className:ae,children:c(q,{variant:"medium",color:"white",children:a})}):a,c("div",{className:oe({expanded:r}),children:c(G,{})})]}),c(K,{children:r&&c(te,{className:ne,asChild:!0,forceMount:!0,children:c(S.div,{initial:{opacity:n?1:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeOut",duration:.3},children:s})})})]})})},"Collapsible");try{C.displayName="Collapsible",C.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:C.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch{}export{C};
//# sourceMappingURL=Collapsible.5fa6f36b.js.map
