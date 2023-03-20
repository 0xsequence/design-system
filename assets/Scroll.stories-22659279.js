import{j as r}from"./jsx-runtime-a9c13c85.js";import{B as a}from"./Box-63eb24b2.js";import{C as h}from"./Card-7aa7a765.js";import{T as s}from"./Text-cc9cad53.js";import{S as m}from"./Scroll-f5008abe.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";/* empty css                              */const L={title:"Components/Scroll",component:m},x=e=>r(h,{outlined:!0,style:{width:200,height:200},overflow:"hidden",padding:"0",children:r(m,{...e})}),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:x,args:{direction:"vertical",children:r(a,{padding:"4",flexDirection:"column",gap:"4",alignItems:"center",children:g.map(e=>r(a,{children:r(s,{color:"text100",variant:"xlarge",children:e})},e))})}},o={render:x,args:{direction:"horizontal",children:r(a,{padding:"4",gap:"4",alignItems:"center",height:"full",width:"max",children:g.map(e=>r(a,{children:r(s,{color:"text100",variant:"xlarge",children:e})},e))})}};var i,l,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'vertical',
    children: <Box padding="4" flexDirection="column" gap="4" alignItems="center">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    direction: 'horizontal',
    children: <Box padding="4" gap="4" alignItems="center" height="full" width="max">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};t.parameters={storySource:{source:`{
  render: StoryWrapper,
  args: {
    direction: 'vertical',
    children: <Box padding="4" flexDirection="column" gap="4" alignItems="center">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`},...t.parameters};o.parameters={storySource:{source:`{
  render: StoryWrapper,
  args: {
    direction: 'horizontal',
    children: <Box padding="4" gap="4" alignItems="center" height="full" width="max">
        {ALPHABET.map(letter => <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>)}
      </Box>
  }
}`},...o.parameters};const P=["VerticalScroll","HorizontalScroll"];export{o as HorizontalScroll,t as VerticalScroll,P as __namedExportsOrder,L as default};
//# sourceMappingURL=Scroll.stories-22659279.js.map
