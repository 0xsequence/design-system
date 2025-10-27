import{j as e,r as d}from"./iframe-CEBGsxht.js";import{d as p}from"./YoutubeIcon-CXHvyj1-.js";import"./SearchIcon-DVyE4Q8D.js";import{B as a}from"./Button-BrNDy21d.js";import{C as h}from"./Card-D-18x28q.js";import{T as r}from"./Text-C1CTKZYh.js";import{M as m}from"./Modal-BCiyGZf0.js";import{A as x}from"./index-58qcgVZi.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-By7m_D43.js";import"./index-jbG8BFt3.js";import"./index-C3n5f5AG.js";import"./styles-S7yBqErU.js";import"./index-8_ke9uTL.js";import"./index-B_ewnVLa.js";import"./index-BgYWh0mh.js";import"./index-Dr7tSuFd.js";import"./index-BLXwKcTw.js";import"./index-BOw7vfM6.js";import"./index-Co5Ovxbk.js";import"./index-C6O-H2UX.js";import"./index-DEdYw-iO.js";import"./component-BhuFX6f7.js";import"./index-DxOa_yPB.js";import"./index-DqMHP-1G.js";import"./index-CetPjlNc.js";import"./IconButton-B4KHeI53.js";import"./ButtonPreset-Bd5M1u3w.js";import"./Scroll-BdLP6IPr.js";import"./proxy-B8PbKp_-.js";const G={title:"Components/Modal",component:m},o=t=>{const[n,c]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>c(!n),children:"Open Modal"}),e.jsx(x,{children:n&&e.jsx(m,{...t,onClose:()=>c(!1)})})]})},s={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(r,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(a,{variant:"primary",shape:"square",children:"Create"})})]})}},i={render:o,args:{header:"Task list",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{className:"w-full",shape:"square",children:"Cancel"}),e.jsx(a,{className:"w-full",variant:"primary",shape:"square",children:"Confirm"})]}),children:e.jsx("div",{className:"flex flex-col gap-2 p-4",children:[1,2,3,4,5,6,7,8,9].map(t=>e.jsxs(h,{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white",children:e.jsx(p,{})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs(r,{variant:"normal",fontWeight:"bold",color:"primary",block:!0,children:["Item ",t]}),e.jsx(r,{variant:"small",color:"muted",children:"Description"})]})]},t))})}},l={render:o,args:{size:"lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full p-4",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"medium",color:"primary",asChild:!0,children:e.jsx("h1",{children:"New Dapp"})}),e.jsx(r,{variant:"normal",color:"muted",asChild:!0,children:e.jsx("p",{children:"Custom Open & Close Animated Modal. You can always change these settings later."})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(a,{variant:"primary",shape:"square",children:"Create"})})]}),overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const J=["Default","WithHeaderAndFooter","CustomAnimation"];export{l as CustomAnimation,s as Default,i as WithHeaderAndFooter,J as __namedExportsOrder,G as default};
