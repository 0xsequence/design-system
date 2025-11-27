import{j as e}from"./iframe-BdNJ3tS_.js";import{a as d,b as m,c as s,d as i,e as o}from"./Field-B2Cqf1Kn.js";import{R as a,a as r}from"./RadioGroup-D3n0Bx69.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cn1xQXcm.js";import"./Label-BPM6oEI7.js";import"./index-CTmFpXum.js";import"./index-DAX1YB6G.js";import"./index-Bmp3b_ZE.js";import"./index-BFBpQ4u7.js";import"./index-DhWVUv1C.js";import"./Text-0pqb9V3N.js";import"./Separator-DB0UdaEr.js";import"./index-BEXvY1IK.js";import"./index-Bs9ksHyd.js";import"./index-DUVRQ_Qq.js";import"./index-DNGmTdtY.js";import"./index-DkahqK_5.js";import"./index-DFTBNz4B.js";import"./index-DJS8fOMM.js";import"./index-s_rMiHAI.js";import"./index-Dw1YjwRx.js";import"./styles-DSBOcsIh.js";const k={title:"Forms/RadioGroup",component:a},t={render:l=>e.jsxs(d,{children:[e.jsx(m,{children:"Notification Method"}),e.jsx(s,{children:"How would you like to be notified?"}),e.jsxs(a,{name:"notification-method",...l,children:[e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"email",value:"email"}),e.jsx(o,{htmlFor:"email",children:"Email"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"sms",value:"sms"}),e.jsx(o,{htmlFor:"sms",children:"SMS"})]}),e.jsxs(i,{orientation:"horizontal",children:[e.jsx(r,{id:"phone",value:"phone"}),e.jsx(o,{htmlFor:"phone",children:"Phone"})]}),e.jsxs(i,{orientation:"horizontal","data-disabled":!0,children:[e.jsx(r,{id:"telegram",value:"telegram",disabled:!0}),e.jsx(o,{htmlFor:"telegram",children:"Telegram"})]})]})]}),args:{defaultValue:"email"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
