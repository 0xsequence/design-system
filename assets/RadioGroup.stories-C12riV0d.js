import{j as e}from"./iframe-DGRragEl.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-Bny7jhmn.js";import{R as a,a as r}from"./RadioGroup-DtKrMzeq.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-Cf5f3TJi.js";import"./Label-BJQ_ORBH.js";import"./index-C5CML49V.js";import"./index-CRD4-0oN.js";import"./index-pHviz2CM.js";import"./index-DIRmKe4O.js";import"./index-DDA3UnYo.js";import"./Text-BBnnG5Ni.js";import"./Separator-eb-2Qg2x.js";import"./index-2S6m326A.js";import"./index-jx8G1kXu.js";import"./index-BLAb8p_1.js";import"./index-BuqScHpa.js";import"./index-C4JCtGEc.js";import"./index-DEH0IpAN.js";import"./index-CYegF5yf.js";import"./index-C7I5teRT.js";import"./index-DYcakxSQ.js";import"./styles-D3VuZg3D.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldSet>
      <FieldLegend>Notification Method</FieldLegend>
      <FieldDescription>How would you like to be notified?</FieldDescription>
      <RadioGroup name="notification-method" {...args}>
        <Field orientation="horizontal">
          <RadioGroupItem id="email" value="email" />
          <FieldLabel htmlFor="email">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="sms" value="sms" />
          <FieldLabel htmlFor="sms">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="phone" value="phone" />
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
        </Field>
        <Field orientation="horizontal" data-disabled={true}>
          <RadioGroupItem id="telegram" value="telegram" disabled={true} />
          <FieldLabel htmlFor="telegram">Telegram</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>,
  args: {
    defaultValue: 'email'
  }
}`,...t.parameters?.docs?.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,k as default};
