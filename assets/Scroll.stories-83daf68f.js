import{j as r}from"./jsx-runtime-a9c13c85.js";import{B as a}from"./Box-9e9f1e0d.js";import{C as h}from"./Card-4eb0dff8.js";import{T as p}from"./Text-755617cc.js";import{S as m}from"./Scroll-37fd8e55.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-53256ec3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";/* empty css                              */const w={title:"Components/Scroll",component:m},x=e=>r(h,{outlined:!0,style:{width:200,height:200},overflow:"hidden",padding:"0",children:r(m,{...e})}),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:x,args:{direction:"vertical",children:r(a,{padding:"4",flexDirection:"column",gap:"4",alignItems:"center",children:g.map(e=>r(a,{children:r(p,{color:"text100",variant:"xlarge",children:e})},e))})}},o={render:x,args:{direction:"horizontal",children:r(a,{padding:"4",gap:"4",alignItems:"center",height:"full",width:"max",children:g.map(e=>r(a,{children:r(p,{color:"text100",variant:"xlarge",children:e})},e))})}};var i,l,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const z=["VerticalScroll","HorizontalScroll"];export{o as HorizontalScroll,t as VerticalScroll,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Scroll.stories-83daf68f.js.map
