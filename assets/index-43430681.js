import{a as De,$ as H,_ as E,b as N,c as Me}from"./index-952c33d0.js";import{r as e}from"./index-7c191284.js";import{r as _e}from"./index-ecbee218.js";import{a as xe,c as I,$ as U,b as ke}from"./index-006d63ff.js";import{$ as Ae}from"./index-15c547c9.js";import{$ as Le}from"./index-df712b54.js";import{$ as He,a as Ve}from"./index-c74368b3.js";import{h as Be,$ as We,a as Fe,b as Ke}from"./Combination-5017d573.js";import{$ as ve}from"./index-8f163998.js";import{$ as ye,a as Ue,b as qe,c as ze}from"./index-b67aff71.js";import{$ as Ge}from"./index-555f5aa0.js";import{$ as Ye}from"./index-f759c523.js";function Se(n,[l,t]){return Math.min(t,Math.max(l,n))}const je=[" ","Enter","ArrowUp","ArrowDown"],Xe=[" ","Enter"],ae="Select",[se,le,Ze]=Ae(ae),[Q,Bt]=De(ae,[Ze,ye]),ge=ye(),[Je,G]=Q(ae),[Qe,et]=Q(ae),tt=n=>{const{__scopeSelect:l,children:t,open:a,defaultOpen:s,onOpenChange:f,value:c,defaultValue:o,onValueChange:r,dir:i,name:m,autoComplete:C,disabled:y,required:_}=n,p=ge(l),[v,S]=e.useState(null),[$,d]=e.useState(null),[g,ee]=e.useState(!1),D=Le(i),[te=!1,T]=xe({prop:a,defaultProp:s,onChange:f}),[O,q]=xe({prop:c,defaultProp:o,onChange:r}),j=e.useRef(null),z=v?!!v.closest("form"):!0,[A,W]=e.useState(new Set),F=Array.from(A).map(P=>P.props.value).join(";");return e.createElement(Ue,p,e.createElement(Je,{required:_,scope:l,trigger:v,onTriggerChange:S,valueNode:$,onValueNodeChange:d,valueNodeHasChildren:g,onValueNodeHasChildrenChange:ee,contentId:ve(),value:O,onValueChange:q,open:te,onOpenChange:T,dir:D,triggerPointerDownPosRef:j,disabled:y},e.createElement(se.Provider,{scope:l},e.createElement(Qe,{scope:n.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{W(L=>new Set(L).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{W(L=>{const V=new Set(L);return V.delete(P),V})},[])},t)),z?e.createElement(Re,{key:F,"aria-hidden":!0,required:_,tabIndex:-1,name:m,autoComplete:C,value:O,onChange:P=>q(P.target.value),disabled:y},O===void 0?e.createElement("option",{value:""}):null,Array.from(A)):null))},ot="SelectTrigger",nt=e.forwardRef((n,l)=>{const{__scopeSelect:t,disabled:a=!1,...s}=n,f=ge(t),c=G(ot,t),o=c.disabled||a,r=H(l,c.onTriggerChange),i=le(t),[m,C,y]=Oe(p=>{const v=i().filter(d=>!d.disabled),S=v.find(d=>d.value===c.value),$=Ne(v,p,S);$!==void 0&&c.onValueChange($.value)}),_=()=>{o||(c.onOpenChange(!0),y())};return e.createElement(qe,E({asChild:!0},f),e.createElement(N.button,E({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:o,"data-disabled":o?"":void 0,"data-placeholder":c.value===void 0?"":void 0},s,{ref:r,onClick:I(s.onClick,p=>{p.currentTarget.focus()}),onPointerDown:I(s.onPointerDown,p=>{const v=p.target;v.hasPointerCapture(p.pointerId)&&v.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(_(),c.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:I(s.onKeyDown,p=>{const v=m.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(v&&p.key===" ")&&je.includes(p.key)&&(_(),p.preventDefault())})})))}),ct="SelectValue",rt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,children:f,placeholder:c,...o}=n,r=G(ct,t),{onValueNodeHasChildrenChange:i}=r,m=f!==void 0,C=H(l,r.onValueNodeChange);return U(()=>{i(m)},[i,m]),e.createElement(N.span,E({},o,{ref:C,style:{pointerEvents:"none"}}),r.value===void 0&&c!==void 0?c:f)}),at=e.forwardRef((n,l)=>{const{__scopeSelect:t,children:a,...s}=n;return e.createElement(N.span,E({"aria-hidden":!0},s,{ref:l}),a||"▼")}),st=n=>e.createElement(Ve,E({asChild:!0},n)),J="SelectContent",lt=e.forwardRef((n,l)=>{const t=G(J,n.__scopeSelect),[a,s]=e.useState();if(U(()=>{s(new DocumentFragment)},[]),!t.open){const f=a;return f?_e.createPortal(e.createElement(Pe,{scope:n.__scopeSelect},e.createElement(se.Slot,{scope:n.__scopeSelect},e.createElement("div",null,n.children))),f):null}return e.createElement(it,E({},n,{ref:l}))}),B=10,[Pe,Y]=Q(J),it=e.forwardRef((n,l)=>{const{__scopeSelect:t,position:a="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:f,onPointerDownOutside:c,side:o,sideOffset:r,align:i,alignOffset:m,arrowPadding:C,collisionBoundary:y,collisionPadding:_,sticky:p,hideWhenDetached:v,avoidCollisions:S,...$}=n,d=G(J,t),[g,ee]=e.useState(null),[D,te]=e.useState(null),T=H(l,u=>ee(u)),[O,q]=e.useState(null),[j,z]=e.useState(null),A=le(t),[W,F]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(g)return Be(g)},[g]),We();const L=e.useCallback(u=>{const[b,...R]=A().map(x=>x.ref.current),[w]=R.slice(-1),h=document.activeElement;for(const x of u)if(x===h||(x==null||x.scrollIntoView({block:"nearest"}),x===b&&D&&(D.scrollTop=0),x===w&&D&&(D.scrollTop=D.scrollHeight),x==null||x.focus(),document.activeElement!==h))return},[A,D]),V=e.useCallback(()=>L([O,g]),[L,O,g]);e.useEffect(()=>{W&&V()},[W,V]);const{onOpenChange:X,triggerPointerDownPosRef:K}=d;e.useEffect(()=>{if(g){let u={x:0,y:0};const b=w=>{var h,x,M,k;u={x:Math.abs(Math.round(w.pageX)-((h=(x=K.current)===null||x===void 0?void 0:x.x)!==null&&h!==void 0?h:0)),y:Math.abs(Math.round(w.pageY)-((M=(k=K.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},R=w=>{u.x<=10&&u.y<=10?w.preventDefault():g.contains(w.target)||X(!1),document.removeEventListener("pointermove",b),K.current=null};return K.current!==null&&(document.addEventListener("pointermove",b),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",R,{capture:!0})}}},[g,X,K]),e.useEffect(()=>{const u=()=>X(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[X]);const[ie,ne]=Oe(u=>{const b=A().filter(h=>!h.disabled),R=b.find(h=>h.ref.current===document.activeElement),w=Ne(b,u,R);w&&setTimeout(()=>w.ref.current.focus())}),de=e.useCallback((u,b,R)=>{const w=!P.current&&!R;(d.value!==void 0&&d.value===b||w)&&(q(u),w&&(P.current=!0))},[d.value]),fe=e.useCallback(()=>g==null?void 0:g.focus(),[g]),Z=e.useCallback((u,b,R)=>{const w=!P.current&&!R;(d.value!==void 0&&d.value===b||w)&&z(u)},[d.value]),ce=a==="popper"?be:dt,oe=ce===be?{side:o,sideOffset:r,align:i,alignOffset:m,arrowPadding:C,collisionBoundary:y,collisionPadding:_,sticky:p,hideWhenDetached:v,avoidCollisions:S}:{};return e.createElement(Pe,{scope:t,content:g,viewport:D,onViewportChange:te,itemRefCallback:de,selectedItem:O,onItemLeave:fe,itemTextRefCallback:Z,focusSelectedItem:V,selectedItemText:j,position:a,isPositioned:W,searchRef:ie},e.createElement(Fe,{as:Me,allowPinchZoom:!0},e.createElement(Ke,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:I(s,u=>{var b;(b=d.trigger)===null||b===void 0||b.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(He,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:c,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ce,E({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},$,oe,{onPlaced:()=>F(!0),ref:T,style:{display:"flex",flexDirection:"column",outline:"none",...$.style},onKeyDown:I($.onKeyDown,u=>{const b=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!b&&u.key.length===1&&ne(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let w=A().filter(h=>!h.disabled).map(h=>h.ref.current);if(["ArrowUp","End"].includes(u.key)&&(w=w.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const h=u.target,x=w.indexOf(h);w=w.slice(x+1)}setTimeout(()=>L(w)),u.preventDefault()}})}))))))}),dt=e.forwardRef((n,l)=>{const{__scopeSelect:t,onPlaced:a,...s}=n,f=G(J,t),c=Y(J,t),[o,r]=e.useState(null),[i,m]=e.useState(null),C=H(l,T=>m(T)),y=le(t),_=e.useRef(!1),p=e.useRef(!0),{viewport:v,selectedItem:S,selectedItemText:$,focusSelectedItem:d}=c,g=e.useCallback(()=>{if(f.trigger&&f.valueNode&&o&&i&&v&&S&&$){const T=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),j=$.getBoundingClientRect();if(f.dir!=="rtl"){const h=j.left-O.left,x=q.left-h,M=T.left-x,k=T.width+M,ue=Math.max(k,O.width),pe=window.innerWidth-B,$e=Se(x,[B,pe-ue]);o.style.minWidth=k+"px",o.style.left=$e+"px"}else{const h=O.right-j.right,x=window.innerWidth-q.right-h,M=window.innerWidth-T.right-x,k=T.width+M,ue=Math.max(k,O.width),pe=window.innerWidth-B,$e=Se(x,[B,pe-ue]);o.style.minWidth=k+"px",o.style.right=$e+"px"}const z=y(),A=window.innerHeight-B*2,W=v.scrollHeight,F=window.getComputedStyle(i),P=parseInt(F.borderTopWidth,10),L=parseInt(F.paddingTop,10),V=parseInt(F.borderBottomWidth,10),X=parseInt(F.paddingBottom,10),K=P+L+W+X+V,ie=Math.min(S.offsetHeight*5,K),ne=window.getComputedStyle(v),de=parseInt(ne.paddingTop,10),fe=parseInt(ne.paddingBottom,10),Z=T.top+T.height/2-B,ce=A-Z,oe=S.offsetHeight/2,u=S.offsetTop+oe,b=P+L+u,R=K-b;if(b<=Z){const h=S===z[z.length-1].ref.current;o.style.bottom="0px";const x=i.clientHeight-v.offsetTop-v.offsetHeight,M=Math.max(ce,oe+(h?fe:0)+x+V),k=b+M;o.style.height=k+"px"}else{const h=S===z[0].ref.current;o.style.top="0px";const M=Math.max(Z,P+v.offsetTop+(h?de:0)+oe)+R;o.style.height=M+"px",v.scrollTop=b-Z+v.offsetTop}o.style.margin=`${B}px 0`,o.style.minHeight=ie+"px",o.style.maxHeight=A+"px",a==null||a(),requestAnimationFrame(()=>_.current=!0)}},[y,f.trigger,f.valueNode,o,i,v,S,$,f.dir,a]);U(()=>g(),[g]);const[ee,D]=e.useState();U(()=>{i&&D(window.getComputedStyle(i).zIndex)},[i]);const te=e.useCallback(T=>{T&&p.current===!0&&(g(),d==null||d(),p.current=!1)},[g,d]);return e.createElement(ft,{scope:t,contentWrapper:o,shouldExpandOnScrollRef:_,onScrollButtonChange:te},e.createElement("div",{ref:r,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:ee}},e.createElement(N.div,E({},s,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}}))))}),be=e.forwardRef((n,l)=>{const{__scopeSelect:t,align:a="start",collisionPadding:s=B,...f}=n,c=ge(t);return e.createElement(ze,E({},c,f,{ref:l,align:a,collisionPadding:s,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[ft,he]=Q(J,{}),we="SelectViewport",ut=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=Y(we,t),f=he(we,t),c=H(l,s.onViewportChange),o=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(se.Slot,{scope:t},e.createElement(N.div,E({"data-radix-select-viewport":"",role:"presentation"},a,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:I(a.onScroll,r=>{const i=r.currentTarget,{contentWrapper:m,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&m){const y=Math.abs(o.current-i.scrollTop);if(y>0){const _=window.innerHeight-B*2,p=parseFloat(m.style.minHeight),v=parseFloat(m.style.height),S=Math.max(p,v);if(S<_){const $=S+y,d=Math.min(_,$),g=$-d;m.style.height=d+"px",m.style.bottom==="0px"&&(i.scrollTop=g>0?g:0,m.style.justifyContent="flex-end")}}}o.current=i.scrollTop})}))))}),pt="SelectGroup",[$t,mt]=Q(pt),vt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=ve();return e.createElement($t,{scope:t,id:s},e.createElement(N.div,E({role:"group","aria-labelledby":s},a,{ref:l})))}),gt="SelectLabel",ht=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n,s=mt(gt,t);return e.createElement(N.div,E({id:s.id},a,{ref:l}))}),me="SelectItem",[xt,Ie]=Q(me),St=e.forwardRef((n,l)=>{const{__scopeSelect:t,value:a,disabled:s=!1,textValue:f,...c}=n,o=G(me,t),r=Y(me,t),i=o.value===a,[m,C]=e.useState(f??""),[y,_]=e.useState(!1),p=H(l,$=>{var d;return(d=r.itemRefCallback)===null||d===void 0?void 0:d.call(r,$,a,s)}),v=ve(),S=()=>{s||(o.onValueChange(a),o.onOpenChange(!1))};return e.createElement(xt,{scope:t,value:a,disabled:s,textId:v,isSelected:i,onItemTextChange:e.useCallback($=>{C(d=>{var g;return d||((g=$==null?void 0:$.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(se.ItemSlot,{scope:t,value:a,disabled:s,textValue:m},e.createElement(N.div,E({role:"option","aria-labelledby":v,"data-highlighted":y?"":void 0,"aria-selected":i&&y,"data-state":i?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1},c,{ref:p,onFocus:I(c.onFocus,()=>_(!0)),onBlur:I(c.onBlur,()=>_(!1)),onPointerUp:I(c.onPointerUp,S),onPointerMove:I(c.onPointerMove,$=>{if(s){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}else $.currentTarget.focus({preventScroll:!0})}),onPointerLeave:I(c.onPointerLeave,$=>{if($.currentTarget===document.activeElement){var d;(d=r.onItemLeave)===null||d===void 0||d.call(r)}}),onKeyDown:I(c.onKeyDown,$=>{var d;((d=r.searchRef)===null||d===void 0?void 0:d.current)!==""&&$.key===" "||(Xe.includes($.key)&&S(),$.key===" "&&$.preventDefault())})}))))}),re="SelectItemText",bt=e.forwardRef((n,l)=>{const{__scopeSelect:t,className:a,style:s,...f}=n,c=G(re,t),o=Y(re,t),r=Ie(re,t),i=et(re,t),[m,C]=e.useState(null),y=H(l,$=>C($),r.onItemTextChange,$=>{var d;return(d=o.itemTextRefCallback)===null||d===void 0?void 0:d.call(o,$,r.value,r.disabled)}),_=m==null?void 0:m.textContent,p=e.useMemo(()=>e.createElement("option",{key:r.value,value:r.value,disabled:r.disabled},_),[r.disabled,r.value,_]),{onNativeOptionAdd:v,onNativeOptionRemove:S}=i;return U(()=>(v(p),()=>S(p)),[v,S,p]),e.createElement(e.Fragment,null,e.createElement(N.span,E({id:r.textId},f,{ref:y})),r.isSelected&&c.valueNode&&!c.valueNodeHasChildren?_e.createPortal(f.children,c.valueNode):null)}),wt="SelectItemIndicator",Ct=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return Ie(wt,t).isSelected?e.createElement(N.span,E({"aria-hidden":!0},a,{ref:l})):null}),Ce="SelectScrollUpButton",Et=e.forwardRef((n,l)=>{const t=Y(Ce,n.__scopeSelect),a=he(Ce,n.__scopeSelect),[s,f]=e.useState(!1),c=H(l,a.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollTop>0;f(i)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Te,E({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop-r.offsetHeight)}})):null}),Ee="SelectScrollDownButton",_t=e.forwardRef((n,l)=>{const t=Y(Ee,n.__scopeSelect),a=he(Ee,n.__scopeSelect),[s,f]=e.useState(!1),c=H(l,a.onScrollButtonChange);return U(()=>{if(t.viewport&&t.isPositioned){let r=function(){const i=o.scrollHeight-o.clientHeight,m=Math.ceil(o.scrollTop)<i;f(m)};const o=t.viewport;return r(),o.addEventListener("scroll",r),()=>o.removeEventListener("scroll",r)}},[t.viewport,t.isPositioned]),s?e.createElement(Te,E({},n,{ref:c,onAutoScroll:()=>{const{viewport:o,selectedItem:r}=t;o&&r&&(o.scrollTop=o.scrollTop+r.offsetHeight)}})):null}),Te=e.forwardRef((n,l)=>{const{__scopeSelect:t,onAutoScroll:a,...s}=n,f=Y("SelectScrollButton",t),c=e.useRef(null),o=le(t),r=e.useCallback(()=>{c.current!==null&&(window.clearInterval(c.current),c.current=null)},[]);return e.useEffect(()=>()=>r(),[r]),U(()=>{var i;const m=o().find(C=>C.ref.current===document.activeElement);m==null||(i=m.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[o]),e.createElement(N.div,E({"aria-hidden":!0},s,{ref:l,style:{flexShrink:0,...s.style},onPointerDown:I(s.onPointerDown,()=>{c.current===null&&(c.current=window.setInterval(a,50))}),onPointerMove:I(s.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),c.current===null&&(c.current=window.setInterval(a,50))}),onPointerLeave:I(s.onPointerLeave,()=>{r()})}))}),yt=e.forwardRef((n,l)=>{const{__scopeSelect:t,...a}=n;return e.createElement(N.div,E({"aria-hidden":!0},a,{ref:l}))}),Re=e.forwardRef((n,l)=>{const{value:t,...a}=n,s=e.useRef(null),f=H(l,s),c=Ge(t);return e.useEffect(()=>{const o=s.current,r=window.HTMLSelectElement.prototype,m=Object.getOwnPropertyDescriptor(r,"value").set;if(c!==t&&m){const C=new Event("change",{bubbles:!0});m.call(o,t),o.dispatchEvent(C)}},[c,t]),e.createElement(Ye,{asChild:!0},e.createElement("select",E({},a,{ref:f,defaultValue:t})))});Re.displayName="BubbleSelect";function Oe(n){const l=ke(n),t=e.useRef(""),a=e.useRef(0),s=e.useCallback(c=>{const o=t.current+c;l(o),function r(i){t.current=i,window.clearTimeout(a.current),i!==""&&(a.current=window.setTimeout(()=>r(""),1e3))}(o)},[l]),f=e.useCallback(()=>{t.current="",window.clearTimeout(a.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(a.current),[]),[t,s,f]}function Ne(n,l,t){const s=l.length>1&&Array.from(l).every(i=>i===l[0])?l[0]:l,f=t?n.indexOf(t):-1;let c=Pt(n,Math.max(f,0));s.length===1&&(c=c.filter(i=>i!==t));const r=c.find(i=>i.textValue.toLowerCase().startsWith(s.toLowerCase()));return r!==t?r:void 0}function Pt(n,l){return n.map((t,a)=>n[(l+a)%n.length])}const Wt=tt,Ft=nt,Kt=rt,Ut=at,qt=st,zt=lt,Gt=ut,Yt=vt,jt=ht,Xt=St,Zt=bt,Jt=Ct,Qt=Et,eo=_t,to=yt;export{Xt as $,Zt as a,Wt as b,Ft as c,Kt as d,Ut as e,zt as f,Gt as g,Yt as h,qt as i,jt as j,to as k,Qt as l,eo as m,Jt as n};
//# sourceMappingURL=index-43430681.js.map
