import{j as e}from"./iframe-x9Az_wX2.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-Co5V2lDY.js";import{R as a,a as r}from"./RadioGroup-CSA68pNf.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DK8XftlJ.js";import"./Label-B8mkzCyc.js";import"./index-BKMeg92I.js";import"./index-Cvde6zCp.js";import"./index-B51yllUl.js";import"./index-BXl-T_92.js";import"./index-DFxNDzw9.js";import"./Text-t31Q8yHK.js";import"./Separator-C5Xq2X3r.js";import"./index-C8u8ly2C.js";import"./index-DaaNgNg4.js";import"./index-rf1gz8Ef.js";import"./index-DM-yDsNN.js";import"./index-CexQ3jGU.js";import"./index-CIj4z4LI.js";import"./index-DMpXxuXP.js";import"./index-D4fBux9m.js";import"./index-BfOgRs1c.js";import"./styles-C6k-R51j.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
