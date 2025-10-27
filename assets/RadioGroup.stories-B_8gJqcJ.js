import{j as e}from"./iframe-s-kIoF9H.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-D85JkhtQ.js";import{R as a,a as r}from"./RadioGroup-I0MjBwBG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./Label-sgebA4q2.js";import"./index-BBsGOxKX.js";import"./index-Cha83598.js";import"./index-DqSpHxVf.js";import"./index-fcn99G8-.js";import"./Text-D4C02bpd.js";import"./Separator-JMe_NwRg.js";import"./index-DEBfU4rm.js";import"./index-Db5Xy3OH.js";import"./index-CmfC9clA.js";import"./index-CvRhKS9A.js";import"./index-DluJVAe0.js";import"./index-BYeUhFR6.js";import"./index-DNViZUBd.js";import"./index-DYJ_Q2Ze.js";import"./index-BXNDX30A.js";import"./index--CzHI6kl.js";import"./styles-S7yBqErU.js";const y={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
