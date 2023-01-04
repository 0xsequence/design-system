import{j as R,a as $e}from"./jsx-runtime-a9c13c85.js";import{_ as I}from"./extends-98964cd2.js";import{r as e}from"./index-d8ade8ea.js";import{r as Ce}from"./index-ffd4619b.js";import{c as k,$ as Be,b as ve,a as L,d as _,e as G,g as Fe,f as qe}from"./index.module-ad4057e5.js";import{$ as We,a as Ke}from"./index.module-bab4cba0.js";import{h as Ue,$ as je,c as ze,a as Ge,b as Ye}from"./Combination-adb67df6.js";import{$ as fe}from"./index.module-c986f64a.js";import{$ as Xe}from"./index.module-e6a6661a.js";import{c as Ze,B as Je}from"./Box-f4432bb8.js";import{F as Qe}from"./Field-a22ff8d4.js";import{d as et}from"./WarningIcon-d09bba5b.js";import"./atoms.css-bb4ad6bf.js";/* empty css                              */function xe(a,[s,o]){return Math.min(o,Math.max(s,a))}const ye=e.forwardRef((a,s)=>e.createElement(k.span,I({},a,{ref:s,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...a.style}}))),Qt=ye,tt=[" ","Enter","ArrowUp","ArrowDown"],nt=[" ","Enter"],re="Select",[ce,Ee,ot]=We(re),[Y,en]=Be(re,[ot]),[rt,q]=Y(re),[ct,at]=Y(re),lt=a=>{const{__scopeSelect:s,children:o,open:d,defaultOpen:i,onOpenChange:n,value:r,defaultValue:b,onValueChange:t,dir:p,name:u,autoComplete:x,disabled:S,required:l}=a,[$,C]=e.useState(null),[y,f]=e.useState(null),[m,P]=e.useState(!1),X=Ke(p),[Z=!1,W]=ve({prop:d,defaultProp:i,onChange:n}),[K,J]=ve({prop:r,defaultProp:b,onChange:t}),U=e.useRef(null),B=$?Boolean($.closest("form")):!0,[V,Q]=e.useState(new Set),F=Array.from(V).map(T=>T.props.value).join(";");return e.createElement(rt,{required:l,scope:s,trigger:$,onTriggerChange:C,valueNode:y,onValueNodeChange:f,valueNodeHasChildren:m,onValueNodeHasChildrenChange:P,contentId:fe(),value:K,onValueChange:J,open:Z,onOpenChange:W,dir:X,triggerPointerDownPosRef:U,disabled:S},e.createElement(ce.Provider,{scope:s},e.createElement(ct,{scope:a.__scopeSelect,onNativeOptionAdd:e.useCallback(T=>{Q(j=>new Set(j).add(T))},[]),onNativeOptionRemove:e.useCallback(T=>{Q(j=>{const ee=new Set(j);return ee.delete(T),ee})},[])},o)),B?e.createElement(_e,{key:F,"aria-hidden":!0,required:l,tabIndex:-1,name:u,autoComplete:x,value:K,onChange:T=>J(T.target.value),disabled:S},K===void 0?e.createElement("option",{value:""}):null,Array.from(V)):null)},st="SelectTrigger",it=e.forwardRef((a,s)=>{const{__scopeSelect:o,disabled:d=!1,...i}=a,n=q(st,o),r=n.disabled||d,b=L(s,n.onTriggerChange),t=Ee(o),[p,u,x]=Ie(l=>{const $=t().filter(f=>!f.disabled),C=$.find(f=>f.value===n.value),y=Re($,l,C);y!==void 0&&n.onValueChange(y.value)}),S=()=>{r||(n.onOpenChange(!0),x())};return e.createElement(k.button,I({type:"button",role:"combobox","aria-controls":n.contentId,"aria-expanded":n.open,"aria-required":n.required,"aria-autocomplete":"none",dir:n.dir,"data-state":n.open?"open":"closed",disabled:r,"data-disabled":r?"":void 0,"data-placeholder":n.value===void 0?"":void 0},i,{ref:b,onClick:_(i.onClick,l=>{l.currentTarget.focus()}),onPointerDown:_(i.onPointerDown,l=>{const $=l.target;$.hasPointerCapture(l.pointerId)&&$.releasePointerCapture(l.pointerId),l.button===0&&l.ctrlKey===!1&&(S(),n.triggerPointerDownPosRef.current={x:Math.round(l.pageX),y:Math.round(l.pageY)},l.preventDefault())}),onKeyDown:_(i.onKeyDown,l=>{const $=p.current!=="";!(l.ctrlKey||l.altKey||l.metaKey)&&l.key.length===1&&u(l.key),!($&&l.key===" ")&&tt.includes(l.key)&&(S(),l.preventDefault())})}))}),dt="SelectValue",ut=e.forwardRef((a,s)=>{const{__scopeSelect:o,className:d,style:i,children:n,placeholder:r,...b}=a,t=q(dt,o),{onValueNodeHasChildrenChange:p}=t,u=n!==void 0,x=L(s,t.onValueNodeChange);return G(()=>{p(u)},[p,u]),e.createElement(k.span,I({},b,{ref:x,style:{pointerEvents:"none"}}),t.value===void 0&&r!==void 0?r:n)}),ft=e.forwardRef((a,s)=>{const{__scopeSelect:o,children:d,...i}=a;return e.createElement(k.span,I({"aria-hidden":!0},i,{ref:s}),d||"▼")}),pe="SelectContent",pt=e.forwardRef((a,s)=>{const o=q(pe,a.__scopeSelect),[d,i]=e.useState();return G(()=>{i(new DocumentFragment)},[]),e.createElement(e.Fragment,null,o.open?e.createElement(mt,I({},a,{ref:s})):d?Ce.createPortal(e.createElement(Te,{scope:a.__scopeSelect},e.createElement(ce.Slot,{scope:a.__scopeSelect},e.createElement("div",null,a.children))),d):null)}),O=10,[Te,me]=Y(pe),mt=e.forwardRef((a,s)=>{const{__scopeSelect:o,onCloseAutoFocus:d,...i}=a,n=q(pe,o),[r,b]=e.useState(null),[t,p]=e.useState(null),[u,x]=e.useState(null),S=L(s,c=>p(c)),[l,$]=e.useState(null),[C,y]=e.useState(null),f=Ee(o),[m,P]=e.useState(!1),X=e.useRef(!0),Z=e.useRef(!1),W=e.useRef(!1);e.useEffect(()=>{if(t)return Ue(t)},[t]),je();const[K,J]=e.useState();G(()=>{t&&J(window.getComputedStyle(t).zIndex)},[t]);const U=e.useCallback(c=>{const[g,...E]=f().map(v=>v.ref.current),[h]=E.slice(-1),w=document.activeElement;for(const v of c)if(v===w||(v==null||v.scrollIntoView({block:"nearest"}),v===g&&u&&(u.scrollTop=0),v===h&&u&&(u.scrollTop=u.scrollHeight),v==null||v.focus(),document.activeElement!==w))return},[f,u]),B=e.useCallback(()=>{if(n.trigger&&n.valueNode&&r&&t&&u&&l&&C){const c=n.trigger.getBoundingClientRect(),g=t.getBoundingClientRect(),E=n.valueNode.getBoundingClientRect(),h=C.getBoundingClientRect();if(n.dir!=="rtl"){const D=h.left-g.left,M=E.left-D,A=c.left-M,H=c.width+A,se=Math.max(H,g.width),ie=window.innerWidth-O,de=xe(M,[O,ie-se]);r.style.minWidth=H+"px",r.style.left=de+"px"}else{const D=g.right-h.right,M=window.innerWidth-E.right-D,A=window.innerWidth-c.right-M,H=c.width+A,se=Math.max(H,g.width),ie=window.innerWidth-O,de=xe(M,[O,ie-se]);r.style.minWidth=H+"px",r.style.right=de+"px"}const w=f(),v=window.innerHeight-O*2,z=u.scrollHeight,N=window.getComputedStyle(t),ae=parseInt(N.borderTopWidth,10),be=parseInt(N.paddingTop,10),he=parseInt(N.borderBottomWidth,10),Oe=parseInt(N.paddingBottom,10),ge=ae+be+z+Oe+he,ke=Math.min(l.offsetHeight*5,ge),we=window.getComputedStyle(u),Ve=parseInt(we.paddingTop,10),De=parseInt(we.paddingBottom,10),te=c.top+c.height/2-O,Ae=v-te,le=l.offsetHeight/2,He=l.offsetTop+le,ne=ae+be+He,Le=ge-ne;if(ne<=te){const D=l===w[w.length-1].ref.current;r.style.bottom="0px";const M=t.clientHeight-u.offsetTop-u.offsetHeight,A=Math.max(Ae,le+(D?De:0)+M+he),H=ne+A;r.style.height=H+"px"}else{const D=l===w[0].ref.current;r.style.top="0px";const A=Math.max(te,ae+u.offsetTop+(D?Ve:0)+le)+Le;r.style.height=A+"px",u.scrollTop=ne-te+u.offsetTop}r.style.margin=`${O}px 0`,r.style.minHeight=ke+"px",r.style.maxHeight=v+"px",P(!0),requestAnimationFrame(()=>Z.current=!0)}},[f,n.trigger,n.valueNode,r,t,u,l,C,n.dir]);G(()=>B(),[B]);const V=e.useCallback(()=>U([l,t]),[U,l,t]);e.useEffect(()=>{m&&V()},[m,V]);const Q=e.useCallback(c=>{c&&X.current===!0&&(B(),V(),X.current=!1)},[B,V]),{onOpenChange:F,triggerPointerDownPosRef:T}=n;e.useEffect(()=>{if(t){let c={x:0,y:0};const g=h=>{var w,v,z,N;c={x:Math.abs(Math.round(h.pageX)-((w=(v=T.current)===null||v===void 0?void 0:v.x)!==null&&w!==void 0?w:0)),y:Math.abs(Math.round(h.pageY)-((z=(N=T.current)===null||N===void 0?void 0:N.y)!==null&&z!==void 0?z:0))}},E=h=>{c.x<=10&&c.y<=10?h.preventDefault():t.contains(h.target)||F(!1),document.removeEventListener("pointermove",g),T.current=null};return T.current!==null&&(document.addEventListener("pointermove",g),document.addEventListener("pointerup",E,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",E,{capture:!0})}}},[t,F,T]),e.useEffect(()=>{const c=()=>F(!1);return window.addEventListener("blur",c),window.addEventListener("resize",c),()=>{window.removeEventListener("blur",c),window.removeEventListener("resize",c)}},[F]);const[j,ee]=Ie(c=>{const g=f().filter(w=>!w.disabled),E=g.find(w=>w.ref.current===document.activeElement),h=Re(g,c,E);h&&setTimeout(()=>h.ref.current.focus())}),Pe=e.useCallback((c,g,E)=>{const h=!W.current&&!E;(n.value!==void 0&&n.value===g||h)&&($(c),h&&(W.current=!0))},[n.value]),Ne=e.useCallback(()=>t==null?void 0:t.focus(),[t]),Me=e.useCallback((c,g,E)=>{const h=!W.current&&!E;(n.value!==void 0&&n.value===g||h)&&y(c)},[n.value]);return e.createElement(Te,{scope:o,contentWrapper:r,content:t,viewport:u,onViewportChange:x,itemRefCallback:Pe,selectedItem:l,onItemLeave:Ne,itemTextRefCallback:Me,selectedItemText:C,onScrollButtonChange:Q,isPositioned:m,shouldExpandOnScrollRef:Z,searchRef:j},e.createElement(ze,{as:Fe,allowPinchZoom:!0},e.createElement("div",{ref:b,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:K}},e.createElement(Ge,{asChild:!0,trapped:n.open,onMountAutoFocus:c=>{c.preventDefault()},onUnmountAutoFocus:_(d,c=>{var g;(g=n.trigger)===null||g===void 0||g.focus({preventScroll:!0}),c.preventDefault()})},e.createElement(Ye,I({role:"listbox",id:n.contentId,"data-state":n.open?"open":"closed",dir:n.dir,onContextMenu:c=>c.preventDefault()},i,{ref:S,style:{display:"flex",flexDirection:"column",boxSizing:"border-box",maxHeight:"100%",outline:"none",...i.style},disableOutsidePointerEvents:!0,onFocusOutside:c=>c.preventDefault(),onDismiss:()=>n.onOpenChange(!1),onKeyDown:_(i.onKeyDown,c=>{const g=c.ctrlKey||c.altKey||c.metaKey;if(c.key==="Tab"&&c.preventDefault(),!g&&c.key.length===1&&ee(c.key),["ArrowUp","ArrowDown","Home","End"].includes(c.key)){let h=f().filter(w=>!w.disabled).map(w=>w.ref.current);if(["ArrowUp","End"].includes(c.key)&&(h=h.slice().reverse()),["ArrowUp","ArrowDown"].includes(c.key)){const w=c.target,v=h.indexOf(w);h=h.slice(v+1)}setTimeout(()=>U(h)),c.preventDefault()}})}))))))}),bt="SelectViewport",ht=e.forwardRef((a,s)=>{const{__scopeSelect:o,...d}=a,i=me(bt,o),n=L(s,i.onViewportChange),r=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ce.Slot,{scope:o},e.createElement(k.div,I({"data-radix-select-viewport":"",role:"presentation"},d,{ref:n,style:{position:"relative",flex:1,overflow:"auto",...d.style},onScroll:_(d.onScroll,b=>{const t=b.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:u}=i;if(u!=null&&u.current&&p){const x=Math.abs(r.current-t.scrollTop);if(x>0){const S=window.innerHeight-O*2,l=parseFloat(p.style.minHeight),$=parseFloat(p.style.height),C=Math.max(l,$);if(C<S){const y=C+x,f=Math.min(S,y),m=y-f;p.style.height=f+"px",p.style.bottom==="0px"&&(t.scrollTop=m>0?m:0,p.style.justifyContent="flex-end")}}}r.current=t.scrollTop})}))))}),gt="SelectGroup",[wt,tn]=Y(gt),$t=e.forwardRef((a,s)=>{const{__scopeSelect:o,...d}=a,i=fe();return e.createElement(wt,{scope:o,id:i},e.createElement(k.div,I({role:"group","aria-labelledby":i},d,{ref:s})))}),ue="SelectItem",[vt,xt]=Y(ue),St=e.forwardRef((a,s)=>{const{__scopeSelect:o,value:d,disabled:i=!1,textValue:n,...r}=a,b=q(ue,o),t=me(ue,o),p=b.value===d,[u,x]=e.useState(n??""),[S,l]=e.useState(!1),$=L(s,f=>{var m;return(m=t.itemRefCallback)===null||m===void 0?void 0:m.call(t,f,d,i)}),C=fe(),y=()=>{i||(b.onValueChange(d),b.onOpenChange(!1))};return e.createElement(vt,{scope:o,value:d,disabled:i,textId:C,isSelected:p,onItemTextChange:e.useCallback(f=>{x(m=>{var P;return m||((P=f==null?void 0:f.textContent)!==null&&P!==void 0?P:"").trim()})},[])},e.createElement(ce.ItemSlot,{scope:o,value:d,disabled:i,textValue:u},e.createElement(k.div,I({role:"option","aria-labelledby":C,"data-highlighted":S?"":void 0,"aria-selected":p&&S,"data-state":p?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1},r,{ref:$,onFocus:_(r.onFocus,()=>l(!0)),onBlur:_(r.onBlur,()=>l(!1)),onPointerUp:_(r.onPointerUp,y),onPointerMove:_(r.onPointerMove,f=>{if(i){var m;(m=t.onItemLeave)===null||m===void 0||m.call(t)}else f.currentTarget.focus({preventScroll:!0})}),onPointerLeave:_(r.onPointerLeave,f=>{if(f.currentTarget===document.activeElement){var m;(m=t.onItemLeave)===null||m===void 0||m.call(t)}}),onKeyDown:_(r.onKeyDown,f=>{var m;((m=t.searchRef)===null||m===void 0?void 0:m.current)!==""&&f.key===" "||(nt.includes(f.key)&&y(),f.key===" "&&f.preventDefault())})}))))}),oe="SelectItemText",Ct=e.forwardRef((a,s)=>{const{__scopeSelect:o,className:d,style:i,...n}=a,r=q(oe,o),b=me(oe,o),t=xt(oe,o),p=at(oe,o),[u,x]=e.useState(null),S=L(s,f=>x(f),t.onItemTextChange,f=>{var m;return(m=b.itemTextRefCallback)===null||m===void 0?void 0:m.call(b,f,t.value,t.disabled)}),l=u==null?void 0:u.textContent,$=e.useMemo(()=>e.createElement("option",{key:t.value,value:t.value,disabled:t.disabled},l),[t.disabled,t.value,l]),{onNativeOptionAdd:C,onNativeOptionRemove:y}=p;return G(()=>(C($),()=>y($)),[C,y,$]),e.createElement(e.Fragment,null,e.createElement(k.span,I({id:t.textId},n,{ref:S})),t.isSelected&&r.valueNode&&!r.valueNodeHasChildren?Ce.createPortal(n.children,r.valueNode):null)}),_e=e.forwardRef((a,s)=>{const{value:o,...d}=a,i=e.useRef(null),n=L(s,i),r=Xe(o);return e.useEffect(()=>{const b=i.current,t=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(t,"value").set;if(r!==o&&u){const x=new Event("change",{bubbles:!0});u.call(b,o),b.dispatchEvent(x)}},[r,o]),e.createElement(ye,{asChild:!0},e.createElement("select",I({},d,{ref:n,defaultValue:o})))});_e.displayName="BubbleSelect";function Ie(a){const s=qe(a),o=e.useRef(""),d=e.useRef(0),i=e.useCallback(r=>{const b=o.current+r;s(b),function t(p){o.current=p,window.clearTimeout(d.current),p!==""&&(d.current=window.setTimeout(()=>t(""),1e3))}(b)},[s]),n=e.useCallback(()=>{o.current="",window.clearTimeout(d.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(d.current),[]),[o,i,n]}function Re(a,s,o){const i=s.length>1&&Array.from(s).every(p=>p===s[0])?s[0]:s,n=o?a.indexOf(o):-1;let r=yt(a,Math.max(n,0));i.length===1&&(r=r.filter(p=>p!==o));const t=r.find(p=>p.textValue.toLowerCase().startsWith(i.toLowerCase()));return t!==o?t:void 0}function yt(a,s){return a.map((o,d)=>a[(s+d)%a.length])}const Et=lt,Tt=it,_t=ut,It=ft,Rt=pt,Pt=ht,Nt=$t,Mt=St,Ot=Ct;var kt="tnw2be160 tnw2be16c tnw2be16o tnw2be170 tnw2be18s tnw2be19g tnw2be17g tnw2be184 tnw2be1h4 tnw2be1hg tnw2be2be tnw2be24q tnw2be1re tnw2be1y2 tnw2be2ew tnw2be288 tnw2be1uw tnw2be21k tnw2be1hw tnw2be1lk tnw2be2j8 tnw2be1ih",Vt="gohwum7 tnw2be1hz tnw2be1a8 tnw2be1bs tnw2be1bk tnw2be1as tnw2beu8 tnw2bevw tnw2beqs tnw2besg tnw2be1cs tnw2be1fc tnw2be1g0 tnw2be2lq tnw2be2lm tnw2be2mt tnw2be2mu tnw2be2j8 tnw2be2mk tnw2be2ma",Dt="gohwum1 tnw2be1hz tnw2be1a8 tnw2be1bs tnw2be1bk tnw2be1as tnw2be160 tnw2be16c tnw2be16o tnw2be170 tnw2be18w tnw2be19k tnw2be17k tnw2be188 tnw2beqw tnw2besk tnw2beu8 tnw2bevw tnw2be2be tnw2be24q tnw2be1re tnw2be1y2 tnw2be2ew tnw2be288 tnw2be1uw tnw2be21k tnw2be1g0 tnw2be1iw tnw2be1d4 tnw2be1aw tnw2be2j8 tnw2be14c tnw2be1fc tnw2be1i6 tnw2be2lq";const At=e.forwardRef(({children:a,className:s,...o},d)=>R(Mt,{className:Ze(Vt,s),...o,ref:d,children:R(Ot,{children:a})})),Se=e.forwardRef((a,s)=>{const{disabled:o=!1,id:d,label:i="",description:n,labelLocation:r="hidden",name:b,options:t,placeholder:p,...u}=a;return R(Qe,{disabled:o,display:"grid",id:d??b,label:i,labelLocation:r,description:n,whiteSpace:"nowrap",children:$e(Et,{disabled:o,name:b,...u,children:[$e(Tt,{id:d??b,className:Dt,ref:s,children:[R(_t,{placeholder:p}),R(Je,{as:It,display:"inline-flex",children:R(et,{})})]}),R(Rt,{className:kt,children:R(Pt,{children:R(Nt,{children:t.map(({value:x,label:S,...l})=>R(At,{value:x,...l,children:S},S))})})})]})})});try{Se.displayName="Select",Se.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},labelLocation:{defaultValue:null,description:"",name:"labelLocation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"hidden"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}}}}}catch{}export{Qt as $,Se as S};
//# sourceMappingURL=Select-04e13ef2.js.map
