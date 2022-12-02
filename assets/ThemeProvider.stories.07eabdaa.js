var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{B as r}from"./Button.c67840c1.js";/* empty css                             *//* empty css                              */import{u as m}from"./ThemeProvider.399f3e4f.js";import{j as l}from"./jsx-runtime.67acbeda.js";import"./Box.01559332.js";import"./atoms.css.9489b500.js";import"./Text.ad301f8c.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.619ea6da.js";const x={parameters:{storySource:{source:`import { Button } from '../Button'

import { useTheme } from './ThemeProvider'

export default {
  title: 'Components/ThemeProvider',
}

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <Button label="Toggle theme" onClick={toggleTheme} />
}
`,locationsMap:{"toggle-theme":{startLoc:{col:27,line:9},endLoc:{col:1,line:17},startBody:{col:27,line:9},endBody:{col:1,line:17}}}}},title:"Components/ThemeProvider"},k=o(()=>{const{theme:e,setTheme:t}=m();return l(r,{label:"Toggle theme",onClick:o(()=>{t(e==="light"?"dark":"light")},"toggleTheme")})},"ToggleTheme"),v=["ToggleTheme"];export{k as ToggleTheme,v as __namedExportsOrder,x as default};
//# sourceMappingURL=ThemeProvider.stories.07eabdaa.js.map
