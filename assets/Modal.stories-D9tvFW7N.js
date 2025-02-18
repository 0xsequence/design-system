import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as i}from"./index-D1TSixAU.js";import{B as h}from"./Button-CAqaY53K.js";import{T as m}from"./Text-BQ_5oice.js";import{c as ue,e as fe}from"./WarningIcon-BDb1uTA1.js";import{C as pe}from"./Card-mQrzpjM1.js";import{a as me,c as x}from"./index-BWtkTp-R.js";import{S as ge,u as R}from"./index-DEvaI7vP.js";import{c as xe,P as v,a as he}from"./index-CJCvYUNY.js";import{u as P}from"./index-VR-_z_Zs.js";import{D as ve}from"./index-IH41yLFB.js";import{R as be,h as ye,u as Ce,F as je}from"./Combination-BSzef8zC.js";import{P as Ne}from"./index-dT2VEC9E.js";import{P as T}from"./index-DogTl_U1.js";import{c as De}from"./index-DKHC-OhD.js";import{c as E}from"./clsx-B-dksMZM.js";import{c as we}from"./classnames-D6E8UiG_.js";import{I as _e}from"./IconButton-BV-qU8MD.js";import{S as Pe}from"./Scroll-C1lNlFmf.js";import{u as Re}from"./ThemeProvider-_MUQfWpc.js";import{m as F}from"./proxy-DNmaJl8h.js";import{A as Te}from"./index-nfXGv952.js";import"./index-C9rmetsa.js";import"./index-BNXY6jv6.js";import"./index-wgz3LQUQ.js";import"./color-Cn0GlU5F.js";var I="Dialog",[Y,jt]=xe(I),[Ee,u]=Y(I),K=t=>{const{__scopeDialog:a,children:o,open:s,defaultOpen:n,onOpenChange:r,modal:l=!0}=t,c=i.useRef(null),d=i.useRef(null),[f=!1,p]=me({prop:s,defaultProp:n,onChange:r});return e.jsx(Ee,{scope:a,triggerRef:c,contentRef:d,contentId:P(),titleId:P(),descriptionId:P(),open:f,onOpenChange:p,onOpenToggle:i.useCallback(()=>p(_=>!_),[p]),modal:l,children:o})};K.displayName=I;var U="DialogTrigger",Ie=i.forwardRef((t,a)=>{const{__scopeDialog:o,...s}=t,n=u(U,o),r=R(a,n.triggerRef);return e.jsx(v.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":A(n.open),...s,ref:r,onClick:x(t.onClick,n.onOpenToggle)})});Ie.displayName=U;var O="DialogPortal",[Oe,J]=Y(O,{forceMount:void 0}),Q=t=>{const{__scopeDialog:a,forceMount:o,children:s,container:n}=t,r=u(O,a);return e.jsx(Oe,{scope:a,forceMount:o,children:i.Children.map(s,l=>e.jsx(T,{present:o||r.open,children:e.jsx(Ne,{asChild:!0,container:n,children:l})}))})};Q.displayName=O;var D="DialogOverlay",X=i.forwardRef((t,a)=>{const o=J(D,t.__scopeDialog),{forceMount:s=o.forceMount,...n}=t,r=u(D,t.__scopeDialog);return r.modal?e.jsx(T,{present:s||r.open,children:e.jsx(Me,{...n,ref:a})}):null});X.displayName=D;var Me=i.forwardRef((t,a)=>{const{__scopeDialog:o,...s}=t,n=u(D,o);return e.jsx(be,{as:ge,allowPinchZoom:!0,shards:[n.contentRef],children:e.jsx(v.div,{"data-state":A(n.open),...s,ref:a,style:{pointerEvents:"auto",...s.style}})})}),g="DialogContent",ee=i.forwardRef((t,a)=>{const o=J(g,t.__scopeDialog),{forceMount:s=o.forceMount,...n}=t,r=u(g,t.__scopeDialog);return e.jsx(T,{present:s||r.open,children:r.modal?e.jsx(Ae,{...n,ref:a}):e.jsx(ke,{...n,ref:a})})});ee.displayName=g;var Ae=i.forwardRef((t,a)=>{const o=u(g,t.__scopeDialog),s=i.useRef(null),n=R(a,o.contentRef,s);return i.useEffect(()=>{const r=s.current;if(r)return ye(r)},[]),e.jsx(te,{...t,ref:n,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(t.onCloseAutoFocus,r=>{var l;r.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:x(t.onPointerDownOutside,r=>{const l=r.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&r.preventDefault()}),onFocusOutside:x(t.onFocusOutside,r=>r.preventDefault())})}),ke=i.forwardRef((t,a)=>{const o=u(g,t.__scopeDialog),s=i.useRef(!1),n=i.useRef(!1);return e.jsx(te,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var l,c;(l=t.onCloseAutoFocus)==null||l.call(t,r),r.defaultPrevented||(s.current||(c=o.triggerRef.current)==null||c.focus(),r.preventDefault()),s.current=!1,n.current=!1},onInteractOutside:r=>{var d,f;(d=t.onInteractOutside)==null||d.call(t,r),r.defaultPrevented||(s.current=!0,r.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const l=r.target;((f=o.triggerRef.current)==null?void 0:f.contains(l))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&n.current&&r.preventDefault()}})}),te=i.forwardRef((t,a)=>{const{__scopeDialog:o,trapFocus:s,onOpenAutoFocus:n,onCloseAutoFocus:r,...l}=t,c=u(g,o),d=i.useRef(null),f=R(a,d);return Ce(),e.jsxs(e.Fragment,{children:[e.jsx(je,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:n,onUnmountAutoFocus:r,children:e.jsx(ve,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":A(c.open),...l,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Fe,{titleId:c.titleId}),e.jsx(ze,{contentRef:d,descriptionId:c.descriptionId})]})]})}),M="DialogTitle",Se=i.forwardRef((t,a)=>{const{__scopeDialog:o,...s}=t,n=u(M,o);return e.jsx(v.h2,{id:n.titleId,...s,ref:a})});Se.displayName=M;var ae="DialogDescription",qe=i.forwardRef((t,a)=>{const{__scopeDialog:o,...s}=t,n=u(ae,o);return e.jsx(v.p,{id:n.descriptionId,...s,ref:a})});qe.displayName=ae;var re="DialogClose",oe=i.forwardRef((t,a)=>{const{__scopeDialog:o,...s}=t,n=u(re,o);return e.jsx(v.button,{type:"button",...s,ref:a,onClick:x(t.onClick,()=>n.onOpenChange(!1))})});oe.displayName=re;function A(t){return t?"open":"closed"}var ne="DialogTitleWarning",[Nt,se]=he(ne,{contentName:g,titleName:M,docsSlug:"dialog"}),Fe=({titleId:t})=>{const a=se(ne),o=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return i.useEffect(()=>{t&&(document.getElementById(t)||console.error(o))},[o,t]),null},We="DialogDescriptionWarning",ze=({contentRef:t,descriptionId:a})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${se(We).contentName}}.`;return i.useEffect(()=>{var r;const n=(r=t.current)==null?void 0:r.getAttribute("aria-describedby");a&&n&&(document.getElementById(a)||console.warn(s))},[s,t,a]),null},Ve=K,Be=Q,He=X,Ge=ee,Le=oe;const Ze=De(["flex","flex-col","fixed","overflow-hidden","bg-background-primary","focus:outline-hidden","scrollbar-none","bottom-0 md:bottom-auto","rounded-t-2xl rounded-b-none md:rounded-b-2xl"],{variants:{size:{sm:["w-screen md:w-[540px]","min-h-[100px] max-h-[calc(100dvh-80px)] md:max-h-[min(800px,calc(100dvh-80px))]"],lg:["w-screen md:w-[720px]","h-[calc(100dvh-70px)] md:h-[800px] md:max-h-[min(800px,calc(100dvh-80px))]"]},autoHeight:{true:"lg:h-auto!"}},defaultVariants:{size:"lg"}}),w=t=>{const{header:a,footer:o,autoHeight:s=!1,backdropColor:n="bg-background-backdrop",children:r,disableAnimation:l=!1,isDismissible:c=!0,onClose:d,scroll:f=!0,size:p="lg",overlayProps:_,contentProps:le,rootProps:b={}}=t,{root:S}=Re(),[q,ie]=i.useState(null);i.useEffect(()=>{ie(document.querySelector(S||"body"))},[S]);const ce=f?Pe:i.Fragment;return q?e.jsx(Ve,{modal:!0,defaultOpen:!0,onOpenChange:d,children:e.jsx(Be,{forceMount:!0,container:q,children:e.jsxs("div",{className:we("seq-root","fixed inset-0 z-20 flex items-center justify-center",b==null?void 0:b.className),...b,children:[e.jsx(He,{asChild:!0,forceMount:!0,children:e.jsx(F.div,{className:E("fixed inset-0",n),initial:l?!1:{opacity:0},animate:l?!1:{opacity:1},exit:l?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},..._},"modal-overlay")}),e.jsx(Ge,{asChild:!0,className:Ze({size:p,autoHeight:s}),forceMount:!0,onEscapeKeyDown:y=>{c?d==null||d():y.preventDefault()},onInteractOutside:y=>{c||y.preventDefault()},children:e.jsxs(F.div,{initial:l?!1:{y:"100%",opacity:p==="sm"?0:1},animate:l?!1:{y:0,opacity:1},exit:l?void 0:{y:"100%",opacity:p==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},transformTemplate:(y,de)=>`${de} translateZ(0)`,...le,children:[a&&e.jsx($e,{children:a}),e.jsxs(ce,{children:[a&&e.jsx(Ye,{}),r]}),o&&e.jsx(Ke,{children:o}),c&&e.jsx(Le,{asChild:!0,children:e.jsx(_e,{icon:ue,size:"xs",className:"absolute right-4 top-4 z-20 backdrop-blur-xs","aria-label":"Close"})})]},"modal-content")})]})})}):null},$e=t=>{const{children:a}=t;return e.jsxs("div",{className:E("absolute top-0 left-0 right-0 h-[60px] p-4 z-10","before:absolute before:left-0 before:-bottom-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-t before:from-transparent before:to-background-overlay"),children:[e.jsx("div",{className:"backdrop-blur-md bg-background-overlay absolute w-full h-full top-0 left-0"}),e.jsx("div",{className:"relative h-full w-full z-10 flex items-center justify-center",children:typeof a=="string"?e.jsx(m,{variant:"normal",fontWeight:"bold",color:"primary",block:!0,children:a}):a})]})},Ye=()=>e.jsx("div",{className:"pt-[60px]"}),Ke=t=>{const{children:a}=t;return e.jsxs("div",{className:E("absolute bottom-0 left-0 right-0 p-4","before:absolute before:left-0 before:-top-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-b before:from-transparent before:to-background-overlay"),children:[e.jsx("div",{className:"backdrop-blur-md bg-background-overlay absolute w-full h-full top-0 left-0"}),e.jsx("div",{className:"relative w-full z-10 pb-[calc(env(safe-area-inset-bottom))]",children:a})]})};try{w.displayName="Modal",w.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},rootProps:{defaultValue:null,description:"",name:"rootProps",required:!1,type:{name:"{ [key: string]: unknown; className?: string; }"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | null'}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean | null"}}}}}catch{}const Dt={title:"Components/Modal",component:w},k=t=>{const[a,o]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"Open Modal",onClick:()=>o(!a)}),e.jsx(Te,{children:a&&e.jsx(w,{...t,onClose:()=>o(!1)})})]})},C={render:k,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(m,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(m,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(h,{variant:"primary",shape:"square",label:"Create"})})]})}},j={render:k,args:{header:"Task list",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{className:"w-full",shape:"square",label:"Cancel"}),e.jsx(h,{className:"w-full",variant:"primary",shape:"square",label:"Confirm"})]}),children:e.jsx("div",{className:"flex flex-col gap-2 p-4",children:[1,2,3,4,5,6,7,8,9].map(t=>e.jsxs(pe,{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white",children:e.jsx(fe,{})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(m,{variant:"normal",fontWeight:"bold",color:"primary",block:!0,children:["Item ",t]}),e.jsx(m,{variant:"small",color:"muted",children:"Description"})]})]}))})}},N={render:k,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(m,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(m,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"Custom Open & Close Animated Modal. You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(h,{variant:"primary",shape:"square",label:"Create"})})]}),overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}}}};var W,z,V;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    size: 'lg',
    children: <div className="flex flex-col justify-between h-full p-4">
        <div>
          <Text variant="medium" color="primary" asChild>
            <h1>New Dapp</h1>
          </Text>
          <Text variant="normal" color="muted" asChild>
            <p>You can always change these settings later.</p>
          </Text>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" shape="square" label="Create" />
        </div>
      </div>
  }
}`,...(V=(z=C.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var B,H,G;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    header: 'Task list',
    footer: <div className="flex gap-2">
        <Button className="w-full" shape="square" label="Cancel" />
        <Button className="w-full" variant="primary" shape="square" label="Confirm" />
      </div>,
    children: <div className="flex flex-col gap-2 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => <Card className="flex gap-2 items-center">
            <div className="flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white">
              <CheckmarkIcon />
            </div>
            <div className="flex flex-col">
              <Text variant="normal" fontWeight="bold" color="primary" block>
                Item {idx}
              </Text>
              <Text variant="small" color="muted">
                Description
              </Text>
            </div>
          </Card>)}
      </div>
  }
}`,...(G=(H=j.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var L,Z,$;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    size: 'lg',
    children: <div className="flex flex-col justify-between h-full p-4">
        <div>
          <Text variant="medium" color="primary" asChild>
            <h1>New Dapp</h1>
          </Text>
          <Text variant="normal" color="muted" asChild>
            <p>
              Custom Open & Close Animated Modal. You can always change these
              settings later.
            </p>
          </Text>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" shape="square" label="Create" />
        </div>
      </div>,
    overlayProps: {},
    contentProps: {
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
    }
  }
}`,...($=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const wt=["Default","WithHeaderAndFooter","CustomAnimation"];export{N as CustomAnimation,C as Default,j as WithHeaderAndFooter,wt as __namedExportsOrder,Dt as default};
