import{j as x}from"./jsx-runtime-5c44f2f2.js";import{_ as i}from"./extends-98964cd2.js";import{r as o}from"./index-32f9f3e1.js";import{a as m,c as ve,$ as Ge}from"./index-da5321b3.js";import{$ as xe,b as S,a as L,d as Ue,e as Be,f as qe}from"./index-2790c83a.js";import{$ as Xe}from"./index-8bfc7175.js";import{$ as Ye}from"./index-7ba41556.js";import{$ as ze}from"./index-955fdaf1.js";import{h as We,$ as He,a as Ze,b as Je}from"./Combination-2ed00a58.js";import{$ as he,a as Qe,b as eo,c as oo,d as to}from"./index-434676e3.js";import{$ as no}from"./index-1d46ede9.js";import{$ as H}from"./index-bfda3ddd.js";import{$ as Me,a as ro,b as co}from"./index-03025344.js";import{$ as de}from"./index-feb9e7f3.js";import{c as j,B as ao}from"./Box-28194fa5.js";import{d as so}from"./WarningIcon-c6b3c3c5.js";import"./index-efda82af.js";import{T as A}from"./Text-693338cf.js";import"./atoms-f7bcb57b.js";import{D as io}from"./Divider-fac61224.js";const uo=["Enter"," "],fo=["ArrowDown","PageUp","Home"],we=["ArrowUp","PageDown","End"],lo=[...fo,...we],V="Menu",[Y,po,$o]=Xe(V),[D,ge]=xe(V,[$o,he,Me]),G=he(),Ee=Me(),[mo,k]=D(V),[_o,Z]=D(V),bo=e=>{const{__scopeMenu:n,open:t=!1,children:r,dir:c,onOpenChange:a,modal:d=!0}=e,u=G(n),[l,p]=o.useState(null),b=o.useRef(!1),f=ve(a),$=Ye(c);return o.useEffect(()=>{const g=()=>{b.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>b.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),o.createElement(Qe,u,o.createElement(mo,{scope:n,open:t,onOpenChange:f,content:l,onContentChange:p},o.createElement(_o,{scope:n,onClose:o.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:b,dir:$,modal:d},r)))},vo=o.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,c=G(t);return o.createElement(eo,i({},c,r,{ref:n}))}),ye="MenuPortal",[xo,ho]=D(ye,{forceMount:void 0}),Mo=e=>{const{__scopeMenu:n,forceMount:t,children:r,container:c}=e,a=k(ye,n);return o.createElement(xo,{scope:n,forceMount:t},o.createElement(H,{present:t||a.open},o.createElement(no,{asChild:!0,container:c},r)))},y="MenuContent",[wo,Ce]=D(y),go=o.forwardRef((e,n)=>{const t=ho(y,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=k(y,e.__scopeMenu),d=Z(y,e.__scopeMenu);return o.createElement(Y.Provider,{scope:e.__scopeMenu},o.createElement(H,{present:r||a.open},o.createElement(Y.Slot,{scope:e.__scopeMenu},d.modal?o.createElement(Eo,i({},c,{ref:n})):o.createElement(yo,i({},c,{ref:n})))))}),Eo=o.forwardRef((e,n)=>{const t=k(y,e.__scopeMenu),r=o.useRef(null),c=L(n,r);return o.useEffect(()=>{const a=r.current;if(a)return We(a)},[]),o.createElement(De,i({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:m(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),yo=o.forwardRef((e,n)=>{const t=k(y,e.__scopeMenu);return o.createElement(De,i({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),De=o.forwardRef((e,n)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:l,onEscapeKeyDown:p,onPointerDownOutside:b,onFocusOutside:f,onInteractOutside:$,onDismiss:g,disableOutsideScroll:v,...E}=e,oe=k(y,t),U=Z(y,t),Te=G(t),Ne=Ee(t),te=po(t),[Fe,ne]=o.useState(null),O=o.useRef(null),Ae=L(n,O,oe.onContentChange),T=o.useRef(0),N=o.useRef(""),Ke=o.useRef(0),B=o.useRef(null),re=o.useRef("right"),q=o.useRef(0),Le=v?Je:o.Fragment,je=v?{as:Ue,allowPinchZoom:!0}:void 0,Ve=s=>{var _,h;const C=N.current+s,I=te().filter(w=>!w.disabled),X=document.activeElement,ce=(_=I.find(w=>w.ref.current===X))===null||_===void 0?void 0:_.textValue,F=I.map(w=>w.textValue),P=Uo(F,C,ce),ae=(h=I.find(w=>w.textValue===P))===null||h===void 0?void 0:h.ref.current;(function w(se){N.current=se,window.clearTimeout(T.current),se!==""&&(T.current=window.setTimeout(()=>w(""),1e3))})(C),ae&&setTimeout(()=>ae.focus())};o.useEffect(()=>()=>window.clearTimeout(T.current),[]),He();const R=o.useCallback(s=>{var _,h;return re.current===((_=B.current)===null||_===void 0?void 0:_.side)&&qo(s,(h=B.current)===null||h===void 0?void 0:h.area)},[]);return o.createElement(wo,{scope:t,searchRef:N,onItemEnter:o.useCallback(s=>{R(s)&&s.preventDefault()},[R]),onItemLeave:o.useCallback(s=>{var _;R(s)||((_=O.current)===null||_===void 0||_.focus(),ne(null))},[R]),onTriggerLeave:o.useCallback(s=>{R(s)&&s.preventDefault()},[R]),pointerGraceTimerRef:Ke,onPointerGraceIntentChange:o.useCallback(s=>{B.current=s},[])},o.createElement(Le,je,o.createElement(Ze,{asChild:!0,trapped:c,onMountAutoFocus:m(a,s=>{var _;s.preventDefault(),(_=O.current)===null||_===void 0||_.focus()}),onUnmountAutoFocus:d},o.createElement(ze,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:p,onPointerDownOutside:b,onFocusOutside:f,onInteractOutside:$,onDismiss:g},o.createElement(ro,i({asChild:!0},Ne,{dir:U.dir,orientation:"vertical",loop:r,currentTabStopId:Fe,onCurrentTabStopIdChange:ne,onEntryFocus:m(l,s=>{U.isUsingKeyboardRef.current||s.preventDefault()})}),o.createElement(oo,i({role:"menu","aria-orientation":"vertical","data-state":jo(oe.open),"data-radix-menu-content":"",dir:U.dir},Te,E,{ref:Ae,style:{outline:"none",...E.style},onKeyDown:m(E.onKeyDown,s=>{const h=s.target.closest("[data-radix-menu-content]")===s.currentTarget,C=s.ctrlKey||s.altKey||s.metaKey,I=s.key.length===1;h&&(s.key==="Tab"&&s.preventDefault(),!C&&I&&Ve(s.key));const X=O.current;if(s.target!==X||!lo.includes(s.key))return;s.preventDefault();const F=te().filter(P=>!P.disabled).map(P=>P.ref.current);we.includes(s.key)&&F.reverse(),Vo(F)}),onBlur:m(e.onBlur,s=>{s.currentTarget.contains(s.target)||(window.clearTimeout(T.current),N.current="")}),onPointerMove:m(e.onPointerMove,W(s=>{const _=s.target,h=q.current!==s.clientX;if(s.currentTarget.contains(_)&&h){const C=s.clientX>q.current?"right":"left";re.current=C,q.current=s.clientX}}))})))))))}),Co=o.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return o.createElement(S.div,i({role:"group"},r,{ref:n}))}),z="MenuItem",ie="menu.itemSelect",J=o.forwardRef((e,n)=>{const{disabled:t=!1,onSelect:r,...c}=e,a=o.useRef(null),d=Z(z,e.__scopeMenu),u=Ce(z,e.__scopeMenu),l=L(n,a),p=o.useRef(!1),b=()=>{const f=a.current;if(!t&&f){const $=new CustomEvent(ie,{bubbles:!0,cancelable:!0});f.addEventListener(ie,g=>r==null?void 0:r(g),{once:!0}),Be(f,$),$.defaultPrevented?p.current=!1:d.onClose()}};return o.createElement(Do,i({},c,{ref:l,disabled:t,onClick:m(e.onClick,b),onPointerDown:f=>{var $;($=e.onPointerDown)===null||$===void 0||$.call(e,f),p.current=!0},onPointerUp:m(e.onPointerUp,f=>{var $;p.current||($=f.currentTarget)===null||$===void 0||$.click()}),onKeyDown:m(e.onKeyDown,f=>{const $=u.searchRef.current!=="";t||$&&f.key===" "||uo.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})}))}),Do=o.forwardRef((e,n)=>{const{__scopeMenu:t,disabled:r=!1,textValue:c,...a}=e,d=Ce(z,t),u=Ee(t),l=o.useRef(null),p=L(n,l),[b,f]=o.useState(!1),[$,g]=o.useState("");return o.useEffect(()=>{const v=l.current;if(v){var E;g(((E=v.textContent)!==null&&E!==void 0?E:"").trim())}},[a.children]),o.createElement(Y.ItemSlot,{scope:t,disabled:r,textValue:c??$},o.createElement(co,i({asChild:!0},u,{focusable:!r}),o.createElement(S.div,i({role:"menuitem","data-highlighted":b?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:p,onPointerMove:m(e.onPointerMove,W(v=>{r?d.onItemLeave(v):(d.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus())})),onPointerLeave:m(e.onPointerLeave,W(v=>d.onItemLeave(v))),onFocus:m(e.onFocus,()=>f(!0)),onBlur:m(e.onBlur,()=>f(!1))}))))}),Ro=o.forwardRef((e,n)=>{const{checked:t=!1,onCheckedChange:r,...c}=e;return o.createElement(Ie,{scope:e.__scopeMenu,checked:t},o.createElement(J,i({role:"menuitemcheckbox","aria-checked":K(t)?"mixed":t},c,{ref:n,"data-state":Q(t),onSelect:m(c.onSelect,()=>r==null?void 0:r(K(t)?!0:!t),{checkForDefaultPrevented:!1})})))}),Io="MenuRadioGroup",[Po,So]=D(Io,{value:void 0,onValueChange:()=>{}}),ko=o.forwardRef((e,n)=>{const{value:t,onValueChange:r,...c}=e,a=ve(r);return o.createElement(Po,{scope:e.__scopeMenu,value:t,onValueChange:a},o.createElement(Co,i({},c,{ref:n})))}),Oo="MenuRadioItem",To=o.forwardRef((e,n)=>{const{value:t,...r}=e,c=So(Oo,e.__scopeMenu),a=t===c.value;return o.createElement(Ie,{scope:e.__scopeMenu,checked:a},o.createElement(J,i({role:"menuitemradio","aria-checked":a},r,{ref:n,"data-state":Q(a),onSelect:m(r.onSelect,()=>{var d;return(d=c.onValueChange)===null||d===void 0?void 0:d.call(c,t)},{checkForDefaultPrevented:!1})})))}),Re="MenuItemIndicator",[Ie,No]=D(Re,{checked:!1}),Fo=o.forwardRef((e,n)=>{const{__scopeMenu:t,forceMount:r,...c}=e,a=No(Re,t);return o.createElement(H,{present:r||K(a.checked)||a.checked===!0},o.createElement(S.span,i({},c,{ref:n,"data-state":Q(a.checked)})))}),Ao=o.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e;return o.createElement(S.div,i({role:"separator","aria-orientation":"horizontal"},r,{ref:n}))}),Ko=o.forwardRef((e,n)=>{const{__scopeMenu:t,...r}=e,c=G(t);return o.createElement(to,i({},c,r,{ref:n}))}),Lo="MenuSub";D(Lo);function jo(e){return e?"open":"closed"}function K(e){return e==="indeterminate"}function Q(e){return K(e)?"indeterminate":e?"checked":"unchecked"}function Vo(e){const n=document.activeElement;for(const t of e)if(t===n||(t.focus(),document.activeElement!==n))return}function Go(e,n){return e.map((t,r)=>e[(n+r)%e.length])}function Uo(e,n,t){const c=n.length>1&&Array.from(n).every(p=>p===n[0])?n[0]:n,a=t?e.indexOf(t):-1;let d=Go(e,Math.max(a,0));c.length===1&&(d=d.filter(p=>p!==t));const l=d.find(p=>p.toLowerCase().startsWith(c.toLowerCase()));return l!==t?l:void 0}function Bo(e,n){const{x:t,y:r}=e;let c=!1;for(let a=0,d=n.length-1;a<n.length;d=a++){const u=n[a].x,l=n[a].y,p=n[d].x,b=n[d].y;l>r!=b>r&&t<(p-u)*(r-l)/(b-l)+u&&(c=!c)}return c}function qo(e,n){if(!n)return!1;const t={x:e.clientX,y:e.clientY};return Bo(t,n)}function W(e){return n=>n.pointerType==="mouse"?e(n):void 0}const Xo=bo,Yo=vo,zo=Mo,Wo=go,Ho=J,Zo=Ro,Jo=ko,Qo=To,et=Fo,ot=Ao,tt=Ko,Pe="DropdownMenu",[nt,Qt]=xe(Pe,[ge]),M=ge(),[rt,Se]=nt(Pe),ct=e=>{const{__scopeDropdownMenu:n,children:t,dir:r,open:c,defaultOpen:a,onOpenChange:d,modal:u=!0}=e,l=M(n),p=o.useRef(null),[b=!1,f]=Ge({prop:c,defaultProp:a,onChange:d});return o.createElement(rt,{scope:n,triggerId:de(),triggerRef:p,contentId:de(),open:b,onOpenChange:f,onOpenToggle:o.useCallback(()=>f($=>!$),[f]),modal:u},o.createElement(Xo,i({},l,{open:b,onOpenChange:f,dir:r,modal:u}),t))},at="DropdownMenuTrigger",st=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...c}=e,a=Se(at,t),d=M(t);return o.createElement(Yo,i({asChild:!0},d),o.createElement(S.button,i({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:qe(n,a.triggerRef),onPointerDown:m(e.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(a.onOpenToggle(),a.open||u.preventDefault())}),onKeyDown:m(e.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&a.onOpenToggle(),u.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})))}),dt=e=>{const{__scopeDropdownMenu:n,...t}=e,r=M(n);return o.createElement(zo,i({},r,t))},it="DropdownMenuContent",ut=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=Se(it,t),a=M(t),d=o.useRef(!1);return o.createElement(Wo,i({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:n,onCloseAutoFocus:m(e.onCloseAutoFocus,u=>{var l;d.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:m(e.onInteractOutside,u=>{const l=u.detail.originalEvent,p=l.button===0&&l.ctrlKey===!0,b=l.button===2||p;(!c.modal||b)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ft=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(Ho,i({},c,r,{ref:n}))}),lt=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(Zo,i({},c,r,{ref:n}))}),pt=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(Jo,i({},c,r,{ref:n}))}),$t=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(Qo,i({},c,r,{ref:n}))}),mt=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(et,i({},c,r,{ref:n}))}),_t=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(ot,i({},c,r,{ref:n}))}),bt=o.forwardRef((e,n)=>{const{__scopeDropdownMenu:t,...r}=e,c=M(t);return o.createElement(tt,i({},c,r,{ref:n}))}),vt=ct,xt=st,ht=dt,Mt=ut,wt=ft,gt=lt,Et=pt,yt=$t,ke=mt,Ct=_t,Dt=bt;var Rt="_1k2mbvi2",It="_1k2mbvi1 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr1sw fyvr1us fyvr1wo fyvr1yk fyvr11ms fyvr11r5",Oe="_1k2mbvi5",ee="_1k2mbvi4 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr1x4 fyvr1yk fyvr1ss fyvr1uo fyvr12uk fyvr12ue fyvr11h0 fyvr11ko fyvr11jw fyvr12sz fyvr11n2 fyvr11hw fyvr12q5",Pt="_1k2mbvi6";const ue=vt,fe=xt,le=ht,pe=({className:e,children:n,...t})=>x.jsxs(Mt,{className:j(It,e),side:"bottom",sideOffset:4,align:"center",...t,children:[n,x.jsx(St,{})]}),St=()=>x.jsx(Dt,{className:Rt}),$e=({className:e,children:n,...t})=>x.jsx(wt,{className:j(ee,e),asChild:!0,...t,children:x.jsx(ao,{children:x.jsx(A,{variant:"small",children:n})})}),kt=({children:e})=>x.jsx(ke,{className:Oe,children:e}),en=()=>x.jsx(Ct,{className:Pt,asChild:!0,children:x.jsx(io,{marginTop:"1",marginBottom:"1"})}),me=o.forwardRef(({className:e,children:n,...t},r)=>x.jsxs(gt,{className:j(ee,e),...t,ref:r,children:[x.jsx(kt,{children:x.jsx(so,{size:"xs"})}),x.jsx(A,{variant:"small",children:n})]})),_e=Et,be=o.forwardRef(({className:e,children:n,...t},r)=>x.jsxs(yt,{className:j(ee,e),...t,ref:r,children:[x.jsx(ke,{className:Oe,children:x.jsx(A,{children:"•"})}),x.jsx(A,{variant:"small",children:n})]}));try{ue.displayName="DropdownMenuRoot",ue.__docgenInfo={description:"",displayName:"DropdownMenuRoot",props:{}}}catch{}try{fe.displayName="DropdownMenuTrigger",fe.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{le.displayName="DropdownMenuPortal",le.__docgenInfo={description:"",displayName:"DropdownMenuPortal",props:{}}}catch{}try{pe.displayName="DropdownMenuContent",pe.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{$e.displayName="DropdownMenuItem",$e.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{me.displayName="DropdownMenuCheckboxItem",me.__docgenInfo={description:"",displayName:"DropdownMenuCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_e.displayName="DropdownMenuRadioGroup",_e.__docgenInfo={description:"",displayName:"DropdownMenuRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{be.displayName="DropdownMenuRadioItem",be.__docgenInfo={description:"",displayName:"DropdownMenuRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{ue as D,fe as a,pe as b,$e as c,en as d,me as e,_e as f,be as g};
//# sourceMappingURL=DropdownMenu-264043cc.js.map
