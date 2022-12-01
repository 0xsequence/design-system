var S=Object.defineProperty;var p=(e,t)=>S(e,"name",{value:t,configurable:!0});import{$ as A,b as V,c as v,_ as u,d as x}from"./index.module.4c1372dc.js";import{r,a as g,j as m}from"./jsx-runtime.5a74c576.js";import{$ as h,a as M,b as R}from"./index.module.620d04bd.js";import{$ as N}from"./index.module.66c0e02b.js";import{$ as w}from"./index.module.9d7fefea.js";import{$ as P}from"./index.module.425e4a5d.js";import{T as F}from"./Text.6ba9b7f9.js";/* empty css                             */const C="Tabs",[O,de]=A(C,[h]),E=h(),[D,T]=O(C),G=r.exports.forwardRef((e,t)=>{const{__scopeTabs:s,value:o,onValueChange:c,defaultValue:b,orientation:n="horizontal",dir:l,activationMode:f="automatic",...a}=e,i=w(l),[d,$]=V({prop:o,onChange:c,defaultProp:b});return r.exports.createElement(D,{scope:s,baseId:P(),value:d,onValueChange:$,orientation:n,dir:i,activationMode:f},r.exports.createElement(v.div,u({dir:i,"data-orientation":n},a,{ref:t})))}),K="TabsList",B=r.exports.forwardRef((e,t)=>{const{__scopeTabs:s,loop:o=!0,...c}=e,b=T(K,s),n=E(s);return r.exports.createElement(M,u({asChild:!0},n,{orientation:b.orientation,dir:b.dir,loop:o}),r.exports.createElement(v.div,u({role:"tablist","aria-orientation":b.orientation},c,{ref:t})))}),L="TabsTrigger",j=r.exports.forwardRef((e,t)=>{const{__scopeTabs:s,value:o,disabled:c=!1,...b}=e,n=T(L,s),l=E(s),f=I(n.baseId,o),a=y(n.baseId,o),i=o===n.value;return r.exports.createElement(R,u({asChild:!0},l,{focusable:!c,active:i}),r.exports.createElement(v.button,u({type:"button",role:"tab","aria-selected":i,"aria-controls":a,"data-state":i?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:f},b,{ref:t,onMouseDown:x(e.onMouseDown,d=>{!c&&d.button===0&&d.ctrlKey===!1?n.onValueChange(o):d.preventDefault()}),onKeyDown:x(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&n.onValueChange(o)}),onFocus:x(e.onFocus,()=>{const d=n.activationMode!=="manual";!i&&!c&&d&&n.onValueChange(o)})})))}),k="TabsContent",q=r.exports.forwardRef((e,t)=>{const{__scopeTabs:s,value:o,forceMount:c,children:b,...n}=e,l=T(k,s),f=I(l.baseId,o),a=y(l.baseId,o),i=o===l.value,d=r.exports.useRef(i);return r.exports.useEffect(()=>{const $=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame($)},[]),r.exports.createElement(N,{present:c||i},({present:$})=>r.exports.createElement(v.div,u({"data-state":i?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":f,hidden:!$,id:a,tabIndex:0},n,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),$&&b))});function I(e,t){return`${e}-trigger-${t}`}p(I,"$69cb30bb0017df05$var$makeTriggerId");function y(e,t){return`${e}-content-${t}`}p(y,"$69cb30bb0017df05$var$makeContentId");const Y=G,z=B,W=j,X=q;var H="_10c8o0n1",J="_10c8o0n3",Q="_10c8o0n2",U="_10c8o0n0";const _=p(e=>{const{tabs:t,onValueChange:s,...o}=e,[c,b]=r.exports.useState(o.defaultValue);if(!t.length)return null;const n=100/t.length,l=t.findIndex(a=>a.value===c);return g(Y,{onValueChange:p(a=>{b(a),s==null||s(a)},"handleValueChange"),...o,children:[g(z,{className:H,children:[m("div",{className:Q,children:m("div",{className:J,style:{width:`${n}%`,transform:`translateX(${l*100}%)`}})}),t.map(a=>m(W,{className:U,value:a.value,children:m(F,{variant:"medium",children:a.title})},a.value))]}),t.map(a=>m(X,{value:a.value,children:a.content},a.value))]})},"Tabs");try{_.displayName="Tabs",_.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabItemProps[]"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:_.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch{}export{_ as T};
//# sourceMappingURL=Tabs.c04ba834.js.map
