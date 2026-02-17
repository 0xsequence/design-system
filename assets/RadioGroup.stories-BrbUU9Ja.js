import{j as e}from"./iframe-DszenvOL.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-BI2omBWv.js";import{R as a,a as r}from"./RadioGroup-CSOruulr.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-edArjE0v.js";import"./Label-DT_vLEB7.js";import"./index-DOJ61sFR.js";import"./index-BfOoZjKr.js";import"./index-DscbnGsJ.js";import"./index-8_A7gE66.js";import"./index-B0mc_bB0.js";import"./Text-BlCnRIaL.js";import"./Separator-BMtw-NXp.js";import"./index-CDEPDLZp.js";import"./index-Ntw6YbwD.js";import"./index-BKHf-GyV.js";import"./index-WGVc9eaH.js";import"./index-DeGI1XDF.js";import"./index-C8ypN_Ds.js";import"./index-VKTLPe7h.js";import"./index-BYFlCZUH.js";import"./index-B3uvN0z0.js";import"./styles-kp6XyECN.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
