import{j as e}from"./iframe-CLsaL1WF.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-D4zoNpoe.js";import{R as a,a as r}from"./RadioGroup-JrAG0jdC.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-Cf5f3TJi.js";import"./Label-BxUbtjDe.js";import"./index-D2Cgrh0a.js";import"./index-Cc6tBug3.js";import"./index-U0CUzs2P.js";import"./index-m7qWw238.js";import"./index-4gL1_1BA.js";import"./Text-DVp5jA0Q.js";import"./Separator-DsMG0TSM.js";import"./index-DYhfVL1C.js";import"./index-CwPCKekn.js";import"./index-Be6a1Hji.js";import"./index-MLlnrTyY.js";import"./index-DGUJUIgO.js";import"./index-D964VDzi.js";import"./index-DZASlpk9.js";import"./index-BJLelE87.js";import"./index-DpsivQ0a.js";import"./styles-D3VuZg3D.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
