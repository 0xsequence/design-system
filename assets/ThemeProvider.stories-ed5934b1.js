import{j as a}from"./jsx-runtime-69eee039.js";import{B as h}from"./Button-51c8722d.js";import{T as l,u as n}from"./ThemeProvider-aaa1b40e.js";import"./index-7c191284.js";import"./Box-7d1c3652.js";import"./atoms-dc8b8460.js";import"./Text-5213eff4.js";import"./typography-f274f330.js";/* empty css                              */import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";const v={title:"Components/ThemeProvider",component:l},e=()=>{const{theme:m,setTheme:s}=n(),i=()=>{s(m==="light"?"dark":"light")};return a.jsx(h,{label:"Toggle theme",onClick:i})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,v as default};
//# sourceMappingURL=ThemeProvider.stories-ed5934b1.js.map
