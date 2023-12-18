import{j as r}from"./jsx-runtime-baBBSKBE.js";import{r as o}from"./index-PzSkSLoa.js";import{B as u}from"./Box-x_js87oR.js";import{B as j}from"./Button-RjqKh4Nv.js";import{T as y}from"./Text-Od2OoN5s.js";import{a as H,_ as f,b as Y,c as I,$ as k}from"./index-DNxOJn_G.js";import{a as W,c as v}from"./index-t2YIoniJ.js";import{$ as D}from"./index-EH8U40v7.js";import{$ as K}from"./index-N44IepuX.js";import{$ as U,h as G,a as J,b as Q}from"./Combination-mfBcTT3t.js";import{$ as X}from"./index-DIzgRpak.js";import{$ as E}from"./index-tsw9QlKD.js";import{c as ee}from"./WarningIcon-_DsgZkkA.js";import{I as te}from"./IconButton-Ds9Q7-Q6.js";import{S as oe}from"./Scroll-DQn6y_bc.js";import{u as ne}from"./ThemeProvider-tOYwImXF.js";/* empty css                            */import"./atoms-wgLQZhMV.js";import{c as re}from"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import{m as P}from"./motion-rIg1yyuu.js";import{A as ae}from"./index-xySP2xl9.js";/* empty css                              */import"./typography-kaheFGw9.js";import"./index-5zxyQtc3.js";import"./vars.css-oOWCUg3K.js";import"./color-Cuqwyp04.js";const B="Dialog",[q,Qe]=H(B),[se,p]=q(B),ce=e=>{const{__scopeDialog:c,children:a,open:l,defaultOpen:n,onOpenChange:t,modal:s=!0}=e,i=o.useRef(null),d=o.useRef(null),[m=!1,g]=W({prop:l,defaultProp:n,onChange:t});return o.createElement(se,{scope:c,triggerRef:i,contentRef:d,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:g,onOpenToggle:o.useCallback(()=>g(C=>!C),[g]),modal:s},a)},T="DialogPortal",[le,S]=q(T,{forceMount:void 0}),ie=e=>{const{__scopeDialog:c,forceMount:a,children:l,container:n}=e,t=p(T,c);return o.createElement(le,{scope:c,forceMount:a},o.Children.map(l,s=>o.createElement(E,{present:a||t.open},o.createElement(X,{asChild:!0,container:n},s))))},O="DialogOverlay",de=o.forwardRef((e,c)=>{const a=S(O,e.__scopeDialog),{forceMount:l=a.forceMount,...n}=e,t=p(O,e.__scopeDialog);return t.modal?o.createElement(E,{present:l||t.open},o.createElement(ue,f({},n,{ref:c}))):null}),ue=o.forwardRef((e,c)=>{const{__scopeDialog:a,...l}=e,n=p(O,a);return o.createElement(U,{as:Y,allowPinchZoom:!0,shards:[n.contentRef]},o.createElement(I.div,f({"data-state":z(n.open)},l,{ref:c,style:{pointerEvents:"auto",...l.style}})))}),$="DialogContent",fe=o.forwardRef((e,c)=>{const a=S($,e.__scopeDialog),{forceMount:l=a.forceMount,...n}=e,t=p($,e.__scopeDialog);return o.createElement(E,{present:l||t.open},t.modal?o.createElement(pe,f({},n,{ref:c})):o.createElement(me,f({},n,{ref:c})))}),pe=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),l=o.useRef(null),n=k(c,a.contentRef,l);return o.useEffect(()=>{const t=l.current;if(t)return G(t)},[]),o.createElement(V,f({},e,{ref:n,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,t=>{var s;t.preventDefault(),(s=a.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,t=>{const s=t.detail.originalEvent,i=s.button===0&&s.ctrlKey===!0;(s.button===2||i)&&t.preventDefault()}),onFocusOutside:v(e.onFocusOutside,t=>t.preventDefault())}))}),me=o.forwardRef((e,c)=>{const a=p($,e.__scopeDialog),l=o.useRef(!1),n=o.useRef(!1);return o.createElement(V,f({},e,{ref:c,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,t),!t.defaultPrevented){var i;l.current||(i=a.triggerRef.current)===null||i===void 0||i.focus(),t.preventDefault()}l.current=!1,n.current=!1},onInteractOutside:t=>{var s,i;(s=e.onInteractOutside)===null||s===void 0||s.call(e,t),t.defaultPrevented||(l.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const d=t.target;((i=a.triggerRef.current)===null||i===void 0?void 0:i.contains(d))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}}))}),V=o.forwardRef((e,c)=>{const{__scopeDialog:a,trapFocus:l,onOpenAutoFocus:n,onCloseAutoFocus:t,...s}=e,i=p($,a),d=o.useRef(null),m=k(c,d);return J(),o.createElement(o.Fragment,null,o.createElement(Q,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:n,onUnmountAutoFocus:t},o.createElement(K,f({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":z(i.open)},s,{ref:m,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),ge="DialogClose",$e=o.forwardRef((e,c)=>{const{__scopeDialog:a,...l}=e,n=p(ge,a);return o.createElement(I.button,f({type:"button"},l,{ref:c,onClick:v(e.onClick,()=>n.onOpenChange(!1))}))});function z(e){return e?"open":"closed"}const be=ce,xe=ie,ve=de,ye=fe,he=$e;var Ce="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",_e=re({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12wk fyvr12we fyvr11h0 fyvr11i4 fyvr11hs fyvr11sb fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),De="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",Oe="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const h=e=>{const{autoHeight:c=!1,backdropColor:a="backgroundBackdrop",children:l,disableAnimation:n=!1,isDismissible:t=!0,onClose:s,scroll:i=!0,size:d="lg",overlayProps:m,contentProps:g}=e,{root:C}=ne(),Z=document.querySelector(C||"body");return r.jsx(be,{modal:!0,defaultOpen:!0,onOpenChange:s,children:r.jsx(xe,{forceMount:!0,container:Z,children:r.jsxs(u,{className:Oe,children:[r.jsx(u,{as:ve,asChild:!0,background:a,className:De,forceMount:!0,children:r.jsx(P.div,{initial:n?!1:{opacity:0},animate:n?!1:{opacity:1},exit:n?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...m},"modal-overlay")}),r.jsx(ye,{asChild:!0,className:_e({autoHeight:c,size:d}),forceMount:!0,onEscapeKeyDown:_=>{t?s==null||s():_.preventDefault()},onInteractOutside:_=>{t||_.preventDefault()},children:r.jsxs(P.div,{initial:n?!1:{y:"100%",opacity:d==="sm"?0:1},animate:n?!1:{y:0,opacity:1},exit:n?void 0:{y:"100%",opacity:d==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...g,children:[i?r.jsx(oe,{children:l}):l,t&&r.jsx(he,{asChild:!0,children:r.jsx(te,{icon:ee,backdropFilter:"blur",size:"xs",className:Ce,"aria-label":"Close"})})]},"modal-content")})]})})})};try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:"ConditionalStyle<Values<MapLeafNodes<{ black: string; white: string; inherit: string; transparent: string; positive: string; negative: string; info: string; warning: string; text100: string; text80: string; text50: string; textInverse100: string; ... 28 more ...; polygonLight: string; }, CSSVarFunction>, { ...; }>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}const Xe={title:"Components/Modal",component:h},L=e=>{const[c,a]=o.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(j,{label:"Open Modal",onClick:()=>a(!c)}),r.jsx(ae,{children:c&&r.jsx(h,{...e,onClose:()=>a(!1)})})]})},b={render:L,args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(y,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}},x={render:e=>r.jsx(L,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...e}),args:{size:"lg",children:r.jsxs(u,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r.jsxs(u,{children:[r.jsx(y,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),r.jsx(y,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),r.jsx(u,{justifyContent:"flex-end",children:r.jsx(j,{variant:"primary",shape:"square",label:"Create"})})]})}};var R,M,w;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(M=b.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var A,N,F;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(N=x.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const et=["Default","CustomAnimation"];export{x as CustomAnimation,b as Default,et as __namedExportsOrder,Xe as default};
