import{j as e,r as y}from"./iframe-4jdeRta1.js";import{d as C}from"./YoutubeIcon-CzVHBqrL.js";import"./SearchIcon-C82-TMiw.js";import{B as a}from"./Button-DFSpQNYd.js";import{C as N}from"./Card-C7X5Cvay.js";import{T as r}from"./Text-DZp5baOb.js";import{M as g}from"./Modal-DhTnQ-Gf.js";import{A as w}from"./index-Dz_-w2jF.js";import"./preload-helper-Dp1pzeXC.js";import"./classnames-CzI9s_aO.js";import"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";import"./index-DPmhm0QD.js";import"./styles-Dnb-ama7.js";import"./index-oprlvr7y.js";import"./index-Du8aI101.js";import"./index-CKEn7-ll.js";import"./index-BGtbfsCd.js";import"./index-CbmC5du2.js";import"./index-BSVC6t3j.js";import"./index-BmaIzK7v.js";import"./index-DQun6Vyh.js";import"./component-DWS1xVr0.js";import"./index-BuGF1HL0.js";import"./Combination-kno8-m_j.js";import"./index-DmOhWMz8.js";import"./IconButton-D7ddeTCO.js";import"./ButtonPreset-g3SsR6Z9.js";import"./Scroll-DsSfj1Bd.js";import"./proxy-aPoHd49G.js";const ee={title:"Components/Modal",component:g},o=t=>{const[n,c]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>c(!n),children:"Open Modal"}),e.jsx(w,{children:n&&e.jsx(g,{...t,onClose:()=>c(!1)})})]})},s={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(r,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(a,{variant:"primary",shape:"square",children:"Create"})})]})}},i={render:o,args:{header:"Task list",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{className:"w-full",shape:"square",children:"Cancel"}),e.jsx(a,{className:"w-full",variant:"primary",shape:"square",children:"Confirm"})]}),children:e.jsx("div",{className:"flex flex-col gap-2 p-4",children:[1,2,3,4,5,6,7,8,9].map(t=>e.jsxs(N,{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white",children:e.jsx(C,{})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(r,{variant:"normal",fontWeight:"bold",color:"primary",block:!0,children:["Item ",t]}),e.jsx(r,{variant:"small",color:"muted",children:"Description"})]})]},t))})}},l={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(r,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"Custom Open & Close Animated Modal. You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(a,{variant:"primary",shape:"square",children:"Create"})})]}),overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <Button variant="primary" shape="square">
            Create
          </Button>
        </div>
      </div>
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,x,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    header: 'Task list',
    footer: <div className="flex gap-2">
        <Button className="w-full" shape="square">
          Cancel
        </Button>
        <Button className="w-full" variant="primary" shape="square">
          Confirm
        </Button>
      </div>,
    children: <div className="flex flex-col gap-2 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => <Card className="flex gap-2 items-center" key={idx}>
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var f,v,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <Button variant="primary" shape="square">
            Create
          </Button>
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
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const re=["Default","WithHeaderAndFooter","CustomAnimation"];export{l as CustomAnimation,s as Default,i as WithHeaderAndFooter,re as __namedExportsOrder,ee as default};
