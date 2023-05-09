import{j as r}from"./jsx-runtime-5c44f2f2.js";import{B as a}from"./Box-d2820196.js";import{C as h}from"./Card-13ff0e3d.js";import{T as p}from"./Text-13c0f3dc.js";import{S as m}from"./Scroll-e4ebae0b.js";import"./index-32f9f3e1.js";import"./atoms-c8fed878.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";/* empty css                              */const H={title:"Components/Scroll",component:m},x=e=>r.jsx(h,{outlined:!0,style:{width:200,height:200},overflow:"hidden",padding:"0",children:r.jsx(m,{...e})}),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:x,args:{direction:"vertical",children:r.jsx(a,{padding:"4",flexDirection:"column",gap:"4",alignItems:"center",children:g.map(e=>r.jsx(a,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}},o={render:x,args:{direction:"horizontal",children:r.jsx(a,{padding:"4",gap:"4",alignItems:"center",height:"full",width:"max",children:g.map(e=>r.jsx(a,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}};var i,l,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,s,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const I=["VerticalScroll","HorizontalScroll"];export{o as HorizontalScroll,t as VerticalScroll,I as __namedExportsOrder,H as default};
//# sourceMappingURL=Scroll.stories-7d7f8629.js.map
