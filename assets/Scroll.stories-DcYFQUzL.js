import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{B as n}from"./Box-C40y65kp.js";import{C as g}from"./Card-Dn2WB1Vm.js";import{T as p}from"./Text-nzizsmdP.js";import{S as m}from"./Scroll-BTs3x5AC.js";import"./index-Cu9bd8lq.js";/* empty css                            */import"./atoms-BbXxmxZh.js";import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./typography-BClcJN8w.js";/* empty css                              */const H={title:"Components/Scroll",component:m},x=e=>r.jsx(g,{outlined:!0,style:{width:200,height:200},overflow:"hidden",padding:"0",children:r.jsx(m,{...e})}),h=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:x,args:{direction:"vertical",shadows:!0,children:r.jsx(n,{padding:"4",flexDirection:"column",gap:"4",alignItems:"center",children:h.map(e=>r.jsx(n,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}},o={render:x,args:{direction:"horizontal",shadows:!0,children:r.jsx(n,{padding:"4",gap:"4",alignItems:"center",height:"full",width:"max",children:h.map(e=>r.jsx(n,{children:r.jsx(p,{color:"text100",variant:"xlarge",children:e})},e))})}};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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