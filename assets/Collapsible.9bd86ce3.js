var I=Object.defineProperty;var x=(t,n)=>I(t,"name",{value:n,configurable:!0});import{$ as L,a as j,b as _,_ as b,c as B,d as M,e as k}from"./index.module.3375bafb.js";import{r as e,j as c,a as S}from"./jsx-runtime.4ca9c3c4.js";import{$ as D,a as F}from"./index.module.78d50973.js";import{c as q,B as G}from"./Box.0fa68525.js";import{T as H}from"./Text.ebf37340.js";import{S as K}from"./WarningIcon.c96f0446.js";/* empty css                             */import{m as C,A as V}from"./index.96439aad.js";const P="Collapsible",[Y,$e]=L(P),[z,h]=Y(P),J=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,open:s,defaultOpen:o,disabled:r,onOpenChange:l,...u}=t,[d=!1,p]=j({prop:s,defaultProp:o,onChange:l});return e.exports.createElement(z,{scope:a,disabled:r,contentId:D(),open:d,onOpenToggle:e.exports.useCallback(()=>p($=>!$),[p])},e.exports.createElement(_.div,b({"data-state":g(d),"data-disabled":r?"":void 0},u,{ref:n})))}),Q="CollapsibleTrigger",U=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,...s}=t,o=h(Q,a);return e.exports.createElement(_.button,b({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":g(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},s,{ref:n,onClick:B(t.onClick,o.onOpenToggle)}))}),T="CollapsibleContent",W=e.exports.forwardRef((t,n)=>{const{forceMount:a,...s}=t,o=h(T,t.__scopeCollapsible);return e.exports.createElement(F,{present:a||o.open},({present:r})=>e.exports.createElement(X,b({},s,{ref:n,present:r})))}),X=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,present:s,children:o,...r}=t,l=h(T,a),[u,d]=e.exports.useState(s),p=e.exports.useRef(null),$=M(n,p),v=e.exports.useRef(0),y=v.current,R=e.exports.useRef(0),E=R.current,m=l.open||u,O=e.exports.useRef(m),f=e.exports.useRef();return e.exports.useEffect(()=>{const i=requestAnimationFrame(()=>O.current=!1);return()=>cancelAnimationFrame(i)},[]),k(()=>{const i=p.current;if(i){f.current=f.current||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const N=i.getBoundingClientRect();v.current=N.height,R.current=N.width,O.current||(i.style.transitionDuration=f.current.transitionDuration,i.style.animationName=f.current.animationName),d(s)}},[l.open,s]),e.exports.createElement(_.div,b({"data-state":g(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!m},r,{ref:$,style:{["--radix-collapsible-content-height"]:y?`${y}px`:void 0,["--radix-collapsible-content-width"]:E?`${E}px`:void 0,...t.style}}),m&&o)});function g(t){return t?"open":"closed"}x(g,"$409067139f391064$var$getState");const Z=J,ee=U,te=W;var A="65px",ne="_4j62fl5 tnw2beb4 tnw2beck tnw2be7s tnw2be9o tnw2be8",oe="_4j62fl6",ae="_4j62fl1 tnw2beng tnw2beo0 tnw2bemc tnw2bemw tnw2beuw tnw2bev8 tnw2bexi tnw2berw tnw2befk",se="_4j62fl3 tnw2beng tnw2beo0 tnw2bemc tnw2bemw tnw2be88 tnw2be9o tnw2beb4 tnw2beck tnw2ber0 tnw2bets tnw2bewe tnw2be8 tnw2be1af tnw2bew3";const w=x(t=>{const{defaultOpen:n,label:a,children:s,className:o}=t,[r,l]=e.exports.useState(n);return c(Z,{className:q(ae,o),defaultOpen:n,onOpenChange:l,asChild:!0,children:S(C.div,{initial:{height:n?"auto":A},animate:{height:r?"auto":A},transition:{ease:"easeOut",duration:.3},children:[S(ee,{className:se,children:[typeof a=="string"?c(H,{variant:"medium",color:"textBody",children:a}):a,c(G,{as:C.div,position:"absolute",right:"0",marginRight:"4",initial:{rotate:n?-90:0},animate:{rotate:r?-90:0},transition:{ease:"linear",duration:.1},children:c(K,{className:oe,color:"textFaded"})})]}),c(V,{children:r&&c(te,{className:ne,asChild:!0,forceMount:!0,children:c(C.div,{initial:{opacity:n?1:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeOut",duration:.3},children:s})})})]})})},"Collapsible");try{w.displayName="Collapsible",w.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:w.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch{}export{w as C};
//# sourceMappingURL=Collapsible.9bd86ce3.js.map
