import{j as e}from"./iframe-CfmiJJDU.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-C7i53DxD.js";import{R as a,a as r}from"./RadioGroup-0IXHmFTd.js";import"./preload-helper-PPVm8Dsz.js";import"./classnames-DK8XftlJ.js";import"./Label-CUkvGv3h.js";import"./index-aUzBNqP-.js";import"./index-BPe2op5l.js";import"./index-9lrrrfWI.js";import"./index-C02vWU17.js";import"./index-bSrywljg.js";import"./Text-C1JjgtEQ.js";import"./Separator-CGbS8jq3.js";import"./index-D7T5ypQk.js";import"./index-DBwt5hrl.js";import"./index-MsNTpJWV.js";import"./index-DSCU8g9t.js";import"./index-CmuR1OB2.js";import"./index-BIu4kmp6.js";import"./index-liZDm9wu.js";import"./index-CknMbiGi.js";import"./index-DYL1ZBaF.js";import"./styles-C6k-R51j.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
