var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{B as r}from"./Button.e35e39eb.js";/* empty css                             *//* empty css                              */import{u as m}from"./ThemeProvider.48f84a45.js";import{j as l}from"./jsx-runtime.a97c4eab.js";import"./Box.e0c5aa09.js";import"./atoms.css.ccb5b5eb.js";import"./Text.99ae096d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.f68b59c8.js";const x={parameters:{storySource:{source:`import { Button } from '../Button'

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
//# sourceMappingURL=ThemeProvider.stories.28c690d0.js.map
