var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{B as r}from"./Button.d6081e13.js";/* empty css                             *//* empty css                              */import{u as m}from"./ThemeProvider.1c0ea9ed.js";import{j as l}from"./jsx-runtime.45971c93.js";import"./Box.9ad41e42.js";import"./atoms.css.79225c60.js";import"./Text.843dffc6.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c4333eae.js";const x={parameters:{storySource:{source:`import { Button } from '../Button'

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
//# sourceMappingURL=ThemeProvider.stories.6ac7ebe9.js.map
