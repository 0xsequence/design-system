import{j as e}from"./iframe-D00-goLr.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-C2wbj-qP.js";import{R as a,a as r}from"./RadioGroup-T2oOaeYo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./Label-CBSKmK_6.js";import"./index-B0PGvbGk.js";import"./index-B0Y7ZKGB.js";import"./index-CXuwO4pW.js";import"./index-CkZCWXXn.js";import"./index-Dp9UmCQa.js";import"./Text-DDMnqWt5.js";import"./Separator-I3IWr4pp.js";import"./index-BmQ4nnUe.js";import"./index-BAB1hY1A.js";import"./index-2DphuoXu.js";import"./index-CZVGZ1TJ.js";import"./index-pRdK0NiT.js";import"./index-C4x7CIMP.js";import"./index-BV6ZR6Pk.js";import"./index-C4BzEyk3.js";import"./index-BqbtULG0.js";import"./styles-DSBOcsIh.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
