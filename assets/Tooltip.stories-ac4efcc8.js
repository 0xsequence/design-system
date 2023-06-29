import{j as h}from"./jsx-runtime-5c44f2f2.js";import{a as F,$ as V,_ as g,c as K,e as U}from"./index-bfc13c15.js";import{r}from"./index-32f9f3e1.js";import{a as Y,c as T}from"./index-b52b8797.js";import{$ as W}from"./index-c00714d7.js";import{$ as X}from"./index-15d4be11.js";import{$ as G,a as z,b as J,c as Q,d as Z}from"./index-fdd50b46.js";import{$ as ee}from"./index-7628a962.js";import{a as te}from"./index-3e442425.js";/* empty css                            *//* empty css                              */import"./Box-403628ef.js";import{T as oe}from"./Text-599edd8f.js";import{B as re}from"./Button-84f8038e.js";import"./index-81ed4395.js";import"./index-8354a9f7.js";import"./typography-f274f330.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";const[P,ze]=F("Tooltip",[G]),D=G(),ne="TooltipProvider",ae=700,k="tooltip.open",[ce,A]=P(ne),se=t=>{const{__scopeTooltip:o,delayDuration:e=ae,skipDelayDuration:n=300,disableHoverableContent:a=!1,children:l}=t,[s,u]=r.useState(!0),c=r.useRef(!1),f=r.useRef(0);return r.useEffect(()=>{const i=f.current;return()=>window.clearTimeout(i)},[]),r.createElement(ce,{scope:o,isOpenDelayed:s,delayDuration:e,onOpen:r.useCallback(()=>{window.clearTimeout(f.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>u(!0),n)},[n]),isPointerInTransitRef:c,onPointerInTransitChange:r.useCallback(i=>{c.current=i},[]),disableHoverableContent:a},l)},H="Tooltip",[le,R]=P(H),ie=t=>{const{__scopeTooltip:o,children:e,open:n,defaultOpen:a=!1,onOpenChange:l,disableHoverableContent:s,delayDuration:u}=t,c=A(H,t.__scopeTooltip),f=D(o),[i,d]=r.useState(null),m=X(),p=r.useRef(0),$=s??c.disableHoverableContent,b=u??c.delayDuration,v=r.useRef(!1),[y=!1,x]=Y({prop:n,defaultProp:a,onChange:M=>{M?(c.onOpen(),document.dispatchEvent(new CustomEvent(k))):c.onClose(),l==null||l(M)}}),C=r.useMemo(()=>y?v.current?"delayed-open":"instant-open":"closed",[y]),E=r.useCallback(()=>{window.clearTimeout(p.current),v.current=!1,x(!0)},[x]),w=r.useCallback(()=>{window.clearTimeout(p.current),x(!1)},[x]),I=r.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{v.current=!0,x(!0)},b)},[b,x]);return r.useEffect(()=>()=>window.clearTimeout(p.current),[]),r.createElement(z,f,r.createElement(le,{scope:o,contentId:m,open:y,stateAttribute:C,trigger:i,onTriggerChange:d,onTriggerEnter:r.useCallback(()=>{c.isOpenDelayed?I():E()},[c.isOpenDelayed,I,E]),onTriggerLeave:r.useCallback(()=>{$?w():window.clearTimeout(p.current)},[w,$]),onOpen:E,onClose:w,disableHoverableContent:$},e))},j="TooltipTrigger",ue=r.forwardRef((t,o)=>{const{__scopeTooltip:e,...n}=t,a=R(j,e),l=A(j,e),s=D(e),u=r.useRef(null),c=V(o,u,a.onTriggerChange),f=r.useRef(!1),i=r.useRef(!1),d=r.useCallback(()=>f.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),r.createElement(J,g({asChild:!0},s),r.createElement(K.button,g({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},n,{ref:c,onPointerMove:T(t.onPointerMove,m=>{m.pointerType!=="touch"&&!i.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),i.current=!0)}),onPointerLeave:T(t.onPointerLeave,()=>{a.onTriggerLeave(),i.current=!1}),onPointerDown:T(t.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:T(t.onFocus,()=>{f.current||a.onOpen()}),onBlur:T(t.onBlur,a.onClose),onClick:T(t.onClick,a.onClose)})))}),fe="TooltipPortal",[Je,de]=P(fe,{forceMount:void 0}),_="TooltipContent",pe=r.forwardRef((t,o)=>{const e=de(_,t.__scopeTooltip),{forceMount:n=e.forceMount,side:a="top",...l}=t,s=R(_,t.__scopeTooltip);return r.createElement(ee,{present:n||s.open},s.disableHoverableContent?r.createElement(B,g({side:a},l,{ref:o})):r.createElement($e,g({side:a},l,{ref:o})))}),$e=r.forwardRef((t,o)=>{const e=R(_,t.__scopeTooltip),n=A(_,t.__scopeTooltip),a=r.useRef(null),l=V(o,a),[s,u]=r.useState(null),{trigger:c,onClose:f}=e,i=a.current,{onPointerInTransitChange:d}=n,m=r.useCallback(()=>{u(null),d(!1)},[d]),p=r.useCallback(($,b)=>{const v=$.currentTarget,y={x:$.clientX,y:$.clientY},x=he(y,v.getBoundingClientRect()),C=ye(y,x),E=ge(b.getBoundingClientRect()),w=Ce([...C,...E]);u(w),d(!0)},[d]);return r.useEffect(()=>()=>m(),[m]),r.useEffect(()=>{if(c&&i){const $=v=>p(v,i),b=v=>p(v,c);return c.addEventListener("pointerleave",$),i.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",$),i.removeEventListener("pointerleave",b)}}},[c,i,p,m]),r.useEffect(()=>{if(s){const $=b=>{const v=b.target,y={x:b.clientX,y:b.clientY},x=(c==null?void 0:c.contains(v))||(i==null?void 0:i.contains(v)),C=!Te(y,s);x?m():C&&(m(),f())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,i,s,f,m]),r.createElement(B,g({},t,{ref:l}))}),[me,ve]=P(H,{isInside:!1}),B=r.forwardRef((t,o)=>{const{__scopeTooltip:e,children:n,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:s,...u}=t,c=R(_,e),f=D(e),{onClose:i}=c;return r.useEffect(()=>(document.addEventListener(k,i),()=>document.removeEventListener(k,i)),[i]),r.useEffect(()=>{if(c.trigger){const d=m=>{const p=m.target;p!=null&&p.contains(c.trigger)&&i()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[c.trigger,i]),r.createElement(W,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:i},r.createElement(Q,g({"data-state":c.stateAttribute},f,u,{ref:o,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),r.createElement(U,null,n),r.createElement(me,{scope:e,isInside:!0},r.createElement(te,{id:c.contentId,role:"tooltip"},a||n))))}),be="TooltipArrow",xe=r.forwardRef((t,o)=>{const{__scopeTooltip:e,...n}=t,a=D(e);return ve(be,e).isInside?null:r.createElement(Z,g({},a,n,{ref:o}))});function he(t,o){const e=Math.abs(o.top-t.y),n=Math.abs(o.bottom-t.y),a=Math.abs(o.right-t.x),l=Math.abs(o.left-t.x);switch(Math.min(e,n,a,l)){case l:return"left";case a:return"right";case e:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function ye(t,o,e=5){const n=[];switch(o){case"top":n.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":n.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":n.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":n.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return n}function ge(t){const{top:o,right:e,bottom:n,left:a}=t;return[{x:a,y:o},{x:e,y:o},{x:e,y:n},{x:a,y:n}]}function Te(t,o){const{x:e,y:n}=t;let a=!1;for(let l=0,s=o.length-1;l<o.length;s=l++){const u=o[l].x,c=o[l].y,f=o[s].x,i=o[s].y;c>n!=i>n&&e<(f-u)*(n-c)/(i-c)+u&&(a=!a)}return a}function Ce(t){const o=t.slice();return o.sort((e,n)=>e.x<n.x?-1:e.x>n.x?1:e.y<n.y?-1:e.y>n.y?1:0),Ee(o)}function Ee(t){if(t.length<=1)return t.slice();const o=[];for(let n=0;n<t.length;n++){const a=t[n];for(;o.length>=2;){const l=o[o.length-1],s=o[o.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))o.pop();else break}o.push(a)}o.pop();const e=[];for(let n=t.length-1;n>=0;n--){const a=t[n];for(;e.length>=2;){const l=e[e.length-1],s=e[e.length-2];if((l.x-s.x)*(a.y-s.y)>=(l.y-s.y)*(a.x-s.x))e.pop();else break}e.push(a)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const we=se,_e=ie,Oe=ue,Pe=pe,De=xe;var Re="q888p21 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr1ww fyvr1ys fyvr11ms fyvr11rb fyvr1uw fyvr1sw";const L=t=>{const{align:o="center",children:e,delayDuration:n=0,disabled:a=!1,hOffset:l=0,message:s,side:u="top",vOffset:c=0}=t;return a?h.jsx(h.Fragment,{children:e}):h.jsx(we,{children:h.jsxs(_e,{delayDuration:n,children:[h.jsx(Oe,{asChild:!0,children:e}),h.jsxs(Pe,{className:Re,side:u,align:o,sideOffset:c,alignOffset:l,children:[h.jsx(oe,{variant:"small",fontWeight:"medium",color:"text80",children:s}),h.jsx(De,{offset:12,width:10,height:5})]})]})})};try{L.displayName="Tooltip",L.__docgenInfo={description:"",displayName:"Tooltip",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},delayDuration:{defaultValue:null,description:"",name:"delayDuration",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hOffset:{defaultValue:null,description:"",name:"hOffset",required:!1,type:{name:"number"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Element"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},vOffset:{defaultValue:null,description:"",name:"vOffset",required:!1,type:{name:"number"}}}}}catch{}const Qe={title:"Components/Tooltip",component:L},O={args:{message:"Hello, world!",children:h.jsx(re,{label:"Hover me"}),disabled:!1}};var N,S,q;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    message: 'Hello, world!',
    children: <Button label="Hover me" />,
    disabled: false
  }
}`,...(q=(S=O.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const Ze=["Default"];export{O as Default,Ze as __namedExportsOrder,Qe as default};
//# sourceMappingURL=Tooltip.stories-ac4efcc8.js.map
