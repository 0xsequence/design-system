import{j as e}from"./iframe-DXItAqYY.js";import{B as o}from"./Button-DryugMaL.js";import{C as m}from"./Card-CrgUAQnq.js";import{C as s}from"./Checkbox-EQ9q-oeb.js";import{I as i}from"./Input-Co0zXf3D.js";import{T as u}from"./TextArea-pC_bZC89.js";import{F as r,a as d,b as a,c,d as t,e as n,f as h}from"./Field-DUR49wEL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL4TMVIq.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./Text-CufLhdPv.js";import"./index-Biq5GEyp.js";import"./index-CGyZ9-M4.js";import"./index---M8jbae.js";import"./index-rX6sKXQg.js";import"./index-C2JpQk0r.js";import"./index-JawlmEij.js";import"./index-LHCNgiNu.js";import"./index-BNMEhjlO.js";import"./YoutubeIcon-Thg-zCRy.js";import"./SearchIcon-SveNcij1.js";import"./Label-LQJDpy6P.js";import"./Separator-7Da1cX1t.js";const M={title:"Forms/Field"},l={render:()=>e.jsx(m,{children:e.jsx("form",{children:e.jsxs(r,{children:[e.jsxs(d,{children:[e.jsx(a,{children:"Payment Method"}),e.jsx(c,{children:"All transactions are secure and encrypted"}),e.jsxs(r,{children:[e.jsxs(t,{children:[e.jsx(n,{htmlFor:"checkout-7j9-card-name-43j",children:"Name on Card"}),e.jsx(i,{id:"checkout-7j9-card-name-43j",placeholder:"Evil Rabbit",required:!0})]}),e.jsxs(t,{children:[e.jsx(n,{htmlFor:"checkout-7j9-card-number-uw1",children:"Card Number"}),e.jsx(c,{children:"Enter your 16-digit card number"}),e.jsx(i,{id:"checkout-7j9-card-number-uw1",placeholder:"1234 5678 9012 3456",required:!0})]}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:e.jsxs(t,{children:[e.jsx(n,{htmlFor:"checkout-7j9-cvv",children:"CVV"}),e.jsx(i,{id:"checkout-7j9-cvv",placeholder:"123",required:!0})]})})]})]}),e.jsx(h,{}),e.jsxs(d,{children:[e.jsx(a,{children:"Billing Address"}),e.jsx(c,{children:"The billing address associated with your payment method"}),e.jsxs(t,{orientation:"horizontal",children:[e.jsx(s,{id:"checkout-7j9-same-as-shipping-wgm",defaultChecked:!0}),e.jsx(n,{htmlFor:"checkout-7j9-same-as-shipping-wgm",className:"font-normal",children:"Same as shipping address"})]})]}),e.jsx(d,{children:e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(n,{htmlFor:"checkout-7j9-optional-comments",children:"Comments"}),e.jsx(u,{id:"checkout-7j9-optional-comments",placeholder:"Add any additional comments",className:"resize-none"})]})})}),e.jsxs(t,{orientation:"horizontal",children:[e.jsx(o,{type:"submit",children:"Submit"}),e.jsx(o,{variant:"outline",type:"button",children:"Cancel"})]})]})})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Y=["Default"];export{l as Default,Y as __namedExportsOrder,M as default};
