import{j as e}from"./iframe-CEBGsxht.js";import{B as m}from"./Button-BrNDy21d.js";import{C as p}from"./Card-D-18x28q.js";import{C as u}from"./Checkbox-HdJRXUIn.js";import{I as l}from"./Input-UoQLlZ0H.js";import{T as F}from"./TextArea-Kq3EE9Um.js";import{F as s,a as c,b as h,c as r,d as n,e as i,f as j,g as t,h as a}from"./Field-C2NTZ94H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3n5f5AG.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./Text-C1CTKZYh.js";import"./index-BgYWh0mh.js";import"./index-B_ewnVLa.js";import"./index-DAWxpg2E.js";import"./index-CTq3hmOT.js";import"./index-DxOa_yPB.js";import"./index-BOw7vfM6.js";import"./index-Co5Ovxbk.js";import"./index-C6O-H2UX.js";import"./YoutubeIcon-CXHvyj1-.js";import"./SearchIcon-DVyE4Q8D.js";import"./Label-BwCsQdHM.js";import"./Separator-BuNXBfqP.js";const _={title:"Forms/Field"},d={render:()=>e.jsx(p,{children:e.jsx("form",{children:e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(h,{children:"Payment Method"}),e.jsx(r,{children:"All transactions are secure and encrypted"}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(i,{htmlFor:"checkout-7j9-card-name-43j",children:"Name on Card"}),e.jsx(l,{id:"checkout-7j9-card-name-43j",placeholder:"Evil Rabbit",required:!0})]}),e.jsxs(n,{children:[e.jsx(i,{htmlFor:"checkout-7j9-card-number-uw1",children:"Card Number"}),e.jsx(r,{children:"Enter your 16-digit card number"}),e.jsx(l,{id:"checkout-7j9-card-number-uw1",placeholder:"1234 5678 9012 3456",required:!0})]}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:e.jsxs(n,{children:[e.jsx(i,{htmlFor:"checkout-7j9-cvv",children:"CVV"}),e.jsx(l,{id:"checkout-7j9-cvv",placeholder:"123",required:!0})]})})]})]}),e.jsx(j,{}),e.jsxs(c,{children:[e.jsx(h,{children:"Billing Address"}),e.jsx(r,{children:"The billing address associated with your payment method"}),e.jsxs(n,{orientation:"horizontal",children:[e.jsx(u,{id:"checkout-7j9-same-as-shipping-wgm",defaultChecked:!0}),e.jsx(i,{htmlFor:"checkout-7j9-same-as-shipping-wgm",className:"font-normal",children:"Same as shipping address"})]})]}),e.jsx(c,{children:e.jsx(s,{children:e.jsxs(n,{children:[e.jsx(i,{htmlFor:"checkout-7j9-optional-comments",children:"Comments"}),e.jsx(F,{id:"checkout-7j9-optional-comments",placeholder:"Add any additional comments",className:"resize-none"})]})})}),e.jsxs(n,{orientation:"horizontal",children:[e.jsx(m,{type:"submit",children:"Submit"}),e.jsx(m,{variant:"outline",type:"button",children:"Cancel"})]})]})})})},o={render:()=>e.jsx(p,{children:e.jsxs(s,{children:[e.jsxs(n,{orientation:"responsive",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Label"}),e.jsx(r,{children:"This is a description"})]}),e.jsxs(t,{children:[e.jsx(l,{}),e.jsx(a,{children:"This is an error"})]})]}),e.jsxs(n,{orientation:"responsive",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Label"}),e.jsx(r,{children:"This is a description"})]}),e.jsxs(t,{children:[e.jsx(l,{}),e.jsx(a,{children:"This is an error"})]})]}),e.jsxs(n,{orientation:"responsive",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Label"}),e.jsx(r,{children:"This is a description"})]}),e.jsxs(t,{children:[e.jsx(l,{}),e.jsx(a,{children:"This is an error"})]})]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input id="checkout-7j9-card-name-43j" placeholder="Evil Rabbit" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
                <Input id="checkout-7j9-card-number-uw1" placeholder="1234 5678 9012 3456" required />
              </Field>
              <div className="grid grid-cols-3 gap-4">
                {/* <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                 </Field>
                 <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                    </SelectContent>
                  </Select>
                 </Field> */}
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            {/* <FieldGroup> */}
            <Field orientation="horizontal">
              <Checkbox id="checkout-7j9-same-as-shipping-wgm" defaultChecked />
              <FieldLabel htmlFor="checkout-7j9-same-as-shipping-wgm" className="font-normal">
                Same as shipping address
              </FieldLabel>
            </Field>
            {/* </FieldGroup> */}
          </FieldSet>

          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <TextArea id="checkout-7j9-optional-comments" placeholder="Add any additional comments" className="resize-none" />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </Card>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>This is a description</FieldDescription>
          </FieldContent>
          <FieldContent>
            <Input />
            <FieldError>This is an error</FieldError>
          </FieldContent>
        </Field>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>This is a description</FieldDescription>
          </FieldContent>
          <FieldContent>
            <Input />
            <FieldError>This is an error</FieldError>
          </FieldContent>
        </Field>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel>Label</FieldLabel>
            <FieldDescription>This is a description</FieldDescription>
          </FieldContent>
          <FieldContent>
            <Input />
            <FieldError>This is an error</FieldError>
          </FieldContent>
        </Field>
      </FieldGroup>
    </Card>
}`,...o.parameters?.docs?.source}}};const P=["Default","Responsive"];export{d as Default,o as Responsive,P as __namedExportsOrder,_ as default};
