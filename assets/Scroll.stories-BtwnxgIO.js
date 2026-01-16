import{j as r}from"./iframe-CuPMd-Xv.js";import{C as c}from"./Card-Q7vYHdKR.js";import{T as o}from"./Text-I1IMu2RH.js";import{S as i}from"./Scroll-bpjfGLuZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dof-t4Bc.js";import"./index-BAQm0HaW.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";const S={title:"Components/Scroll",component:i},s=e=>r.jsx(c,{variant:"outline",className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(i,{...e})}),l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a={render:s,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}},t={render:s,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
