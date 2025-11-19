import{j as r}from"./iframe-DlOUrP8l.js";import{T as o}from"./Text-BCx2DO6S.js";import{C as l}from"./Card-CDEQ2O6i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D36sFTb8.js";import"./index-DuxFgRlM.js";import"./index-jbG8BFt3.js";import"./classnames-CSMdFpzl.js";import"./styles-S7yBqErU.js";const C={title:"Components/Card",component:l},e={render:t=>r.jsx(l,{...t,children:r.jsxs("div",{className:"flex flex-col",children:[r.jsx(o,{variant:"large",color:"primary",children:"Card"}),r.jsx(o,{variant:"normal",color:"muted",children:"Description"})]})}),args:{variant:"default"}},a={render:t=>r.jsx(l,{...t,children:r.jsx("button",{children:r.jsxs("div",{className:"flex flex-col",children:[r.jsx(o,{variant:"large",color:"primary",children:"Card"}),r.jsx(o,{variant:"normal",color:"muted",children:"Description"})]})})}),args:{clickable:!0,disabled:!1,asChild:!0,onClick:()=>console.log("Clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <div className="flex flex-col">
        <Text variant="large" color="primary">
          Card
        </Text>
        <Text variant="normal" color="muted">
          Description
        </Text>
      </div>
    </Card>,
  args: {
    variant: 'default'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
      <button>
        <div className="flex flex-col">
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </button>
    </Card>,
  args: {
    clickable: true,
    disabled: false,
    asChild: true,
    onClick: () => console.log('Clicked!')
  }
}`,...a.parameters?.docs?.source}}};const f=["Default","Clickable"];export{a as Clickable,e as Default,f as __namedExportsOrder,C as default};
