import{j as a}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{B as u}from"./Box-b958d23a.js";import{B as O}from"./Button-1c252bba.js";import{T as h}from"./Text-b0faea91.js";import{b as L,_ as f,c as Z,a as N,$ as F}from"./index-31bfaf9c.js";import{a as H,c as y}from"./index-006d63ff.js";import{$ as D}from"./index-8f163998.js";import{$ as Y}from"./index-b198bcd3.js";import{a as W,h as K,$ as G,b as U}from"./Combination-4931390e.js";import{$ as J}from"./index-fa3b46c8.js";import{$ as j}from"./index-33bdb38a.js";import{c as Q}from"./WarningIcon-a36e25b2.js";import{I as X}from"./IconButton-72914f65.js";import{S as ee}from"./Scroll-d86b263c.js";import"./atoms-dc8b8460.js";import{c as te}from"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import{m as E}from"./motion-cc45ae8c.js";import{A as oe}from"./index-686b454f.js";/* empty css                              */import"./typography-f274f330.js";import"./index-ecbee218.js";const B="Dialog",[I,He]=L(B),[re,p]=I(B),ae=e=>{const{__scopeDialog:c,children:n,open:l,defaultOpen:r,onOpenChange:t,modal:s=!0}=e,i=o.useRef(null),d=o.useRef(null),[m=!1,g]=H({prop:l,defaultProp:r,onChange:t});return o.createElement(re,{scope:c,triggerRef:i,contentRef:d,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g($=>!$),[g]),modal:s},n)},q="DialogPortal",[ne,T]=I(q,{forceMount:void 0}),se=e=>{const{__scopeDialog:c,forceMount:n,children:l,container:r}=e,t=p(q,c);return o.createElement(ne,{scope:c,forceMount:n},o.Children.map(l,s=>o.createElement(j,{present:n||t.open},o.createElement(J,{asChild:!0,container:r},s))))},_="DialogOverlay",ce=o.forwardRef((e,c)=>{const n=T(_,e.__scopeDialog),{forceMount:l=n.forceMount,...r}=e,t=p(_,e.__scopeDialog);return t.modal?o.createElement(j,{present:l||t.open},o.createElement(le,f({},r,{ref:c}))):null}),le=o.forwardRef((e,c)=>{const{__scopeDialog:n,...l}=e,r=p(_,n);return o.createElement(W,{as:Z,allowPinchZoom:!0,shards:[r.contentRef]},o.createElement(N.div,f({"data-state":S(r.open)},l,{ref:c,style:{pointerEvents:"auto",...l.style}})))}),b="DialogContent",ie=o.forwardRef((e,c)=>{const n=T(b,e.__scopeDialog),{forceMount:l=n.forceMount,...r}=e,t=p(b,e.__scopeDialog);return o.createElement(j,{present:l||t.open},t.modal?o.createElement(de,f({},r,{ref:c})):o.createElement(ue,f({},r,{ref:c})))}),de=o.forwardRef((e,c)=>{const n=p(b,e.__scopeDialog),l=o.useRef(null),r=F(c,n.contentRef,l);return o.useEffect(()=>{const t=l.current;if(t)return K(t)},[]),o.createElement(V,f({},e,{ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(e.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,t=>{const s=t.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&t.preventDefault()}),onFocusOutside:y(e.onFocusOutside,t=>t.preventDefault())}))}),ue=o.forwardRef((e,c)=>{const n=p(b,e.__scopeDialog),l=o.useRef(!1),r=o.useRef(!1);return o.createElement(V,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,t),!t.defaultPrevented){var i;l.current||(i=n.triggerRef.current)===null||i===void 0||i.focus(),t.preventDefault()}l.current=!1,r.current=!1},onInteractOutside:t=>{var s,i;(s=e.onInteractOutside)===null||s===void 0||s.call(e,t),t.defaultPrevented||(l.current=!0,t.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const d=t.target;((i=n.triggerRef.current)===null||i===void 0?void 0:i.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&r.current&&t.preventDefault()}}))}),V=o.forwardRef((e,c)=>{const{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:r,onCloseAutoFocus:t,...s}=e,i=p(b,n),d=o.useRef(null),m=F(c,d);return G(),o.createElement(o.Fragment,null,o.createElement(U,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:r,onUnmountAutoFocus:t},o.createElement(Y,f({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":S(i.open)},s,{ref:m,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),fe="DialogClose",pe=o.forwardRef((e,c)=>{const{__scopeDialog:n,...l}=e,r=p(fe,n);return o.createElement(N.button,f({type:"button"},l,{ref:c,onClick:y(e.onClick,()=>r.onOpenChange(!1))}))});function S(e){return e?"open":"closed"}const me=ae,ge=se,$e=ce,be=ie,ve=pe;var xe="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",ye=te({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12wk fyvr12we fyvr11h0 fyvr11i4 fyvr11hs fyvr11pn fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),he="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Ce="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const C=e=>{const{autoHeight:c=!1,backdropColor:n="backgroundBackdrop",children:l,disableAnimation:r=!1,isDismissible:t=!0,onClose:s,scroll:i=!0,size:d="lg",overlayProps:m,contentProps:g}=e;return a.jsx(me,{modal:!0,defaultOpen:!0,onOpenChange:s,children:a.jsx(ge,{forceMount:!0,children:a.jsxs(u,{className:Ce,children:[a.jsx(u,{as:$e,asChild:!0,background:n,className:he,forceMount:!0,children:a.jsx(E.div,{initial:r?!1:{opacity:0},animate:r?!1:{opacity:1},exit:r?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),a.jsx(be,{asChild:!0,className:ye({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:$=>{t?s==null||s():$.preventDefault()},onInteractOutside:$=>{t||$.preventDefault()},children:a.jsxs(E.div,{initial:r?!1:{y:"100%",opacity:d==="sm"?0:1},animate:r?!1:{y:0,opacity:1},exit:r?void 0:{y:"100%",opacity:d==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...g,children:[i?a.jsx(ee,{children:l}):l,t&&a.jsx(ve,{asChild:!0,children:a.jsx(X,{icon:Q,backdropFilter:"blur",size:"xs",className:xe,"aria-label":"Close"})})]},"modal-content")})]})})})};try{C.displayName="Modal",C.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 31 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const Ye={title:"Components/Modal",component:C},z=e=>{const[c,n]=o.useState(!0);return a.jsxs(a.Fragment,{children:[a.jsx(O,{label:"Open Modal",onClick:()=>n(!c)}),a.jsx(oe,{children:c&&a.jsx(C,{...e,onClose:()=>n(!1)})})]})},v={render:z,args:{size:"lg",children:a.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a.jsxs(u,{children:[a.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),a.jsx(h,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),a.jsx(u,{justifyContent:"flex-end",children:a.jsx(O,{variant:"primary",shape:"square",label:"Create"})})]})}},x={render:e=>a.jsx(z,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:a.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a.jsxs(u,{children:[a.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),a.jsx(h,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),a.jsx(u,{justifyContent:"flex-end",children:a.jsx(O,{variant:"primary",shape:"square",label:"Create"})})]})}};var M,P,R;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(P=v.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var w,A,k;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(A=x.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const We=["Default","CustomAnimation"];export{x as CustomAnimation,v as Default,We as __namedExportsOrder,Ye as default};
//# sourceMappingURL=Modal.stories-a4e3f495.js.map
