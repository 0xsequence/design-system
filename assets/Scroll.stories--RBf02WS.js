import{j as r}from"./iframe-WewUa6Bl.js";import{C as h}from"./Card-CqOmp7-X.js";import{T as n}from"./Text-B1GdKoPO.js";import{S as p}from"./Scroll-DVZw1HQv.js";import"./index-C_WgVH5G.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-DQzbijWx.js";const w={title:"Components/Scroll",component:p},m=e=>r.jsx(h,{outlined:!0,className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(p,{...e})}),x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a={render:m,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}},t={render:m,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:x.map(e=>r.jsx("div",{children:r.jsx(n,{color:"primary",variant:"xlarge",children:e})},e))})}};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const A=["VerticalScroll","HorizontalScroll"];export{t as HorizontalScroll,a as VerticalScroll,A as __namedExportsOrder,w as default};
