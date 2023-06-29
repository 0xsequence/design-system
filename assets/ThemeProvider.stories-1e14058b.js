import{j as a}from"./jsx-runtime-5c44f2f2.js";import{T as h,u as l}from"./ThemeProvider-44ccecfa.js";import{B as n}from"./Button-84f8038e.js";import"./index-32f9f3e1.js";import"./Box-403628ef.js";/* empty css                            *//* empty css                              *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-599edd8f.js";import"./typography-f274f330.js";const B={title:"Components/ThemeProvider",component:h},e=()=>{const{theme:m,setTheme:s}=l(),i=()=>{s(m==="light"?"dark":"light")};return a.jsx(n,{label:"Toggle theme",onClick:i})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,B as default};
//# sourceMappingURL=ThemeProvider.stories-1e14058b.js.map
