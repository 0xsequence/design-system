import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{B as u}from"./Box-oHL7Bsr7.js";import{B as O}from"./Button-CqJpGabQ.js";import{T as h}from"./Text-6WcoOGUR.js";import{a as Y,_ as f,$ as k,c as T,b as W}from"./index-CeXBLvNc.js";import{c as y,a as K}from"./index-C-LszQ6e.js";import{$ as D}from"./index-1rhZt4VZ.js";import{$ as G}from"./index-BxMbIcfc.js";import{h as U,$ as J,a as Q,R as X}from"./Combination-GnYcu0D6.js";import{$ as ee}from"./index-DAor9fLX.js";import{$ as j}from"./index-CnD1ylEj.js";import{c as te}from"./WarningIcon-B6hw1rgL.js";import{I as oe}from"./IconButton-CaGxRAHx.js";import{S as ne}from"./Scroll-B1JFGlAd.js";import{u as re}from"./ThemeProvider-BuuYqdOr.js";/* empty css                            */import"./atoms-BnxHeJkh.js";import{c as ae}from"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import{m as P}from"./motion-Djta419p.js";import{A as se}from"./index-cqZfV_1m.js";/* empty css                              */import"./typography-BClcJN8w.js";import"./index-BxmsGmlx.js";import"./vars.css-vIjhzn4K.js";import"./color-qnkbROzP.js";const B="Dialog",[q,Xe]=Y(B),[ce,p]=q(B),ie=e=>{const{__scopeDialog:c,children:a,open:i,defaultOpen:n,onOpenChange:t,modal:s=!0}=e,l=o.useRef(null),d=o.useRef(null),[m=!1,g]=K({prop:i,defaultProp:n,onChange:t});return o.createElement(ce,{scope:c,triggerRef:l,contentRef:d,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g(b=>!b),[g]),modal:s},a)},S="DialogPortal",[le,V]=q(S,{forceMount:void 0}),de=e=>{const{__scopeDialog:c,forceMount:a,children:i,container:n}=e,t=p(S,c);return o.createElement(le,{scope:c,forceMount:a},o.Children.map(i,s=>o.createElement(j,{present:a||t.open},o.createElement(ee,{asChild:!0,container:n},s))))},E="DialogOverlay",ue=o.forwardRef((e,c)=>{const a=V(E,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,t=p(E,e.__scopeDialog);return t.modal?o.createElement(j,{present:i||t.open},o.createElement(fe,f({},n,{ref:c}))):null}),fe=o.forwardRef((e,c)=>{const{__scopeDialog:a,...i}=e,n=p(E,a);return o.createElement(X,{as:W,allowPinchZoom:!0,shards:[n.contentRef]},o.createElement(T.div,f({"data-state":L(n.open)},i,{ref:c,style:{pointerEvents:"auto",...i.style}})))}),$="DialogContent",pe=o.forwardRef((e,c)=>{const a=V($,e.__scopeDialog),{forceMount:i=a.forceMount,...n}=e,t=p($,e.__scopeDialog);return o.createElement(j,{present:i||t.open},t.modal?o.createElement(me,f({},n,{ref:c})):o.createElement(ge,f({},n,{ref:c})))}),me=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),i=o.useRef(null),n=k(c,a.contentRef,i);return o.useEffect(()=>{const t=i.current;if(t)return U(t)},[]),o.createElement(z,f({},e,{ref:n,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(e.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=a.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,t=>{const s=t.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&t.preventDefault()}),onFocusOutside:y(e.onFocusOutside,t=>t.preventDefault())}))}),ge=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),i=o.useRef(!1),n=o.useRef(!1);return o.createElement(z,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,t),!t.defaultPrevented){var l;i.current||(l=a.triggerRef.current)===null||l===void 0||l.focus(),t.preventDefault()}i.current=!1,n.current=!1},onInteractOutside:t=>{var s,l;(s=e.onInteractOutside)===null||s===void 0||s.call(e,t),t.defaultPrevented||(i.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const d=t.target;((l=a.triggerRef.current)===null||l===void 0?void 0:l.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}}))}),z=o.forwardRef((e,c)=>{const{__scopeDialog:a,trapFocus:i,onOpenAutoFocus:n,onCloseAutoFocus:t,...s}=e,l=p($,a),d=o.useRef(null),m=k(c,d);return J(),o.createElement(o.Fragment,null,o.createElement(Q,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:n,onUnmountAutoFocus:t},o.createElement(G,f({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":L(l.open)},s,{ref:m,onDismiss:()=>l.onOpenChange(!1)}))),!1)});const $e="DialogClose",be=o.forwardRef((e,c)=>{const{__scopeDialog:a,...i}=e,n=p($e,a);return o.createElement(T.button,f({type:"button"},i,{ref:c,onClick:y(e.onClick,()=>n.onOpenChange(!1))}))});function L(e){return e?"open":"closed"}const xe=ie,ve=de,ye=ue,he=pe,_e=be;var Ce="_5b32m91 _5b32m90 fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11nk fyvr1ko fyvr1oo fyvr1qo fyvr1mo",De="_5b32m93 _5b32m92 fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Ee=ae({defaultClassName:"_5b32m95 _5b32m94 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12ws fyvr12wm fyvr11h0 fyvr11i4 fyvr11hs fyvr11sd fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),Oe="_5b32m9b _5b32m9a fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11nk";const _=e=>{const{autoHeight:c=!1,backdropColor:a="backgroundBackdrop",children:i,disableAnimation:n=!1,isDismissible:t=!0,onClose:s,scroll:l=!0,size:d="lg",overlayProps:m,contentProps:g}=e,{root:b}=re(),[R,H]=o.useState(null);return o.useEffect(()=>{H(document.querySelector(b||"body"))},[b]),R?r.jsx(xe,{modal:!0,defaultOpen:!0,onOpenChange:s,children:r.jsx(ve,{forceMount:!0,container:R,children:r.jsxs(u,{className:Ce,children:[r.jsx(u,{as:ye,asChild:!0,background:a,className:De,forceMount:!0,children:r.jsx(P.div,{initial:n?!1:{opacity:0},animate:n?!1:{opacity:1},exit:n?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),r.jsx(he,{asChild:!0,className:Ee({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:C=>{t?s==null||s():C.preventDefault()},onInteractOutside:C=>{t||C.preventDefault()},children:r.jsxs(P.div,{initial:n?!1:{y:"100%",opacity:d==="sm"?0:1},animate:n?!1:{y:0,opacity:1},exit:n?void 0:{y:"100%",opacity:d==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...g,children:[l?r.jsx(ne,{children:i}):i,t&&r.jsx(_e,{asChild:!0,children:r.jsx(oe,{icon:te,backdropFilter:"blur",size:"xs",className:Oe,"aria-label":"Close"})})]},"modal-content")})]})})}):null};try{_.displayName="Modal",_.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ black: string; white: string; inherit: string; transparent: string; positive: string; negative: string; info: string; warning: string; text100: string; text80: string; text50: string; textInverse100: string; ... 28 more ...; polygonLight: string; }, CSSVarFunction>, { ...; }>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const et={title:"Components/Modal",component:_},Z=e=>{const[c,a]=o.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(O,{label:"Open Modal",onClick:()=>a(!c)}),r.jsx(se,{children:c&&r.jsx(_,{...e,onClose:()=>a(!1)})})]})},x={render:Z,args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(h,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(O,{variant:"primary",shape:"square",label:"Create"})})]})}},v={render:e=>r.jsx(Z,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(h,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(h,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(O,{variant:"primary",shape:"square",label:"Create"})})]})}};var M,w,A;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(w=x.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,I,F;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(I=v.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const tt=["Default","CustomAnimation"];export{v as CustomAnimation,x as Default,tt as __namedExportsOrder,et as default};
