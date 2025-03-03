import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as y}from"./index-D1TSixAU.js";import{B as r}from"./Button-Dyu0DGgy.js";import{T as a}from"./Text-DiY0ipGE.js";import{b as C}from"./WarningIcon-C-Bue-nz.js";import{C as N}from"./Card-DDkzOCNp.js";import{M as g}from"./Modal-Dlg_qrSy.js";import{A as b}from"./index-C3i99lKw.js";import"./index-C9rmetsa.js";import"./index-DEvaI7vP.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";import"./index-BWtkTp-R.js";import"./index-CuZtKiOG.js";import"./index-Dcf1nc42.js";import"./index-D2m0ySOf.js";import"./index-VR-_z_Zs.js";import"./index-DCVWRiMv.js";import"./Combination-DfJfzaFg.js";import"./index-DogTl_U1.js";import"./IconButton-DU-GOoHC.js";import"./Scroll-HNtTmBVf.js";import"./ThemeProvider-CHaDE3bZ.js";import"./color-CiP8tUik.js";import"./proxy-CYprtF8D.js";const U={title:"Components/Modal",component:g},o=i=>{const[n,c]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Open Modal",onClick:()=>c(!n)}),e.jsx(b,{children:n&&e.jsx(g,{...i,onClose:()=>c(!1)})})]})},s={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(a,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(r,{variant:"primary",shape:"square",label:"Create"})})]})}},t={render:o,args:{header:"Task list",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{className:"w-full",shape:"square",label:"Cancel"}),e.jsx(r,{className:"w-full",variant:"primary",shape:"square",label:"Confirm"})]}),children:e.jsx("div",{className:"flex flex-col gap-2 p-4",children:[1,2,3,4,5,6,7,8,9].map(i=>e.jsxs(N,{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white",children:e.jsx(C,{})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(a,{variant:"normal",fontWeight:"bold",color:"primary",block:!0,children:["Item ",i]}),e.jsx(a,{variant:"small",color:"muted",children:"Description"})]})]}))})}},l={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(a,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"Custom Open & Close Animated Modal. You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(r,{variant:"primary",shape:"square",label:"Create"})})]}),overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,h,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,v,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const V=["Default","WithHeaderAndFooter","CustomAnimation"];export{l as CustomAnimation,s as Default,t as WithHeaderAndFooter,V as __namedExportsOrder,U as default};
