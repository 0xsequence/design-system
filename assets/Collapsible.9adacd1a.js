var I=Object.defineProperty;var x=(t,n)=>I(t,"name",{value:n,configurable:!0});import{$ as L,a as j,b as _,_ as b,c as k,d as B,e as M}from"./index.module.1e6815e9.js";import{r as e,j as c,a as S}from"./jsx-runtime.e9e872a3.js";import{$ as D}from"./index.module.42c60f9b.js";import{$ as F}from"./index.module.1f8be29f.js";import{c as q,B as G}from"./Box.329586f8.js";import{T as H}from"./Text.b7f24ee0.js";import{S as K}from"./WarningIcon.8d5b9087.js";/* empty css                             */import{m as C,A as V}from"./index.cdafd52a.js";const P="Collapsible",[Y,me]=L(P),[z,h]=Y(P),J=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,open:s,defaultOpen:o,disabled:r,onOpenChange:l,...u}=t,[d=!1,p]=j({prop:s,defaultProp:o,onChange:l});return e.exports.createElement(z,{scope:a,disabled:r,contentId:F(),open:d,onOpenToggle:e.exports.useCallback(()=>p($=>!$),[p])},e.exports.createElement(_.div,b({"data-state":w(d),"data-disabled":r?"":void 0},u,{ref:n})))}),Q="CollapsibleTrigger",U=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,...s}=t,o=h(Q,a);return e.exports.createElement(_.button,b({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":w(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},s,{ref:n,onClick:k(t.onClick,o.onOpenToggle)}))}),T="CollapsibleContent",W=e.exports.forwardRef((t,n)=>{const{forceMount:a,...s}=t,o=h(T,t.__scopeCollapsible);return e.exports.createElement(D,{present:a||o.open},({present:r})=>e.exports.createElement(X,b({},s,{ref:n,present:r})))}),X=e.exports.forwardRef((t,n)=>{const{__scopeCollapsible:a,present:s,children:o,...r}=t,l=h(T,a),[u,d]=e.exports.useState(s),p=e.exports.useRef(null),$=B(n,p),v=e.exports.useRef(0),y=v.current,R=e.exports.useRef(0),E=R.current,m=l.open||u,O=e.exports.useRef(m),f=e.exports.useRef();return e.exports.useEffect(()=>{const i=requestAnimationFrame(()=>O.current=!1);return()=>cancelAnimationFrame(i)},[]),M(()=>{const i=p.current;if(i){f.current=f.current||{transitionDuration:i.style.transitionDuration,animationName:i.style.animationName},i.style.transitionDuration="0s",i.style.animationName="none";const N=i.getBoundingClientRect();v.current=N.height,R.current=N.width,O.current||(i.style.transitionDuration=f.current.transitionDuration,i.style.animationName=f.current.animationName),d(s)}},[l.open,s]),e.exports.createElement(_.div,b({"data-state":w(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!m},r,{ref:$,style:{["--radix-collapsible-content-height"]:y?`${y}px`:void 0,["--radix-collapsible-content-width"]:E?`${E}px`:void 0,...t.style}}),m&&o)});function w(t){return t?"open":"closed"}x(w,"$409067139f391064$var$getState");const Z=J,ee=U,te=W;var A="65px",ne="_4j62fl5 tnw2beb4 tnw2beck tnw2be7s tnw2be9o tnw2be8",oe="_4j62fl6",ae="_4j62fl1 tnw2bens tnw2beog tnw2bemg tnw2ben4 tnw2bev8 tnw2bevk tnw2beyc tnw2bes8 tnw2befk",se="_4j62fl3 tnw2bens tnw2beog tnw2bemg tnw2ben4 tnw2be88 tnw2be9o tnw2beb4 tnw2beck tnw2berc tnw2beu4 tnw2bewu tnw2be8 tnw2be1g6 tnw2bew2";const g=x(t=>{const{defaultOpen:n,label:a,children:s,className:o}=t,[r,l]=e.exports.useState(n);return c(Z,{className:q(ae,o),defaultOpen:n,onOpenChange:l,asChild:!0,children:S(C.div,{initial:{height:n?"auto":A},animate:{height:r?"auto":A},transition:{ease:"easeOut",duration:.3},children:[S(ee,{className:se,children:[typeof a=="string"?c(H,{variant:"medium",color:"textBody",children:a}):a,c(G,{as:C.div,position:"absolute",right:"0",marginRight:"4",initial:{rotate:n?-90:0},animate:{rotate:r?-90:0},transition:{ease:"linear",duration:.1},children:c(K,{className:oe,color:"textFaded"})})]}),c(V,{children:r&&c(te,{className:ne,asChild:!0,forceMount:!0,children:c(C.div,{initial:{opacity:n?1:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeOut",duration:.3},children:s})})})]})})},"Collapsible");try{g.displayName="Collapsible",g.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:g.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch{}export{g as C};
//# sourceMappingURL=Collapsible.9adacd1a.js.map
