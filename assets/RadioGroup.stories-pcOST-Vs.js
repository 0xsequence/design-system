import{j as e}from"./iframe-Cq48s_d4.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-znwqnl55.js";import{R as a,a as r}from"./RadioGroup-DELX5Md7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./Label-JA-tVkNg.js";import"./index-DCZNLBFp.js";import"./index-B_UTeoBx.js";import"./index-B4-iqM0y.js";import"./index-MWfUQuGU.js";import"./Text-ByHX5-LP.js";import"./Separator-XvFGdNa9.js";import"./index-CdD5OUCa.js";import"./index-oaHkc4tW.js";import"./index-CgvVfgHM.js";import"./index-BjIX7vDj.js";import"./index-BThGkuKG.js";import"./index-CHQXQpWR.js";import"./index-Cxt7LR73.js";import"./index-Bs4AZ2fn.js";import"./index-BhEOsYyq.js";import"./index-BtUEsP63.js";import"./styles-S7yBqErU.js";const y={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,y as default};
