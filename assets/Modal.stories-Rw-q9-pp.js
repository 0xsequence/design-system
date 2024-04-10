import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{r as o}from"./index-Cu9bd8lq.js";import{B as u}from"./Box-BAXfjw5r.js";import{B as E}from"./Button-j2P7hIgg.js";import{T as y}from"./Text-BDXsgCUt.js";import{a as H,_ as f,$ as F,c as T,b as Y}from"./index-BUipU-ak.js";import{c as v,a as W}from"./index-BdmuMSao.js";import{$ as D}from"./index-Dg3K3zqj.js";import{$ as K}from"./index-YuaQHXCO.js";import{h as U,$ as G,a as J,b as Q}from"./Combination-DJgGMDtU.js";import{$ as X}from"./index-mUe-aHqH.js";import{$ as j}from"./index-DMoNf_Sx.js";import{c as ee}from"./WarningIcon-DMaOUakJ.js";import{I as te}from"./IconButton-Cv0Y06lq.js";import{S as oe}from"./Scroll-CMqCCBbv.js";import{u as ne}from"./ThemeProvider-ClVTRGQR.js";/* empty css                            */import"./atoms-BAANXhcE.js";import{c as re}from"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import{m as P}from"./motion-DWzcalHj.js";import{A as ae}from"./index-BEAc4zX4.js";/* empty css                              */import"./typography-BClcJN8w.js";import"./index-Ckls47V4.js";import"./vars.css-vIjhzn4K.js";import"./color-qnkbROzP.js";const k="Dialog",[B,Qe]=H(k),[se,p]=B(k),ce=e=>{const{__scopeDialog:c,children:a,open:i,defaultOpen:n,onOpenChange:t,modal:s=!0}=e,l=o.useRef(null),d=o.useRef(null),[m=!1,g]=W({prop:i,defaultProp:n,onChange:t});return o.createElement(se,{scope:c,triggerRef:l,contentRef:d,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g(_=>!_),[g]),modal:s},a)},q="DialogPortal",[ie,S]=B(q,{forceMount:void 0}),le=e=>{const{__scopeDialog:c,forceMount:a,children:i,container:n}=e,t=p(q,c);return o.createElement(ie,{scope:c,forceMount:a},o.Children.map(i,s=>o.createElement(j,{present:a||t.open},o.createElement(X,{asChild:!0,container:n},s))))},O="DialogOverlay",de=o.forwardRef((e,c)=>{const a=S(O,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,t=p(O,e.__scopeDialog);return t.modal?o.createElement(j,{present:i||t.open},o.createElement(ue,f({},n,{ref:c}))):null}),ue=o.forwardRef((e,c)=>{const{__scopeDialog:a,...i}=e,n=p(O,a);return o.createElement(Q,{as:Y,allowPinchZoom:!0,shards:[n.contentRef]},o.createElement(T.div,f({"data-state":z(n.open)},i,{ref:c,style:{pointerEvents:"auto",...i.style}})))}),$="DialogContent",fe=o.forwardRef((e,c)=>{const a=S($,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,t=p($,e.__scopeDialog);return o.createElement(j,{present:i||t.open},t.modal?o.createElement(pe,f({},n,{ref:c})):o.createElement(me,f({},n,{ref:c})))}),pe=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),i=o.useRef(null),n=F(c,a.contentRef,i);return o.useEffect(()=>{const t=i.current;if(t)return U(t)},[]),o.createElement(V,f({},e,{ref:n,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=a.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,t=>{const s=t.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&t.preventDefault()}),onFocusOutside:v(e.onFocusOutside,t=>t.preventDefault())}))}),me=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),i=o.useRef(!1),n=o.useRef(!1);return o.createElement(V,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,t),!t.defaultPrevented){var l;i.current||(l=a.triggerRef.current)===null||l===void 0||l.focus(),t.preventDefault()}i.current=!1,n.current=!1},onInteractOutside:t=>{var s,l;(s=e.onInteractOutside)===null||s===void 0||s.call(e,t),t.defaultPrevented||(i.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const d=t.target;((l=a.triggerRef.current)===null||l===void 0?void 0:l.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}}))}),V=o.forwardRef((e,c)=>{const{__scopeDialog:a,trapFocus:i,onOpenAutoFocus:n,onCloseAutoFocus:t,...s}=e,l=p($,a),d=o.useRef(null),m=F(c,d);return G(),o.createElement(o.Fragment,null,o.createElement(J,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:n,onUnmountAutoFocus:t},o.createElement(K,f({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":z(l.open)},s,{ref:m,onDismiss:()=>l.onOpenChange(!1)}))),!1)});const ge="DialogClose",$e=o.forwardRef((e,c)=>{const{__scopeDialog:a,...i}=e,n=p(ge,a);return o.createElement(T.button,f({type:"button"},i,{ref:c,onClick:v(e.onClick,()=>n.onOpenChange(!1))}))});function z(e){return e?"open":"closed"}const be=ce,xe=le,ve=de,ye=fe,he=$e;var _e="_5b32m91 _5b32m90 fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Ce="_5b32m93 _5b32m92 fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",De=re({defaultClassName:"_5b32m95 _5b32m94 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12wk fyvr12we fyvr11h0 fyvr11i4 fyvr11hs fyvr11sb fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),Oe="_5b32m9b _5b32m9a fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni";const h=e=>{const{autoHeight:c=!1,backdropColor:a="backgroundBackdrop",children:i,disableAnimation:n=!1,isDismissible:t=!0,onClose:s,scroll:l=!0,size:d="lg",overlayProps:m,contentProps:g}=e,{root:_}=ne(),Z=document.querySelector(_||"body");return r.jsx(be,{modal:!0,defaultOpen:!0,onOpenChange:s,children:r.jsx(xe,{forceMount:!0,container:Z,children:r.jsxs(u,{className:_e,children:[r.jsx(u,{as:ve,asChild:!0,background:a,className:Ce,forceMount:!0,children:r.jsx(P.div,{initial:n?!1:{opacity:0},animate:n?!1:{opacity:1},exit:n?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),r.jsx(ye,{asChild:!0,className:De({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:C=>{t?s==null||s():C.preventDefault()},onInteractOutside:C=>{t||C.preventDefault()},children:r.jsxs(P.div,{initial:n?!1:{y:"100%",opacity:d==="sm"?0:1},animate:n?!1:{y:0,opacity:1},exit:n?void 0:{y:"100%",opacity:d==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...g,children:[l?r.jsx(oe,{children:i}):i,t&&r.jsx(he,{asChild:!0,children:r.jsx(te,{icon:ee,backdropFilter:"blur",size:"xs",className:Oe,"aria-label":"Close"})})]},"modal-content")})]})})})};try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ black: string; white: string; inherit: string; transparent: string; positive: string; negative: string; info: string; warning: string; text100: string; text80: string; text50: string; textInverse100: string; ... 28 more ...; polygonLight: string; }, CSSVarFunction>, { ...; }>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const Xe={title:"Components/Modal",component:h},L=e=>{const[c,a]=o.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(E,{label:"Open Modal",onClick:()=>a(!c)}),r.jsx(ae,{children:c&&r.jsx(h,{...e,onClose:()=>a(!1)})})]})},b={render:L,args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(y,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(E,{variant:"primary",shape:"square",label:"Create"})})]})}},x={render:e=>r.jsx(L,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(y,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(E,{variant:"primary",shape:"square",label:"Create"})})]})}};var R,M,w;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(M=b.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var A,N,I;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const et=["Default","CustomAnimation"];export{x as CustomAnimation,b as Default,et as __namedExportsOrder,Xe as default};
