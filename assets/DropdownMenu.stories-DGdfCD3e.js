import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as s}from"./index-BP8_t0zE.js";import{c as J,B as Te}from"./Box-DBNdP3Vb.js";import{I as Er}from"./IconButton-DA5Sk0-c.js";import{i as Nr,o as jr}from"./WarningIcon-Dx9PPqs2.js";import{c as h,b as Ae,a as Tr}from"./index-Bs37d09a.js";import{c as ke,u as G,P as j,e as Oe,S as Ar,d as kr}from"./index-BEGV7LFS.js";import{c as Or}from"./index-D9BCMdC1.js";import{u as Lr}from"./index-0utPunYv.js";import{D as Gr}from"./index-CC_leflP.js";import{h as Fr,u as Kr,F as $r,R as Ur}from"./Combination-IvoEgOJT.js";import{c as Le,A as Br,C as Vr,a as Wr,R as Xr}from"./index-CcgnftcY.js";import{P as Yr}from"./index-C7TpZj2n.js";import{P as Q}from"./index-FuRlZgql.js";import{c as Ge,R as qr,I as Hr}from"./index-CgR5GlLn.js";import{u as Ie}from"./index-BISih6-y.js";import"./index-C-wg1gDz.js";import{T as Y}from"./Text-JHVrTjg2.js";import"./helpers.css.ts.vanilla-R394IIDY.js";/* empty css                            */import{D as zr}from"./Divider-D5OjzxoY.js";import"./Button-CZBdAAE4.js";/* empty css                              */import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./index-BxmsGmlx.js";import"./index-nCODJAFu.js";import"./typography-BClcJN8w.js";var se=["Enter"," "],Zr=["ArrowDown","PageUp","Home"],Fe=["ArrowUp","PageDown","End"],Jr=[...Zr,...Fe],Qr={ltr:[...se,"ArrowRight"],rtl:[...se,"ArrowLeft"]},en={ltr:["ArrowLeft"],rtl:["ArrowRight"]},F="Menu",[O,rn,nn]=Or(F),[S,Ke]=ke(F,[nn,Le,Ge]),ee=Le(),$e=Ge(),[on,b]=S(F),[tn,K]=S(F),Ue=e=>{const{__scopeMenu:n,open:r=!1,children:t,dir:a,onOpenChange:c,modal:u=!0}=e,l=ee(n),[m,v]=s.useState(null),p=s.useRef(!1),i=Ae(c),f=Lr(a);return s.useEffect(()=>{const M=()=>{p.current=!0,document.addEventListener("pointerdown",_,{capture:!0,once:!0}),document.addEventListener("pointermove",_,{capture:!0,once:!0})},_=()=>p.current=!1;return document.addEventListener("keydown",M,{capture:!0}),()=>{document.removeEventListener("keydown",M,{capture:!0}),document.removeEventListener("pointerdown",_,{capture:!0}),document.removeEventListener("pointermove",_,{capture:!0})}},[]),o.jsx(Xr,{...l,children:o.jsx(on,{scope:n,open:r,onOpenChange:i,content:m,onContentChange:v,children:o.jsx(tn,{scope:n,onClose:s.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:f,modal:u,children:t})})})};Ue.displayName=F;var an="MenuAnchor",le=s.forwardRef((e,n)=>{const{__scopeMenu:r,...t}=e,a=ee(r);return o.jsx(Br,{...a,...t,ref:n})});le.displayName=an;var pe="MenuPortal",[sn,Be]=S(pe,{forceMount:void 0}),Ve=e=>{const{__scopeMenu:n,forceMount:r,children:t,container:a}=e,c=b(pe,n);return o.jsx(sn,{scope:n,forceMount:r,children:o.jsx(Q,{present:r||c.open,children:o.jsx(Yr,{asChild:!0,container:a,children:t})})})};Ve.displayName=pe;var g="MenuContent",[cn,fe]=S(g),We=s.forwardRef((e,n)=>{const r=Be(g,e.__scopeMenu),{forceMount:t=r.forceMount,...a}=e,c=b(g,e.__scopeMenu),u=K(g,e.__scopeMenu);return o.jsx(O.Provider,{scope:e.__scopeMenu,children:o.jsx(Q,{present:t||c.open,children:o.jsx(O.Slot,{scope:e.__scopeMenu,children:u.modal?o.jsx(un,{...a,ref:n}):o.jsx(dn,{...a,ref:n})})})})}),un=s.forwardRef((e,n)=>{const r=b(g,e.__scopeMenu),t=s.useRef(null),a=G(n,t);return s.useEffect(()=>{const c=t.current;if(c)return Fr(c)},[]),o.jsx(me,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:h(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),dn=s.forwardRef((e,n)=>{const r=b(g,e.__scopeMenu);return o.jsx(me,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),me=s.forwardRef((e,n)=>{const{__scopeMenu:r,loop:t=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:u,disableOutsidePointerEvents:l,onEntryFocus:m,onEscapeKeyDown:v,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:M,disableOutsideScroll:_,...D}=e,P=b(g,r),T=K(g,r),$=ee(r),U=$e(r),xe=rn(r),[Rr,ge]=s.useState(null),B=s.useRef(null),Dr=G(n,B,P.onContentChange),V=s.useRef(0),W=s.useRef(""),Ir=s.useRef(0),ne=s.useRef(null),Ce=s.useRef("right"),oe=s.useRef(0),Sr=_?Ur:s.Fragment,br=_?{as:Ar,allowPinchZoom:!0}:void 0,Pr=d=>{var N,Re;const x=W.current+d,C=xe().filter(y=>!y.disabled),R=document.activeElement,te=(N=C.find(y=>y.ref.current===R))==null?void 0:N.textValue,ae=C.map(y=>y.textValue),ye=Cn(ae,x,te),A=(Re=C.find(y=>y.textValue===ye))==null?void 0:Re.ref.current;(function y(De){W.current=De,window.clearTimeout(V.current),De!==""&&(V.current=window.setTimeout(()=>y(""),1e3))})(x),A&&setTimeout(()=>A.focus())};s.useEffect(()=>()=>window.clearTimeout(V.current),[]),Kr();const E=s.useCallback(d=>{var C,R;return Ce.current===((C=ne.current)==null?void 0:C.side)&&Rn(d,(R=ne.current)==null?void 0:R.area)},[]);return o.jsx(cn,{scope:r,searchRef:W,onItemEnter:s.useCallback(d=>{E(d)&&d.preventDefault()},[E]),onItemLeave:s.useCallback(d=>{var x;E(d)||((x=B.current)==null||x.focus(),ge(null))},[E]),onTriggerLeave:s.useCallback(d=>{E(d)&&d.preventDefault()},[E]),pointerGraceTimerRef:Ir,onPointerGraceIntentChange:s.useCallback(d=>{ne.current=d},[]),children:o.jsx(Sr,{...br,children:o.jsx($r,{asChild:!0,trapped:a,onMountAutoFocus:h(c,d=>{var x;d.preventDefault(),(x=B.current)==null||x.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:o.jsx(Gr,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:v,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:M,children:o.jsx(qr,{asChild:!0,...U,dir:T.dir,orientation:"vertical",loop:t,currentTabStopId:Rr,onCurrentTabStopIdChange:ge,onEntryFocus:h(m,d=>{T.isUsingKeyboardRef.current||d.preventDefault()}),preventScrollOnEntryFocus:!0,children:o.jsx(Vr,{role:"menu","aria-orientation":"vertical","data-state":cr(P.open),"data-radix-menu-content":"",dir:T.dir,...$,...D,ref:Dr,style:{outline:"none",...D.style},onKeyDown:h(D.onKeyDown,d=>{const C=d.target.closest("[data-radix-menu-content]")===d.currentTarget,R=d.ctrlKey||d.altKey||d.metaKey,te=d.key.length===1;C&&(d.key==="Tab"&&d.preventDefault(),!R&&te&&Pr(d.key));const ae=B.current;if(d.target!==ae||!Jr.includes(d.key))return;d.preventDefault();const A=xe().filter(N=>!N.disabled).map(N=>N.ref.current);Fe.includes(d.key)&&A.reverse(),xn(A)}),onBlur:h(e.onBlur,d=>{d.currentTarget.contains(d.target)||(window.clearTimeout(V.current),W.current="")}),onPointerMove:h(e.onPointerMove,L(d=>{const x=d.target,C=oe.current!==d.clientX;if(d.currentTarget.contains(x)&&C){const R=d.clientX>oe.current?"right":"left";Ce.current=R,oe.current=d.clientX}}))})})})})})})});We.displayName=g;var ln="MenuGroup",ve=s.forwardRef((e,n)=>{const{__scopeMenu:r,...t}=e;return o.jsx(j.div,{role:"group",...t,ref:n})});ve.displayName=ln;var pn="MenuLabel",Xe=s.forwardRef((e,n)=>{const{__scopeMenu:r,...t}=e;return o.jsx(j.div,{...t,ref:n})});Xe.displayName=pn;var q="MenuItem",Se="menu.itemSelect",re=s.forwardRef((e,n)=>{const{disabled:r=!1,onSelect:t,...a}=e,c=s.useRef(null),u=K(q,e.__scopeMenu),l=fe(q,e.__scopeMenu),m=G(n,c),v=s.useRef(!1),p=()=>{const i=c.current;if(!r&&i){const f=new CustomEvent(Se,{bubbles:!0,cancelable:!0});i.addEventListener(Se,M=>t==null?void 0:t(M),{once:!0}),kr(i,f),f.defaultPrevented?v.current=!1:u.onClose()}};return o.jsx(Ye,{...a,ref:m,disabled:r,onClick:h(e.onClick,p),onPointerDown:i=>{var f;(f=e.onPointerDown)==null||f.call(e,i),v.current=!0},onPointerUp:h(e.onPointerUp,i=>{var f;v.current||(f=i.currentTarget)==null||f.click()}),onKeyDown:h(e.onKeyDown,i=>{const f=l.searchRef.current!=="";r||f&&i.key===" "||se.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});re.displayName=q;var Ye=s.forwardRef((e,n)=>{const{__scopeMenu:r,disabled:t=!1,textValue:a,...c}=e,u=fe(q,r),l=$e(r),m=s.useRef(null),v=G(n,m),[p,i]=s.useState(!1),[f,M]=s.useState("");return s.useEffect(()=>{const _=m.current;_&&M((_.textContent??"").trim())},[c.children]),o.jsx(O.ItemSlot,{scope:r,disabled:t,textValue:a??f,children:o.jsx(Hr,{asChild:!0,...l,focusable:!t,children:o.jsx(j.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":t||void 0,"data-disabled":t?"":void 0,...c,ref:v,onPointerMove:h(e.onPointerMove,L(_=>{t?u.onItemLeave(_):(u.onItemEnter(_),_.defaultPrevented||_.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:h(e.onPointerLeave,L(_=>u.onItemLeave(_))),onFocus:h(e.onFocus,()=>i(!0)),onBlur:h(e.onBlur,()=>i(!1))})})})}),fn="MenuCheckboxItem",qe=s.forwardRef((e,n)=>{const{checked:r=!1,onCheckedChange:t,...a}=e;return o.jsx(Qe,{scope:e.__scopeMenu,checked:r,children:o.jsx(re,{role:"menuitemcheckbox","aria-checked":H(r)?"mixed":r,...a,ref:n,"data-state":_e(r),onSelect:h(a.onSelect,()=>t==null?void 0:t(H(r)?!0:!r),{checkForDefaultPrevented:!1})})})});qe.displayName=fn;var He="MenuRadioGroup",[mn,vn]=S(He,{value:void 0,onValueChange:()=>{}}),ze=s.forwardRef((e,n)=>{const{value:r,onValueChange:t,...a}=e,c=Ae(t);return o.jsx(mn,{scope:e.__scopeMenu,value:r,onValueChange:c,children:o.jsx(ve,{...a,ref:n})})});ze.displayName=He;var Ze="MenuRadioItem",Je=s.forwardRef((e,n)=>{const{value:r,...t}=e,a=vn(Ze,e.__scopeMenu),c=r===a.value;return o.jsx(Qe,{scope:e.__scopeMenu,checked:c,children:o.jsx(re,{role:"menuitemradio","aria-checked":c,...t,ref:n,"data-state":_e(c),onSelect:h(t.onSelect,()=>{var u;return(u=a.onValueChange)==null?void 0:u.call(a,r)},{checkForDefaultPrevented:!1})})})});Je.displayName=Ze;var he="MenuItemIndicator",[Qe,hn]=S(he,{checked:!1}),er=s.forwardRef((e,n)=>{const{__scopeMenu:r,forceMount:t,...a}=e,c=hn(he,r);return o.jsx(Q,{present:t||H(c.checked)||c.checked===!0,children:o.jsx(j.span,{...a,ref:n,"data-state":_e(c.checked)})})});er.displayName=he;var _n="MenuSeparator",rr=s.forwardRef((e,n)=>{const{__scopeMenu:r,...t}=e;return o.jsx(j.div,{role:"separator","aria-orientation":"horizontal",...t,ref:n})});rr.displayName=_n;var Mn="MenuArrow",nr=s.forwardRef((e,n)=>{const{__scopeMenu:r,...t}=e,a=ee(r);return o.jsx(Wr,{...a,...t,ref:n})});nr.displayName=Mn;var wn="MenuSub",[qo,or]=S(wn),k="MenuSubTrigger",tr=s.forwardRef((e,n)=>{const r=b(k,e.__scopeMenu),t=K(k,e.__scopeMenu),a=or(k,e.__scopeMenu),c=fe(k,e.__scopeMenu),u=s.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:m}=c,v={__scopeMenu:e.__scopeMenu},p=s.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return s.useEffect(()=>p,[p]),s.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),m(null)}},[l,m]),o.jsx(le,{asChild:!0,...v,children:o.jsx(Ye,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":a.contentId,"data-state":cr(r.open),...e,ref:Oe(n,a.onTriggerChange),onClick:i=>{var f;(f=e.onClick)==null||f.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:h(e.onPointerMove,L(i=>{c.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!r.open&&!u.current&&(c.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{r.onOpenChange(!0),p()},100))})),onPointerLeave:h(e.onPointerLeave,L(i=>{var M,_;p();const f=(M=r.content)==null?void 0:M.getBoundingClientRect();if(f){const D=(_=r.content)==null?void 0:_.dataset.side,P=D==="right",T=P?-5:5,$=f[P?"left":"right"],U=f[P?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+T,y:i.clientY},{x:$,y:f.top},{x:U,y:f.top},{x:U,y:f.bottom},{x:$,y:f.bottom}],side:D}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:h(e.onKeyDown,i=>{var M;const f=c.searchRef.current!=="";e.disabled||f&&i.key===" "||Qr[t.dir].includes(i.key)&&(r.onOpenChange(!0),(M=r.content)==null||M.focus(),i.preventDefault())})})})});tr.displayName=k;var ar="MenuSubContent",sr=s.forwardRef((e,n)=>{const r=Be(g,e.__scopeMenu),{forceMount:t=r.forceMount,...a}=e,c=b(g,e.__scopeMenu),u=K(g,e.__scopeMenu),l=or(ar,e.__scopeMenu),m=s.useRef(null),v=G(n,m);return o.jsx(O.Provider,{scope:e.__scopeMenu,children:o.jsx(Q,{present:t||c.open,children:o.jsx(O.Slot,{scope:e.__scopeMenu,children:o.jsx(me,{id:l.contentId,"aria-labelledby":l.triggerId,...a,ref:v,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;u.isUsingKeyboardRef.current&&((i=m.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:h(e.onFocusOutside,p=>{p.target!==l.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:h(e.onEscapeKeyDown,p=>{u.onClose(),p.preventDefault()}),onKeyDown:h(e.onKeyDown,p=>{var M;const i=p.currentTarget.contains(p.target),f=en[u.dir].includes(p.key);i&&f&&(c.onOpenChange(!1),(M=l.trigger)==null||M.focus(),p.preventDefault())})})})})})});sr.displayName=ar;function cr(e){return e?"open":"closed"}function H(e){return e==="indeterminate"}function _e(e){return H(e)?"indeterminate":e?"checked":"unchecked"}function xn(e){const n=document.activeElement;for(const r of e)if(r===n||(r.focus(),document.activeElement!==n))return}function gn(e,n){return e.map((r,t)=>e[(n+t)%e.length])}function Cn(e,n,r){const a=n.length>1&&Array.from(n).every(v=>v===n[0])?n[0]:n,c=r?e.indexOf(r):-1;let u=gn(e,Math.max(c,0));a.length===1&&(u=u.filter(v=>v!==r));const m=u.find(v=>v.toLowerCase().startsWith(a.toLowerCase()));return m!==r?m:void 0}function yn(e,n){const{x:r,y:t}=e;let a=!1;for(let c=0,u=n.length-1;c<n.length;u=c++){const l=n[c].x,m=n[c].y,v=n[u].x,p=n[u].y;m>t!=p>t&&r<(v-l)*(t-m)/(p-m)+l&&(a=!a)}return a}function Rn(e,n){if(!n)return!1;const r={x:e.clientX,y:e.clientY};return yn(r,n)}function L(e){return n=>n.pointerType==="mouse"?e(n):void 0}var Dn=Ue,In=le,Sn=Ve,bn=We,Pn=ve,En=Xe,Nn=re,jn=qe,Tn=ze,An=Je,kn=er,On=rr,Ln=nr,Gn=tr,Fn=sr,Me="DropdownMenu",[Kn,Ho]=ke(Me,[Ke]),w=Ke(),[$n,ir]=Kn(Me),ur=e=>{const{__scopeDropdownMenu:n,children:r,dir:t,open:a,defaultOpen:c,onOpenChange:u,modal:l=!0}=e,m=w(n),v=s.useRef(null),[p=!1,i]=Tr({prop:a,defaultProp:c,onChange:u});return o.jsx($n,{scope:n,triggerId:Ie(),triggerRef:v,contentId:Ie(),open:p,onOpenChange:i,onOpenToggle:s.useCallback(()=>i(f=>!f),[i]),modal:l,children:o.jsx(Dn,{...m,open:p,onOpenChange:i,dir:t,modal:l,children:r})})};ur.displayName=Me;var dr="DropdownMenuTrigger",lr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,disabled:t=!1,...a}=e,c=ir(dr,r),u=w(r);return o.jsx(In,{asChild:!0,...u,children:o.jsx(j.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...a,ref:Oe(n,c.triggerRef),onPointerDown:h(e.onPointerDown,l=>{!t&&l.button===0&&l.ctrlKey===!1&&(c.onOpenToggle(),c.open||l.preventDefault())}),onKeyDown:h(e.onKeyDown,l=>{t||(["Enter"," "].includes(l.key)&&c.onOpenToggle(),l.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});lr.displayName=dr;var Un="DropdownMenuPortal",pr=e=>{const{__scopeDropdownMenu:n,...r}=e,t=w(n);return o.jsx(Sn,{...t,...r})};pr.displayName=Un;var fr="DropdownMenuContent",mr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=ir(fr,r),c=w(r),u=s.useRef(!1);return o.jsx(bn,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...t,ref:n,onCloseAutoFocus:h(e.onCloseAutoFocus,l=>{var m;u.current||(m=a.triggerRef.current)==null||m.focus(),u.current=!1,l.preventDefault()}),onInteractOutside:h(e.onInteractOutside,l=>{const m=l.detail.originalEvent,v=m.button===0&&m.ctrlKey===!0,p=m.button===2||v;(!a.modal||p)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});mr.displayName=fr;var Bn="DropdownMenuGroup",Vn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Pn,{...a,...t,ref:n})});Vn.displayName=Bn;var Wn="DropdownMenuLabel",Xn=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(En,{...a,...t,ref:n})});Xn.displayName=Wn;var Yn="DropdownMenuItem",vr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Nn,{...a,...t,ref:n})});vr.displayName=Yn;var qn="DropdownMenuCheckboxItem",hr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(jn,{...a,...t,ref:n})});hr.displayName=qn;var Hn="DropdownMenuRadioGroup",_r=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Tn,{...a,...t,ref:n})});_r.displayName=Hn;var zn="DropdownMenuRadioItem",Mr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(An,{...a,...t,ref:n})});Mr.displayName=zn;var Zn="DropdownMenuItemIndicator",wr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(kn,{...a,...t,ref:n})});wr.displayName=Zn;var Jn="DropdownMenuSeparator",xr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(On,{...a,...t,ref:n})});xr.displayName=Jn;var Qn="DropdownMenuArrow",gr=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Ln,{...a,...t,ref:n})});gr.displayName=Qn;var eo="DropdownMenuSubTrigger",ro=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Gn,{...a,...t,ref:n})});ro.displayName=eo;var no="DropdownMenuSubContent",oo=s.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...t}=e,a=w(r);return o.jsx(Fn,{...a,...t,ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});oo.displayName=no;var to=ur,ao=lr,so=pr,co=mr,io=vr,uo=hr,lo=_r,po=Mr,Cr=wr,fo=xr,mo=gr,vo="_1k2mbvi1 _1k2mbvi0 fyvr11d0 fyvr11do fyvr11bo fyvr11cc fyvr1sw fyvr1us fyvr1wo fyvr1yk fyvr11ms fyvr11tp",ho="_1k2mbvi2",we="_1k2mbvi4 _1k2mbvi3 fyvr11cw fyvr11dk fyvr11bk fyvr11c8 fyvr1x4 fyvr1yk fyvr1ss fyvr1uo fyvr12ws fyvr12wm fyvr11h0 fyvr11ko fyvr11jw fyvr12v7 fyvr11n4 fyvr11hw fyvr12s7",yr="_1k2mbvi5",_o="_1k2mbvi6";const ce=to,ie=ao,be=so,ue=({className:e,children:n,...r})=>o.jsxs(co,{className:J(vo,e),side:"bottom",sideOffset:4,align:"center",...r,children:[n,o.jsx(Mo,{})]}),Mo=()=>o.jsx(mo,{className:ho}),I=({className:e,children:n,...r})=>o.jsx(io,{className:J(we,e),asChild:!0,...r,children:o.jsx(Te,{children:o.jsx(Y,{variant:"small",children:n})})}),wo=({children:e})=>o.jsx(Cr,{className:yr,children:e}),Pe=()=>o.jsx(fo,{className:_o,asChild:!0,children:o.jsx(zr,{marginTop:"1",marginBottom:"1"})}),z=s.forwardRef(({className:e,children:n,...r},t)=>o.jsxs(uo,{className:J(we,e),...r,ref:t,children:[o.jsx(wo,{children:o.jsx(Nr,{size:"xs"})}),o.jsx(Y,{variant:"small",children:n})]})),de=lo,Z=s.forwardRef(({className:e,children:n,...r},t)=>o.jsxs(po,{className:J(we,e),...r,ref:t,children:[o.jsx(Cr,{className:yr,children:o.jsx(Y,{children:"•"})}),o.jsx(Y,{variant:"small",children:n})]}));try{ce.displayName="DropdownMenuRoot",ce.__docgenInfo={description:"",displayName:"DropdownMenuRoot",props:{}}}catch{}try{ie.displayName="DropdownMenuTrigger",ie.__docgenInfo={description:"",displayName:"DropdownMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{be.displayName="DropdownMenuPortal",be.__docgenInfo={description:"",displayName:"DropdownMenuPortal",props:{}}}catch{}try{ue.displayName="DropdownMenuContent",ue.__docgenInfo={description:"",displayName:"DropdownMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="DropdownMenuItem",I.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{z.displayName="DropdownMenuCheckboxItem",z.__docgenInfo={description:"",displayName:"DropdownMenuCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{de.displayName="DropdownMenuRadioGroup",de.__docgenInfo={description:"",displayName:"DropdownMenuRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Z.displayName="DropdownMenuRadioItem",Z.__docgenInfo={description:"",displayName:"DropdownMenuRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const zo={title:"Components/DropdownMenu"},xo=()=>{const[e,n]=s.useState(!0),[r,t]=s.useState(!1),[a,c]=s.useState("list");return o.jsx(Te,{justifyContent:"center",children:o.jsxs(ce,{children:[o.jsx(ie,{asChild:!0,children:o.jsx(Er,{icon:jr})}),o.jsxs(ue,{children:[o.jsx(I,{children:"New Tab"}),o.jsx(I,{children:"New Window"}),o.jsx(I,{disabled:!0,children:"New Private Tab"}),o.jsx(I,{children:"Item 4"}),o.jsx(I,{children:"Item 5"}),o.jsx(Pe,{}),o.jsx(z,{checked:e,onCheckedChange:u=>n(!!u),children:"Show Bookmarks"}),o.jsx(z,{checked:r,onCheckedChange:u=>t(!!u),children:"Show Full URLs"}),o.jsx(Pe,{}),o.jsxs(de,{value:a,onValueChange:u=>c(u),children:[o.jsx(Z,{value:"list",children:"List"}),o.jsx(Z,{value:"grid",children:"Grid"})]})]})]})})},X={render:xo,args:{}};var Ee,Ne,je;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {}
}`,...(je=(Ne=X.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};const Zo=["Default"];export{X as Default,Zo as __namedExportsOrder,zo as default};