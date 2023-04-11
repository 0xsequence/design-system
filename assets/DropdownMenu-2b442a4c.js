import{a as ne,j as w}from"./jsx-runtime-a9c13c85.js";import{_ as M}from"./extends-98964cd2.js";import{r as n}from"./index-d8ade8ea.js";import{a as _,c as ye,$ as ze}from"./index.module-99b258bb.js";import{$ as Ee,b as T,a as B,d as He,e as Ze,f as Je}from"./index.module-4456f0d6.js";import{_ as v}from"./extends-9cd95192.js";import{$ as Qe}from"./index.module-a3790cd2.js";import{$ as et}from"./index.module-1e59790f.js";import{$ as tt}from"./index.module-f536abc8.js";import{$ as nt,a as ot,b as rt}from"./Combination-888d27bc.js";import{$ as Ce,a as ct,b as at,c as st,d as dt}from"./index.module-2789a3d5.js";import{$ as it}from"./index.module-5c3234a3.js";import{$ as oe}from"./index.module-cacec922.js";import{$ as De,a as ut,b as ft}from"./index.module-880e327b.js";import{$ as $e}from"./index.module-cc7c4bf6.js";import{c as q,B as lt}from"./Box-9e9f1e0d.js";import{d as pt}from"./WarningIcon-5b052aef.js";import"./index-61ebbbb1.js";import{T as U}from"./Text-755617cc.js";import"./atoms-53256ec3.js";import{D as $t}from"./Divider-0053639b.js";var mt=function(e){if(typeof document>"u")return null;var o=Array.isArray(e)?e[0]:e;return o.ownerDocument.body},P=new WeakMap,V=new WeakMap,G={},J=0,Re=function(e){return e&&(e.host||Re(e.parentNode))},_t=function(e,o){return o.map(function(t){if(e.contains(t))return t;var r=Re(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return Boolean(t)})},bt=function(e,o,t,r){var c=_t(o,Array.isArray(e)?e:[e]);G[t]||(G[t]=new WeakMap);var a=G[t],u=[],f=new Set,l=new Set(c),p=function(s){!s||f.has(s)||(f.add(s),p(s.parentNode))};c.forEach(p);var $=function(s){!s||l.has(s)||Array.prototype.forEach.call(s.children,function(i){if(f.has(i))$(i);else{var h=i.getAttribute(r),m=h!==null&&h!=="false",x=(P.get(i)||0)+1,S=(a.get(i)||0)+1;P.set(i,x),a.set(i,S),u.push(i),x===1&&m&&V.set(i,!0),S===1&&i.setAttribute(t,"true"),m||i.setAttribute(r,"true")}})};return $(o),f.clear(),J++,function(){u.forEach(function(s){var i=P.get(s)-1,h=a.get(s)-1;P.set(s,i),a.set(s,h),i||(V.has(s)||s.removeAttribute(r),V.delete(s)),h||s.removeAttribute(t)}),J--,J||(P=new WeakMap,P=new WeakMap,V=new WeakMap,G={})}},vt=function(e,o,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=o||mt(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),bt(r,c,t,"aria-hidden")):function(){return null}};const ht=["Enter"," "],wt=["ArrowDown","PageUp","Home"],Ie=["ArrowUp","PageDown","End"],Mt=[...wt,...Ie],j="Menu",[Q,xt,gt]=Qe(j),[R,Pe]=Ee(j,[gt,Ce,De]),X=Ce(),Se=De(),[yt,A]=R(j),[Et,re]=R(j),Ct=e=>{const{__scopeMenu:o,open:t=!1,children:r,dir:c,onOpenChange:a,modal:u=!0}=e,f=X(o),[l,p]=n.useState(null),$=n.useRef(!1),s=ye(a),i=et(c);return n.useEffect(()=>{const h=()=>{$.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},m=()=>$.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),n.createElement(ct,f,n.createElement(yt,{scope:o,open:t,onOpenChange:s,content:l,onContentChange:p},n.createElement(Et,{scope:o,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:$,dir:i,modal:u},r)))},Dt=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e,c=X(t);return n.createElement(at,v({},c,r,{ref:o}))}),ke="MenuPortal",[Rt,It]=R(ke,{forceMount:void 0}),Pt=e=>{const{__scopeMenu:o,forceMount:t,children:r,container:c}=e,a=A(ke,o);return n.createElement(Rt,{scope:o,forceMount:t},n.createElement(oe,{present:t||a.open},n.createElement(it,{asChild:!0,container:c},r)))},C="MenuContent",[St,Oe]=R(C),kt=n.forwardRef((e,o)=>{const t=It(C,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=A(C,e.__scopeMenu),u=re(C,e.__scopeMenu);return n.createElement(Q.Provider,{scope:e.__scopeMenu},n.createElement(oe,{present:r||a.open},n.createElement(Q.Slot,{scope:e.__scopeMenu},u.modal?n.createElement(Ot,v({},c,{ref:o})):n.createElement(Tt,v({},c,{ref:o})))))}),Ot=n.forwardRef((e,o)=>{const t=A(C,e.__scopeMenu),r=n.useRef(null),c=B(o,r);return n.useEffect(()=>{const a=r.current;if(a)return vt(a)},[]),n.createElement(Te,v({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:_(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),Tt=n.forwardRef((e,o)=>{const t=A(C,e.__scopeMenu);return n.createElement(Te,v({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),Te=n.forwardRef((e,o)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:u,disableOutsidePointerEvents:f,onEntryFocus:l,onEscapeKeyDown:p,onPointerDownOutside:$,onFocusOutside:s,onInteractOutside:i,onDismiss:h,disableOutsideScroll:m,...x}=e,S=A(C,t),Y=re(C,t),Ge=X(t),Ue=Se(t),de=xt(t),[We,ie]=n.useState(null),N=n.useRef(null),Be=B(o,N,S.onContentChange),F=n.useRef(0),K=n.useRef(""),qe=n.useRef(0),z=n.useRef(null),ue=n.useRef("right"),H=n.useRef(0),je=m?rt:n.Fragment,Xe=m?{as:He,allowPinchZoom:!0}:void 0,Ye=d=>{var b,g;const D=K.current+d,k=de().filter(E=>!E.disabled),Z=document.activeElement,fe=(b=k.find(E=>E.ref.current===Z))===null||b===void 0?void 0:b.textValue,L=k.map(E=>E.textValue),O=Jt(L,D,fe),le=(g=k.find(E=>E.textValue===O))===null||g===void 0?void 0:g.ref.current;(function E(pe){K.current=pe,window.clearTimeout(F.current),pe!==""&&(F.current=window.setTimeout(()=>E(""),1e3))})(D),le&&setTimeout(()=>le.focus())};n.useEffect(()=>()=>window.clearTimeout(F.current),[]),nt();const I=n.useCallback(d=>{var b,g;return ue.current===((b=z.current)===null||b===void 0?void 0:b.side)&&en(d,(g=z.current)===null||g===void 0?void 0:g.area)},[]);return n.createElement(St,{scope:t,searchRef:K,onItemEnter:n.useCallback(d=>{I(d)&&d.preventDefault()},[I]),onItemLeave:n.useCallback(d=>{var b;I(d)||((b=N.current)===null||b===void 0||b.focus(),ie(null))},[I]),onTriggerLeave:n.useCallback(d=>{I(d)&&d.preventDefault()},[I]),pointerGraceTimerRef:qe,onPointerGraceIntentChange:n.useCallback(d=>{z.current=d},[])},n.createElement(je,Xe,n.createElement(ot,{asChild:!0,trapped:c,onMountAutoFocus:_(a,d=>{var b;d.preventDefault(),(b=N.current)===null||b===void 0||b.focus()}),onUnmountAutoFocus:u},n.createElement(tt,{asChild:!0,disableOutsidePointerEvents:f,onEscapeKeyDown:p,onPointerDownOutside:$,onFocusOutside:s,onInteractOutside:i,onDismiss:h},n.createElement(ut,v({asChild:!0},Ue,{dir:Y.dir,orientation:"vertical",loop:r,currentTabStopId:We,onCurrentTabStopIdChange:ie,onEntryFocus:_(l,d=>{Y.isUsingKeyboardRef.current||d.preventDefault()})}),n.createElement(st,v({role:"menu","aria-orientation":"vertical","data-state":zt(S.open),"data-radix-menu-content":"",dir:Y.dir},Ge,x,{ref:Be,style:{outline:"none",...x.style},onKeyDown:_(x.onKeyDown,d=>{const g=d.target.closest("[data-radix-menu-content]")===d.currentTarget,D=d.ctrlKey||d.altKey||d.metaKey,k=d.key.length===1;g&&(d.key==="Tab"&&d.preventDefault(),!D&&k&&Ye(d.key));const Z=N.current;if(d.target!==Z||!Mt.includes(d.key))return;d.preventDefault();const L=de().filter(O=>!O.disabled).map(O=>O.ref.current);Ie.includes(d.key)&&L.reverse(),Ht(L)}),onBlur:_(e.onBlur,d=>{d.currentTarget.contains(d.target)||(window.clearTimeout(F.current),K.current="")}),onPointerMove:_(e.onPointerMove,te(d=>{const b=d.target,g=H.current!==d.clientX;if(d.currentTarget.contains(b)&&g){const D=d.clientX>H.current?"right":"left";ue.current=D,H.current=d.clientX}}))})))))))}),At=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(T.div,v({role:"group"},r,{ref:o}))}),ee="MenuItem",me="menu.itemSelect",ce=n.forwardRef((e,o)=>{const{disabled:t=!1,onSelect:r,...c}=e,a=n.useRef(null),u=re(ee,e.__scopeMenu),f=Oe(ee,e.__scopeMenu),l=B(o,a),p=n.useRef(!1),$=()=>{const s=a.current;if(!t&&s){const i=new CustomEvent(me,{bubbles:!0,cancelable:!0});s.addEventListener(me,h=>r==null?void 0:r(h),{once:!0}),Ze(s,i),i.defaultPrevented?p.current=!1:u.onClose()}};return n.createElement(Nt,v({},c,{ref:l,disabled:t,onClick:_(e.onClick,$),onPointerDown:s=>{var i;(i=e.onPointerDown)===null||i===void 0||i.call(e,s),p.current=!0},onPointerUp:_(e.onPointerUp,s=>{var i;p.current||(i=s.currentTarget)===null||i===void 0||i.click()}),onKeyDown:_(e.onKeyDown,s=>{const i=f.searchRef.current!=="";t||i&&s.key===" "||ht.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Nt=n.forwardRef((e,o)=>{const{__scopeMenu:t,disabled:r=!1,textValue:c,...a}=e,u=Oe(ee,t),f=Se(t),l=n.useRef(null),p=B(o,l),[$,s]=n.useState(!1),[i,h]=n.useState("");return n.useEffect(()=>{const m=l.current;if(m){var x;h(((x=m.textContent)!==null&&x!==void 0?x:"").trim())}},[a.children]),n.createElement(Q.ItemSlot,{scope:t,disabled:r,textValue:c??i},n.createElement(ft,v({asChild:!0},f,{focusable:!r}),n.createElement(T.div,v({role:"menuitem","data-highlighted":$?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:p,onPointerMove:_(e.onPointerMove,te(m=>{r?u.onItemLeave(m):(u.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus())})),onPointerLeave:_(e.onPointerLeave,te(m=>u.onItemLeave(m))),onFocus:_(e.onFocus,()=>s(!0)),onBlur:_(e.onBlur,()=>s(!1))}))))}),Ft=n.forwardRef((e,o)=>{const{checked:t=!1,onCheckedChange:r,...c}=e;return n.createElement(Ne,{scope:e.__scopeMenu,checked:t},n.createElement(ce,v({role:"menuitemcheckbox","aria-checked":W(t)?"mixed":t},c,{ref:o,"data-state":ae(t),onSelect:_(c.onSelect,()=>r==null?void 0:r(W(t)?!0:!t),{checkForDefaultPrevented:!1})})))}),Kt="MenuRadioGroup",[Lt,Vt]=R(Kt,{value:void 0,onValueChange:()=>{}}),Gt=n.forwardRef((e,o)=>{const{value:t,onValueChange:r,...c}=e,a=ye(r);return n.createElement(Lt,{scope:e.__scopeMenu,value:t,onValueChange:a},n.createElement(At,v({},c,{ref:o})))}),Ut="MenuRadioItem",Wt=n.forwardRef((e,o)=>{const{value:t,...r}=e,c=Vt(Ut,e.__scopeMenu),a=t===c.value;return n.createElement(Ne,{scope:e.__scopeMenu,checked:a},n.createElement(ce,v({role:"menuitemradio","aria-checked":a},r,{ref:o,"data-state":ae(a),onSelect:_(r.onSelect,()=>{var u;return(u=c.onValueChange)===null||u===void 0?void 0:u.call(c,t)},{checkForDefaultPrevented:!1})})))}),Ae="MenuItemIndicator",[Ne,Bt]=R(Ae,{checked:!1}),qt=n.forwardRef((e,o)=>{const{__scopeMenu:t,forceMount:r,...c}=e,a=Bt(Ae,t);return n.createElement(oe,{present:r||W(a.checked)||a.checked===!0},n.createElement(T.span,v({},c,{ref:o,"data-state":ae(a.checked)})))}),jt=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(T.div,v({role:"separator","aria-orientation":"horizontal"},r,{ref:o}))}),Xt=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e,c=X(t);return n.createElement(dt,v({},c,r,{ref:o}))}),Yt="MenuSub";R(Yt);function zt(e){return e?"open":"closed"}function W(e){return e==="indeterminate"}function ae(e){return W(e)?"indeterminate":e?"checked":"unchecked"}function Ht(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function Zt(e,o){return e.map((t,r)=>e[(o+r)%e.length])}function Jt(e,o,t){const c=o.length>1&&Array.from(o).every(p=>p===o[0])?o[0]:o,a=t?e.indexOf(t):-1;let u=Zt(e,Math.max(a,0));c.length===1&&(u=u.filter(p=>p!==t));const l=u.find(p=>p.toLowerCase().startsWith(c.toLowerCase()));return l!==t?l:void 0}function Qt(e,o){const{x:t,y:r}=e;let c=!1;for(let a=0,u=o.length-1;a<o.length;u=a++){const f=o[a].x,l=o[a].y,p=o[u].x,$=o[u].y;l>r!=$>r&&t<(p-f)*(r-l)/($-l)+f&&(c=!c)}return c}function en(e,o){if(!o)return!1;const t={x:e.clientX,y:e.clientY};return Qt(t,o)}function te(e){return o=>o.pointerType==="mouse"?e(o):void 0}const tn=Ct,nn=Dt,on=Pt,rn=kt,cn=ce,an=Ft,sn=Gt,dn=Wt,un=qt,fn=jt,ln=Xt,Fe="DropdownMenu",[pn,fo]=Ee(Fe,[Pe]),y=Pe(),[$n,Ke]=pn(Fe),mn=e=>{const{__scopeDropdownMenu:o,children:t,dir:r,open:c,defaultOpen:a,onOpenChange:u,modal:f=!0}=e,l=y(o),p=n.useRef(null),[$=!1,s]=ze({prop:c,defaultProp:a,onChange:u});return n.createElement($n,{scope:o,triggerId:$e(),triggerRef:p,contentId:$e(),open:$,onOpenChange:s,onOpenToggle:n.useCallback(()=>s(i=>!i),[s]),modal:f},n.createElement(tn,M({},l,{open:$,onOpenChange:s,dir:r,modal:f}),t))},_n="DropdownMenuTrigger",bn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...c}=e,a=Ke(_n,t),u=y(t);return n.createElement(nn,M({asChild:!0},u),n.createElement(T.button,M({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:Je(o,a.triggerRef),onPointerDown:_(e.onPointerDown,f=>{!r&&f.button===0&&f.ctrlKey===!1&&(a.onOpenToggle(),a.open||f.preventDefault())}),onKeyDown:_(e.onKeyDown,f=>{r||(["Enter"," "].includes(f.key)&&a.onOpenToggle(),f.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())})})))}),vn=e=>{const{__scopeDropdownMenu:o,...t}=e,r=y(o);return n.createElement(on,M({},r,t))},hn="DropdownMenuContent",wn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=Ke(hn,t),a=y(t),u=n.useRef(!1);return n.createElement(rn,M({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:o,onCloseAutoFocus:_(e.onCloseAutoFocus,f=>{var l;u.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),u.current=!1,f.preventDefault()}),onInteractOutside:_(e.onInteractOutside,f=>{const l=f.detail.originalEvent,p=l.button===0&&l.ctrlKey===!0,$=l.button===2||p;(!c.modal||$)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Mn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(cn,M({},c,r,{ref:o}))}),xn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(an,M({},c,r,{ref:o}))}),gn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(sn,M({},c,r,{ref:o}))}),yn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(dn,M({},c,r,{ref:o}))}),En=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(un,M({},c,r,{ref:o}))}),Cn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(fn,M({},c,r,{ref:o}))}),Dn=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=y(t);return n.createElement(ln,M({},c,r,{ref:o}))}),Rn=mn,In=bn,Pn=vn,Sn=wn,kn=Mn,On=xn,Tn=gn,An=yn,Le=En,Nn=Cn,Fn=Dn;var Kn="_1k2mbvi2",Ln="_1k2mbvi1 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr1sw fyvr1us fyvr1wo fyvr1yk fyvr11ms fyvr11r5",Ve="_1k2mbvi5",se="_1k2mbvi4 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr1x4 fyvr1yk fyvr1ss fyvr1uo fyvr11h0 fyvr11ko fyvr11jw fyvr12sz fyvr12u2 fyvr11n2 fyvr11hw fyvr12q5",Vn="_1k2mbvi6";const _e=Rn,be=In,ve=Pn,he=({className:e,children:o,...t})=>ne(Sn,{className:q(Ln,e),side:"bottom",sideOffset:4,align:"center",...t,children:[o,w(Gn,{})]}),Gn=()=>w(Fn,{className:Kn}),we=({className:e,children:o,...t})=>w(kn,{className:q(se,e),asChild:!0,...t,children:w(lt,{children:w(U,{variant:"small",children:o})})}),Un=({children:e})=>w(Le,{className:Ve,children:e}),lo=()=>w(Nn,{className:Vn,asChild:!0,children:w($t,{marginTop:"1",marginBottom:"1"})}),Me=n.forwardRef(({className:e,children:o,...t},r)=>ne(On,{className:q(se,e),...t,ref:r,children:[w(Un,{children:w(pt,{size:"xs"})}),w(U,{variant:"small",children:o})]})),xe=Tn,ge=n.forwardRef(({className:e,children:o,...t},r)=>ne(An,{className:q(se,e),...t,ref:r,children:[w(Le,{className:Ve,children:w(U,{children:"•"})}),w(U,{variant:"small",children:o})]}));try{_e.displayName="DropdownMenuRoot",_e.__docgenInfo={description:"",displayName:"DropdownMenuRoot",props:{}}}catch{}try{be.displayName="DropdownMenuTrigger",be.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{ve.displayName="DropdownMenuPortal",ve.__docgenInfo={description:"",displayName:"DropdownMenuPortal",props:{}}}catch{}try{he.displayName="DropdownMenuContent",he.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{we.displayName="DropdownMenuItem",we.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Me.displayName="DropdownMenuCheckboxItem",Me.__docgenInfo={description:"",displayName:"DropdownMenuCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{xe.displayName="DropdownMenuRadioGroup",xe.__docgenInfo={description:"",displayName:"DropdownMenuRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{ge.displayName="DropdownMenuRadioItem",ge.__docgenInfo={description:"",displayName:"DropdownMenuRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{_e as D,be as a,he as b,we as c,lo as d,Me as e,xe as f,ge as g};
//# sourceMappingURL=DropdownMenu-2b442a4c.js.map
