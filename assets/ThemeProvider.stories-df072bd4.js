var r=Object.defineProperty;var o=(e,t)=>r(e,"name",{value:t,configurable:!0});import{B as m}from"./Button-4551bff3.js";/* empty css                             *//* empty css                              */import{u as n}from"./ThemeProvider-9f1c5a1a.js";import{j as l}from"./jsx-runtime-6057fa59.js";import"./Box-51f65dd6.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-36c6db2d.js";import"./Text-cce84919.js";import"./typography-f274f330.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";const v={parameters:{storySource:{source:`import { Button } from '../Button'

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
`,locationsMap:{"toggle-theme":{startLoc:{col:27,line:9},endLoc:{col:1,line:17},startBody:{col:27,line:9},endBody:{col:1,line:17}}}}},title:"Components/ThemeProvider"},C=o(()=>{const{theme:e,setTheme:t}=n();return l(m,{label:"Toggle theme",onClick:o(()=>{t(e==="light"?"dark":"light")},"toggleTheme")})},"ToggleTheme"),P=["ToggleTheme"];export{C as ToggleTheme,P as __namedExportsOrder,v as default};
//# sourceMappingURL=ThemeProvider.stories-df072bd4.js.map
