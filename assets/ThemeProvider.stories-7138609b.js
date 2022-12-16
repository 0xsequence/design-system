var r=Object.defineProperty;var o=(e,t)=>r(e,"name",{value:t,configurable:!0});import{B as m}from"./Button-05331ee3.js";/* empty css                             *//* empty css                              */import{u as n}from"./ThemeProvider-9f1c5a1a.js";import{j as l}from"./jsx-runtime-6057fa59.js";import"./Box-28ceaece.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-ded810a3.js";import"./Text-3f9ccc26.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";const k={parameters:{storySource:{source:`import { Button } from '../Button'

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
`,locationsMap:{"toggle-theme":{startLoc:{col:27,line:9},endLoc:{col:1,line:17},startBody:{col:27,line:9},endBody:{col:1,line:17}}}}},title:"Components/ThemeProvider"},v=o(()=>{const{theme:e,setTheme:t}=n();return l(m,{label:"Toggle theme",onClick:o(()=>{t(e==="light"?"dark":"light")},"toggleTheme")})},"ToggleTheme"),C=["ToggleTheme"];export{v as ToggleTheme,C as __namedExportsOrder,k as default};
//# sourceMappingURL=ThemeProvider.stories-7138609b.js.map
