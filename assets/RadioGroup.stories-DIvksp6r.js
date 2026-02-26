import{j as e}from"./iframe-B_C7GC0U.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-PNkyQ6VT.js";import{R as a,a as r}from"./RadioGroup-mFkR9nhl.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DhbneTZY.js";import"./Label-dT4BiCDe.js";import"./index-CWbwGkbY.js";import"./index-Cavl5pOi.js";import"./index-B016HQSq.js";import"./index-BjvKmdNc.js";import"./index-CjoR0TVQ.js";import"./Text-DOVPWQX5.js";import"./Separator-KJ38NVgI.js";import"./index-Euv20uj9.js";import"./index-BJw0lmew.js";import"./index-ChGiC-uw.js";import"./index-xkUO4ggv.js";import"./index-z0aJmh7X.js";import"./index-XNqd_0g1.js";import"./index-qyYXKRmm.js";import"./index-DVZYqJVU.js";import"./index-DwLYTb_8.js";import"./styles-B8EbM403.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
