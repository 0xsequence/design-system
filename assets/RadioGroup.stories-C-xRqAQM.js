import{j as e}from"./iframe-DVpTyOqq.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-DLd4g3q0.js";import{R as a,a as r}from"./RadioGroup-CQMSQmRW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./Label--ODNIqU9.js";import"./index-Dc3w96IN.js";import"./index-BKHnpAHy.js";import"./index-CSVmpO1B.js";import"./index-Dr8QvyYb.js";import"./index-CJezIvJD.js";import"./Text-CXv7c80j.js";import"./Separator-syE3vkb3.js";import"./index-X_SM0Ghf.js";import"./index-CadCOaRc.js";import"./index-Bd5hFHj5.js";import"./index-CTt9Oopj.js";import"./index-Cd2yUr1u.js";import"./index-C-pcHA47.js";import"./index-B-h0Uw-U.js";import"./index-DAAKnxvc.js";import"./index-CnBcfIUi.js";import"./styles-DSBOcsIh.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
