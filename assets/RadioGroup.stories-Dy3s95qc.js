import{j as e}from"./iframe-DElcGUfC.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-CPMQThgE.js";import{R as a,a as r}from"./RadioGroup-Cmwtg5kP.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DhbneTZY.js";import"./Label-Ord1kQ5U.js";import"./index-HHVXc2AA.js";import"./index-CTsUqMLx.js";import"./index-Clu4gkcR.js";import"./index-CMGBSZ80.js";import"./index-B1drDjob.js";import"./Text-B3P64SWe.js";import"./Separator-DOe839tT.js";import"./index-mgvnJaBD.js";import"./index-2RvllkQj.js";import"./index-BSPVzq8f.js";import"./index-D2YhPF7z.js";import"./index-dvtYw6Wn.js";import"./index-Dkpu6pwH.js";import"./index-Bv7gBvso.js";import"./index-B2KgW2aF.js";import"./index-B45G4VLk.js";import"./styles-B8EbM403.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
