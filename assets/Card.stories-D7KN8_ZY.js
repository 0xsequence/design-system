import{j as r}from"./iframe-BU9XeNll.js";import{T as o}from"./Text-S4jdbwzp.js";import{C as s}from"./Card-stv2NOTB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCvddFfW.js";import"./index-0BdI_jjD.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";const u={title:"Components/Card",component:s},e={render:l=>r.jsx(s,{...l,children:r.jsxs("div",{className:"flex flex-col",children:[r.jsx(o,{variant:"large",color:"primary",children:"Card"}),r.jsx(o,{variant:"normal",color:"muted",children:"Description"})]})}),args:{variant:"default"}},a={render:l=>r.jsx(s,{...l,children:r.jsx("button",{children:r.jsxs("div",{className:"flex flex-col",children:[r.jsx(o,{variant:"large",color:"primary",children:"Card"}),r.jsx(o,{variant:"normal",color:"muted",children:"Description"})]})})}),args:{clickable:!0,disabled:!1,asChild:!0,onClick:()=>console.log("Clicked!")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const C=["Default","Clickable"];export{a as Clickable,e as Default,C as __namedExportsOrder,u as default};
