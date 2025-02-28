import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{C as h}from"./Card-CAI5ZHHD.js";import{T as n}from"./Text-CD99E7ow.js";import{S as p}from"./Scroll-HNtTmBVf.js";import"./index-C9rmetsa.js";import"./index-DEvaI7vP.js";import"./index-D1TSixAU.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";const E={title:"Components/Scroll",component:p},m=e=>r.jsx(h,{outlined:!0,className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(p,{...e})}),x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:m,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}},a={render:m,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'vertical',
    shadows: true,
    children: <div className="p-4 flex flex-col gap-4 items-center">
        {ALPHABET.map(letter => <div key={letter}>
            <Text color="primary" variant="xlarge">
              {letter}
            </Text>
          </div>)}
      </div>
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'horizontal',
    shadows: true,
    children: <div className="p-4 gap-4 items-center h-full w-max">
        {ALPHABET.map(letter => <div key={letter}>
            <Text color="primary" variant="xlarge">
              {letter}
            </Text>
          </div>)}
      </div>
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const H=["VerticalScroll","HorizontalScroll"];export{a as HorizontalScroll,t as VerticalScroll,H as __namedExportsOrder,E as default};
