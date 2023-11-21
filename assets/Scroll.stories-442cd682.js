import{j as r}from"./jsx-runtime-69eee039.js";import{B as a}from"./Box-8ffdd394.js";import{C as g}from"./Card-3affd0fc.js";import{T as p}from"./Text-cdf53fa8.js";import{S as m}from"./Scroll-ad0fe6d4.js";import"./index-7c191284.js";/* empty css                            */import"./atoms-c7901a03.js";import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./typography-f274f330.js";/* empty css                              */const H={title:"Components/Scroll",component:m},x=e=>r.jsx(g,{outlined:!0,style:{width:200,height:200},overflow:"hidden",padding:"0",children:r.jsx(m,{...e})}),h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:x,args:{direction:"vertical",shadows:!0,children:r.jsx(a,{padding:"4",flexDirection:"column",gap:"4",alignItems:"center",children:h.map(e=>r.jsx(a,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}},o={render:x,args:{direction:"horizontal",shadows:!0,children:r.jsx(a,{padding:"4",gap:"4",alignItems:"center",height:"full",width:"max",children:h.map(e=>r.jsx(a,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}};var i,l,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'vertical',
    shadows: true,
    children: <Box padding="4" flexDirection="column" gap="4" alignItems="center">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'horizontal',
    shadows: true,
    children: <Box padding="4" gap="4" alignItems="center" height="full" width="max">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["VerticalScroll","HorizontalScroll"];export{o as HorizontalScroll,t as VerticalScroll,I as __namedExportsOrder,H as default};
//# sourceMappingURL=Scroll.stories-442cd682.js.map
