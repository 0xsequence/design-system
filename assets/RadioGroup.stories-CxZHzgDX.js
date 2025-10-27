import{j as e}from"./iframe-BKF7lAHv.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-BpKWVf2u.js";import{R as a,a as r}from"./RadioGroup-CglNBL8s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./Label-CG0Pg7rz.js";import"./index-CicD0Qmd.js";import"./index-VJbceOGx.js";import"./index-Boc3ZaOU.js";import"./index-BA8MHRWW.js";import"./Text-jsJK1B6_.js";import"./Separator-Tw4FU-Nl.js";import"./index-BARTiTUj.js";import"./index-LAhfNuov.js";import"./index-DHSwXQzW.js";import"./index-I09Zyyty.js";import"./index-BBcaaQZx.js";import"./index-cOv1Gg_d.js";import"./index-xyCY4JWT.js";import"./index-BMk4RsAF.js";import"./index-ycJGfFYJ.js";import"./index-EVPhQRDi.js";import"./styles-S7yBqErU.js";const y={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
