import{j as r}from"./iframe-B_C7GC0U.js";import{C as c}from"./Card-De_M92Gu.js";import{T as o}from"./Text-DOVPWQX5.js";import{S as i}from"./Scroll-BjTm-IoG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjvKmdNc.js";import"./index-CjoR0TVQ.js";import"./classnames-DhbneTZY.js";import"./styles-B8EbM403.js";const S={title:"Components/Scroll",component:i},s=e=>r.jsx(c,{variant:"outline",className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(i,{...e})}),l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a={render:s,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}},t={render:s,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["VerticalScroll","HorizontalScroll"];export{t as HorizontalScroll,a as VerticalScroll,f as __namedExportsOrder,S as default};
