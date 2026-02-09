import{j as e}from"./iframe-De7NVgFr.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-lUFkOUcn.js";import{R as a,a as r}from"./RadioGroup-DbXIb703.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DK8XftlJ.js";import"./Label-Dx1ZivWS.js";import"./index-lsu3jT33.js";import"./index-CbkeZYx9.js";import"./index-BIMi7cii.js";import"./index-B7CftIXn.js";import"./index-C3I5MdAp.js";import"./Text-CJZY4yfP.js";import"./Separator-K2WCnbUM.js";import"./index-BkyEAflG.js";import"./index-RF33eYlD.js";import"./index-WuwUlxMC.js";import"./index-c9nVHYYu.js";import"./index-CXnNSFqg.js";import"./index-DV7Q37Ku.js";import"./index-DQDru0Ee.js";import"./index-BzG830sP.js";import"./index-DS8uiBBu.js";import"./styles-C6k-R51j.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
