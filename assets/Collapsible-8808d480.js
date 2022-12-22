var Y=Object.defineProperty;var _=(e,o)=>Y(e,"name",{value:o,configurable:!0});import{$ as j,b as M,c as y,_ as b,d as D,a as V,e as F}from"./index.module-ab67e808.js";import{r as t}from"./index-9b47cd5d.js";import{$ as G}from"./index.module-79bb90fa.js";import{$ as H}from"./index.module-e55af700.js";import{c as W,B as z}from"./Box-51f65dd6.js";import{T as J}from"./Text-cce84919.js";/* empty css                             *//* empty css                              */import{a as Q}from"./WarningIcon-4182fb24.js";import{j as c,a as I}from"./jsx-runtime-6057fa59.js";import{m as $,A as U}from"./index-3d2c79c6.js";const P="Collapsible",[X,he]=j(P),[Z,R]=X(P),ee=t.exports.forwardRef((e,o)=>{const{__scopeCollapsible:a,open:l,defaultOpen:n,disabled:s,onOpenChange:i,...C}=e,[d=!1,p]=M({prop:l,defaultProp:n,onChange:i});return t.exports.createElement(Z,{scope:a,disabled:s,contentId:H(),open:d,onOpenToggle:t.exports.useCallback(()=>p(u=>!u),[p])},t.exports.createElement(y.div,b({"data-state":O(d),"data-disabled":s?"":void 0},C,{ref:o})))}),te="CollapsibleTrigger",oe=t.exports.forwardRef((e,o)=>{const{__scopeCollapsible:a,...l}=e,n=R(te,a);return t.exports.createElement(y.button,b({type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":O(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled},l,{ref:o,onClick:D(e.onClick,n.onOpenToggle)}))}),B="CollapsibleContent",ne=t.exports.forwardRef((e,o)=>{const{forceMount:a,...l}=e,n=R(B,e.__scopeCollapsible);return t.exports.createElement(G,{present:a||n.open},({present:s})=>t.exports.createElement(ae,b({},l,{ref:o,present:s})))}),ae=t.exports.forwardRef((e,o)=>{const{__scopeCollapsible:a,present:l,children:n,...s}=e,i=R(B,a),[C,d]=t.exports.useState(l),p=t.exports.useRef(null),u=V(o,p),S=t.exports.useRef(0),E=S.current,T=t.exports.useRef(0),A=T.current,m=i.open||C,v=t.exports.useRef(m),f=t.exports.useRef();return t.exports.useEffect(()=>{const r=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(r)},[]),F(()=>{const r=p.current;if(r){f.current=f.current||{transitionDuration:r.style.transitionDuration,animationName:r.style.animationName},r.style.transitionDuration="0s",r.style.animationName="none";const N=r.getBoundingClientRect();S.current=N.height,T.current=N.width,v.current||(r.style.transitionDuration=f.current.transitionDuration,r.style.animationName=f.current.animationName),d(l)}},[i.open,l]),t.exports.createElement(y.div,b({"data-state":O(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!m},s,{ref:u,style:{["--radix-collapsible-content-height"]:E?`${E}px`:void 0,["--radix-collapsible-content-width"]:A?`${A}px`:void 0,...e.style}}),m&&n)});function O(e){return e?"open":"closed"}_(O,"$409067139f391064$var$getState");const k=ee,q=oe,K=ne;var L="64px",le="_4j62fl5 tnw2beu8 tnw2bevw tnw2beqg tnw2besk tnw2be20",se="_4j62fl6",re="_4j62fl1 tnw2be18w tnw2be19k tnw2be17k tnw2be188 tnw2be1h4 tnw2be1hg tnw2be1kk tnw2be1do",ie="_4j62fl3 tnw2be18w tnw2be19k tnw2be17k tnw2be188 tnw2beqw tnw2besk tnw2beu8 tnw2bevw tnw2be1cs tnw2be1g0 tnw2be1iw tnw2be20 tnw2be238 tnw2be1i6";const x=_(e=>{const{defaultOpen:o,label:a,children:l,className:n}=e,[s,i]=t.exports.useState(o);return c(k,{className:W(re,n),defaultOpen:o,onOpenChange:i,asChild:!0,children:I($.div,{initial:{height:o?"auto":L},animate:{height:s?"auto":L},transition:{ease:"easeOut",duration:.3},children:[I(q,{className:ie,children:[typeof a=="string"?c(J,{variant:"normal",fontWeight:"bold",color:"text80",children:a}):a,c(z,{as:$.div,position:"absolute",right:"0",marginRight:"4",initial:{rotate:o?-90:0},animate:{rotate:s?-90:0},transition:{ease:"linear",duration:.1},children:c(Q,{className:se,color:"text50"})})]}),c(U,{children:s&&c(K,{className:le,asChild:!0,forceMount:!0,children:c($.div,{initial:{opacity:o?1:0},animate:{opacity:1},exit:{opacity:0},transition:{ease:"easeOut",duration:.3},children:l})})})]})})},"Collapsible"),g=k,h=q,w=K;try{x.displayName="Collapsible",x.__docgenInfo={description:"",displayName:"Collapsible",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | Element"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#Collapsible"]={docgenInfo:x.__docgenInfo,name:"Collapsible",path:"src/components/Collapsible/Collapsible.tsx#Collapsible"})}catch{}try{g.displayName="CollapsibleRoot",g.__docgenInfo={description:"",displayName:"CollapsibleRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#CollapsibleRoot"]={docgenInfo:g.__docgenInfo,name:"CollapsibleRoot",path:"src/components/Collapsible/Collapsible.tsx#CollapsibleRoot"})}catch{}try{h.displayName="CollapsibleTrigger",h.__docgenInfo={description:"",displayName:"CollapsibleTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#CollapsibleTrigger"]={docgenInfo:h.__docgenInfo,name:"CollapsibleTrigger",path:"src/components/Collapsible/Collapsible.tsx#CollapsibleTrigger"})}catch{}try{w.displayName="CollapsibleContent",w.__docgenInfo={description:"",displayName:"CollapsibleContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Collapsible/Collapsible.tsx#CollapsibleContent"]={docgenInfo:w.__docgenInfo,name:"CollapsibleContent",path:"src/components/Collapsible/Collapsible.tsx#CollapsibleContent"})}catch{}export{x as C};
//# sourceMappingURL=Collapsible-8808d480.js.map