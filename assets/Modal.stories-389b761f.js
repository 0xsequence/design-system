import{j as n}from"./jsx-runtime-5c44f2f2.js";import{r as o}from"./index-32f9f3e1.js";import{a as L,_ as f,b as Z,c as N,$ as F}from"./index-bfc13c15.js";import{a as H,c as y}from"./index-b52b8797.js";import{$ as D}from"./index-15d4be11.js";import{$ as Y}from"./index-c00714d7.js";import{$ as W,h as K,a as G,b as U}from"./Combination-1946a670.js";import{$ as J}from"./index-a94ea3f9.js";import{$ as O}from"./index-7628a962.js";import{I as Q}from"./IconButton-b56e0f4e.js";/* empty css                            *//* empty css                              */import{B as u}from"./Box-403628ef.js";import{c as X}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{m as E}from"./motion-4bf1f684.js";import{S as ee}from"./Scroll-74e27e13.js";import{C as te}from"./CloseIcon-f464ce3d.js";import{T as h}from"./Text-599edd8f.js";import{B as j}from"./Button-84f8038e.js";import{A as oe}from"./index-f81d6c2b.js";import"./index-81ed4395.js";import"./styles.css-dba5ab93.js";import"./typography-f274f330.js";/* empty css                              */const B="Dialog",[I,We]=L(B),[re,p]=I(B),ae=e=>{const{__scopeDialog:c,children:s,open:l,defaultOpen:a,onOpenChange:t,modal:r=!0}=e,i=o.useRef(null),d=o.useRef(null),[m=!1,g]=H({prop:l,defaultProp:a,onChange:t});return o.createElement(re,{scope:c,triggerRef:i,contentRef:d,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g($=>!$),[g]),modal:r},s)},q="DialogPortal",[ne,T]=I(q,{forceMount:void 0}),se=e=>{const{__scopeDialog:c,forceMount:s,children:l,container:a}=e,t=p(q,c);return o.createElement(ne,{scope:c,forceMount:s},o.Children.map(l,r=>o.createElement(O,{present:s||t.open},o.createElement(J,{asChild:!0,container:a},r))))},_="DialogOverlay",ce=o.forwardRef((e,c)=>{const s=T(_,e.__scopeDialog),{forceMount:l=s.forceMount,...a}=e,t=p(_,e.__scopeDialog);return t.modal?o.createElement(O,{present:l||t.open},o.createElement(le,f({},a,{ref:c}))):null}),le=o.forwardRef((e,c)=>{const{__scopeDialog:s,...l}=e,a=p(_,s);return o.createElement(W,{as:Z,allowPinchZoom:!0,shards:[a.contentRef]},o.createElement(N.div,f({"data-state":S(a.open)},l,{ref:c,style:{pointerEvents:"auto",...l.style}})))}),b="DialogContent",ie=o.forwardRef((e,c)=>{const s=T(b,e.__scopeDialog),{forceMount:l=s.forceMount,...a}=e,t=p(b,e.__scopeDialog);return o.createElement(O,{present:l||t.open},t.modal?o.createElement(de,f({},a,{ref:c})):o.createElement(ue,f({},a,{ref:c})))}),de=o.forwardRef((e,c)=>{const s=p(b,e.__scopeDialog),l=o.useRef(null),a=F(c,s.contentRef,l);return o.useEffect(()=>{const t=l.current;if(t)return K(t)},[]),o.createElement(V,f({},e,{ref:a,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(e.onCloseAutoFocus,t=>{var r;t.preventDefault(),(r=s.triggerRef.current)===null||r===void 0||r.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,t=>{const r=t.detail.originalEvent,i=r.button===0&&r.ctrlKey===!0;(r.button===2||i)&&t.preventDefault()}),onFocusOutside:y(e.onFocusOutside,t=>t.preventDefault())}))}),ue=o.forwardRef((e,c)=>{const s=p(b,e.__scopeDialog),l=o.useRef(!1),a=o.useRef(!1);return o.createElement(V,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r;if((r=e.onCloseAutoFocus)===null||r===void 0||r.call(e,t),!t.defaultPrevented){var i;l.current||(i=s.triggerRef.current)===null||i===void 0||i.focus(),t.preventDefault()}l.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;(r=e.onInteractOutside)===null||r===void 0||r.call(e,t),t.defaultPrevented||(l.current=!0,t.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const d=t.target;((i=s.triggerRef.current)===null||i===void 0?void 0:i.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&a.current&&t.preventDefault()}}))}),V=o.forwardRef((e,c)=>{const{__scopeDialog:s,trapFocus:l,onOpenAutoFocus:a,onCloseAutoFocus:t,...r}=e,i=p(b,s),d=o.useRef(null),m=F(c,d);return G(),o.createElement(o.Fragment,null,o.createElement(U,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:a,onUnmountAutoFocus:t},o.createElement(Y,f({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":S(i.open)},r,{ref:m,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),fe="DialogClose",pe=o.forwardRef((e,c)=>{const{__scopeDialog:s,...l}=e,a=p(fe,s);return o.createElement(N.button,f({type:"button"},l,{ref:c,onClick:y(e.onClick,()=>a.onOpenChange(!1))}))});function S(e){return e?"open":"closed"}const me=ae,ge=se,$e=ce,be=ie,ve=pe;var xe="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",ye=X({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12vk fyvr12ve fyvr11h0 fyvr11i4 fyvr11hs fyvr11pn fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),he="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Ce="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const C=e=>{const{autoHeight:c=!1,backdropColor:s="backgroundBackdrop",children:l,disableAnimation:a=!1,isDismissible:t=!0,onClose:r,scroll:i=!0,size:d="lg",overlayProps:m,contentProps:g}=e;return n.jsx(me,{defaultOpen:!0,onOpenChange:r,children:n.jsx(ge,{forceMount:!0,children:n.jsxs(u,{className:Ce,children:[n.jsx(u,{as:$e,asChild:!0,background:s,className:he,forceMount:!0,children:n.jsx(E.div,{initial:a?!1:{opacity:0},animate:a?!1:{opacity:1},exit:a?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),n.jsx(be,{asChild:!0,className:ye({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:$=>{t?r==null||r():$.preventDefault()},onInteractOutside:$=>{t?r==null||r():$.preventDefault()},children:n.jsxs(E.div,{initial:a?!1:{y:"100%"},animate:a?!1:{y:0},exit:a?void 0:{y:"100%"},transition:{type:"tween",ease:"easeOut"},...g,children:[i?n.jsx(ee,{children:l}):l,t&&n.jsx(ve,{asChild:!0,children:n.jsx(Q,{icon:te,backdropFilter:"blur",size:"xs",className:xe,"aria-label":"Close"})})]},"modal-content")})]})})})};try{C.displayName="Modal",C.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const Ke={title:"Components/Modal",component:C},z=e=>{const[c,s]=o.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx(j,{label:"Open Modal",onClick:()=>s(!c)}),n.jsx(oe,{children:c&&n.jsx(C,{...e,onClose:()=>s(!1)})})]})},v={render:z,args:{size:"lg",children:n.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[n.jsxs(u,{children:[n.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),n.jsx(h,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),n.jsx(u,{justifyContent:"flex-end",children:n.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}},x={render:e=>n.jsx(z,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:n.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[n.jsxs(u,{children:[n.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),n.jsx(h,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),n.jsx(u,{justifyContent:"flex-end",children:n.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}};var P,R,M;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(R=v.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var A,w,k;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(w=x.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const Ge=["Default","CustomAnimation"];export{x as CustomAnimation,v as Default,Ge as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Modal.stories-389b761f.js.map
