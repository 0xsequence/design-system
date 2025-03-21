import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as h}from"./Card-2IUFHffM.js";import{T as n}from"./Text-B7vBE4b5.js";import{S as p}from"./Scroll-Cg7iLfAt.js";import"./index-AemB5ySP.js";import"./index-CFahbR6w.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";const A={title:"Components/Scroll",component:p},m=e=>r.jsx(h,{outlined:!0,className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(p,{...e})}),x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:m,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}},a={render:m,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["VerticalScroll","HorizontalScroll"];export{a as HorizontalScroll,t as VerticalScroll,E as __namedExportsOrder,A as default};
