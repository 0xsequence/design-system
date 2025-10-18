import{j as r}from"./iframe-CWsCIOC4.js";import{C as c}from"./Card-R6j2x7I2.js";import{T as o}from"./Text-Bgv7srEr.js";import{S as i}from"./Scroll-Crw7dLfp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bYQteW89.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./styles-xWsADqyq.js";import"./classnames-BpotA9kf.js";const f={title:"Components/Scroll",component:i},s=e=>r.jsx(c,{outlined:!0,className:"overflow-hidden p-0",style:{width:200,height:200},children:r.jsx(i,{...e})}),l=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t={render:s,args:{direction:"vertical",shadows:!0,children:r.jsx("div",{className:"p-4 flex flex-col gap-4 items-center",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}},a={render:s,args:{direction:"horizontal",shadows:!0,children:r.jsx("div",{className:"p-4 gap-4 items-center h-full w-max",children:l.map(e=>r.jsx("div",{children:r.jsx(o,{color:"primary",variant:"xlarge",children:e})},e))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const j=["VerticalScroll","HorizontalScroll"];export{a as HorizontalScroll,t as VerticalScroll,j as __namedExportsOrder,f as default};
