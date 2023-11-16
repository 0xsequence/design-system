import{j as a}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{B as u}from"./Box-7d1c3652.js";import{B as j}from"./Button-f5f289fe.js";import{T as y}from"./Text-5213eff4.js";import{b as H,_ as f,c as Y,a as F,$ as B}from"./index-416e5a7a.js";import{a as W,c as x}from"./index-006d63ff.js";import{$ as _}from"./index-8f163998.js";import{$ as K}from"./index-f0ce3c30.js";import{a as G,h as U,$ as J,b as Q}from"./Combination-eaaf64fc.js";import{$ as X}from"./index-4e55634c.js";import{$ as E}from"./index-cd5c74af.js";import{c as ee}from"./WarningIcon-f03d5b31.js";import{I as te}from"./IconButton-4eab886b.js";import{S as oe}from"./Scroll-86516b47.js";import{u as re}from"./ThemeProvider-08145c87.js";import"./atoms-dc8b8460.js";import{c as ae}from"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import{m as M}from"./motion-cc45ae8c.js";import{A as ne}from"./index-686b454f.js";/* empty css                              */import"./typography-f274f330.js";import"./index-ecbee218.js";const I="Dialog",[q,Ge]=H(I),[se,p]=q(I),ce=e=>{const{__scopeDialog:c,children:n,open:l,defaultOpen:r,onOpenChange:t,modal:s=!0}=e,i=o.useRef(null),d=o.useRef(null),[m=!1,g]=W({prop:l,defaultProp:r,onChange:t});return o.createElement(se,{scope:c,triggerRef:i,contentRef:d,contentId:_(),titleId:_(),descriptionId:_(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g(C=>!C),[g]),modal:s},n)},T="DialogPortal",[le,S]=q(T,{forceMount:void 0}),ie=e=>{const{__scopeDialog:c,forceMount:n,children:l,container:r}=e,t=p(T,c);return o.createElement(le,{scope:c,forceMount:n},o.Children.map(l,s=>o.createElement(E,{present:n||t.open},o.createElement(X,{asChild:!0,container:r},s))))},O="DialogOverlay",de=o.forwardRef((e,c)=>{const n=S(O,e.__scopeDialog),{forceMount:l=n.forceMount,...r}=e,t=p(O,e.__scopeDialog);return t.modal?o.createElement(E,{present:l||t.open},o.createElement(ue,f({},r,{ref:c}))):null}),ue=o.forwardRef((e,c)=>{const{__scopeDialog:n,...l}=e,r=p(O,n);return o.createElement(G,{as:Y,allowPinchZoom:!0,shards:[r.contentRef]},o.createElement(F.div,f({"data-state":z(r.open)},l,{ref:c,style:{pointerEvents:"auto",...l.style}})))}),$="DialogContent",fe=o.forwardRef((e,c)=>{const n=S($,e.__scopeDialog),{forceMount:l=n.forceMount,...r}=e,t=p($,e.__scopeDialog);return o.createElement(E,{present:l||t.open},t.modal?o.createElement(pe,f({},r,{ref:c})):o.createElement(me,f({},r,{ref:c})))}),pe=o.forwardRef((e,c)=>{const n=p($,e.__scopeDialog),l=o.useRef(null),r=B(c,n.contentRef,l);return o.useEffect(()=>{const t=l.current;if(t)return U(t)},[]),o.createElement(V,f({},e,{ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,t=>{const s=t.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&t.preventDefault()}),onFocusOutside:x(e.onFocusOutside,t=>t.preventDefault())}))}),me=o.forwardRef((e,c)=>{const n=p($,e.__scopeDialog),l=o.useRef(!1),r=o.useRef(!1);return o.createElement(V,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,t),!t.defaultPrevented){var i;l.current||(i=n.triggerRef.current)===null||i===void 0||i.focus(),t.preventDefault()}l.current=!1,r.current=!1},onInteractOutside:t=>{var s,i;(s=e.onInteractOutside)===null||s===void 0||s.call(e,t),t.defaultPrevented||(l.current=!0,t.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const d=t.target;((i=n.triggerRef.current)===null||i===void 0?void 0:i.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&r.current&&t.preventDefault()}}))}),V=o.forwardRef((e,c)=>{const{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:r,onCloseAutoFocus:t,...s}=e,i=p($,n),d=o.useRef(null),m=B(c,d);return J(),o.createElement(o.Fragment,null,o.createElement(Q,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:r,onUnmountAutoFocus:t},o.createElement(K,f({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":z(i.open)},s,{ref:m,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),ge="DialogClose",$e=o.forwardRef((e,c)=>{const{__scopeDialog:n,...l}=e,r=p(ge,n);return o.createElement(F.button,f({type:"button"},l,{ref:c,onClick:x(e.onClick,()=>r.onOpenChange(!1))}))});function z(e){return e?"open":"closed"}const be=ce,ve=ie,xe=de,ye=fe,he=$e;var Ce="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",De=ae({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12wk fyvr12we fyvr11h0 fyvr11i4 fyvr11hs fyvr11pn fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),_e="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Oe="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const h=e=>{const{autoHeight:c=!1,backdropColor:n="backgroundBackdrop",children:l,disableAnimation:r=!1,isDismissible:t=!0,onClose:s,scroll:i=!0,size:d="lg",overlayProps:m,contentProps:g}=e,{root:C}=re(),Z=document.querySelector(C||"body");return a.jsx(be,{modal:!0,defaultOpen:!0,onOpenChange:s,children:a.jsx(ve,{forceMount:!0,container:Z,children:a.jsxs(u,{className:Oe,children:[a.jsx(u,{as:xe,asChild:!0,background:n,className:_e,forceMount:!0,children:a.jsx(M.div,{initial:r?!1:{opacity:0},animate:r?!1:{opacity:1},exit:r?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),a.jsx(ye,{asChild:!0,className:De({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:D=>{t?s==null||s():D.preventDefault()},onInteractOutside:D=>{t||D.preventDefault()},children:a.jsxs(M.div,{initial:r?!1:{y:"100%",opacity:d==="sm"?0:1},animate:r?!1:{y:0,opacity:1},exit:r?void 0:{y:"100%",opacity:d==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...g,children:[i?a.jsx(oe,{children:l}):l,t&&a.jsx(he,{asChild:!0,children:a.jsx(te,{icon:ee,backdropFilter:"blur",size:"xs",className:Ce,"aria-label":"Close"})})]},"modal-content")})]})})})};try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 31 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const Ue={title:"Components/Modal",component:h},L=e=>{const[c,n]=o.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(j,{label:"Open Modal",onClick:()=>n(!c)}),a.jsx(ne,{children:c&&a.jsx(h,{...e,onClose:()=>n(!1)})})]})},b={render:L,args:{size:"lg",children:a.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a.jsxs(u,{children:[a.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),a.jsx(y,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),a.jsx(u,{justifyContent:"flex-end",children:a.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}},v={render:e=>a.jsx(L,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:a.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a.jsxs(u,{children:[a.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),a.jsx(y,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),a.jsx(u,{justifyContent:"flex-end",children:a.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}};var P,R,w;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    size: 'lg',
    children: <Box flexDirection="column" justifyContent="space-between" height="full" padding="4">
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            You can always change these settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
  }
}`,...(w=(R=b.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var A,k,N;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <StoryWrapper overlayProps={{}} contentProps={{
    initial: {
      scale: 0,
      rotateZ: 0
    },
    animate: {
      scale: 1,
      rotateZ: 360
    },
    exit: {
      scale: 0,
      rotateZ: 0
    },
    transition: {
      type: 'spring'
    }
  }} {...args} />,
  args: {
    size: 'lg',
    children: <Box flexDirection="column" justifyContent="space-between" height="full" padding="4">
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            Custom Open & Close Animated Modal. You can always change these
            settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
  }
}`,...(N=(k=v.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const Je=["Default","CustomAnimation"];export{v as CustomAnimation,b as Default,Je as __namedExportsOrder,Ue as default};
//# sourceMappingURL=Modal.stories-a133d048.js.map
