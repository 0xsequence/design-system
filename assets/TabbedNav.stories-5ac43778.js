var m=Object.defineProperty;var a=(n,e)=>m(n,"name",{value:e,configurable:!0});import{r as u}from"./index-9b47cd5d.js";import{B as b}from"./Badge-bb29d0d0.js";import{B as t}from"./Box-51f65dd6.js";import{T as p}from"./Text-cce84919.js";/* empty css                             *//* empty css                              */import{U as g,F as v}from"./WarningIcon-4182fb24.js";import{T as s}from"./TabbedNav-6dc725f5.js";import{a as i,j as o}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./atoms.css-36c6db2d.js";import"./typography-f274f330.js";import"./Button-df754410.js";const j={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { Badge } from '~/components/Badge'
import { Box } from '~/components/Box'
import { Text } from '~/components/Text'
import { ProfileIcon, TransactionIcon } from '~/icons'

import { TabbedNav } from './TabbedNav'

export default {
  title: 'Components/TabbedNav',
  component: TabbedNav,
} as ComponentMeta<typeof TabbedNav>

const delay = (sec: number) => new Promise(res => setTimeout(res, sec * 1000))

const StoryTemplate: ComponentStory<typeof TabbedNav> = ({ ...args }) => {
  const [value, setValue] = useState<string>('wallet')

  const handleTabChange = (value: string) => {
    setValue(value)
  }

  return (
    <Box flexDirection="column" gap="4">
      <Box background="backgroundSecondary" padding="4" borderRadius="md">
        <TabbedNav {...args} onTabChange={value => handleTabChange(value)} />
      </Box>

      <Box background="backgroundSecondary" padding="4" borderRadius="md">
        <Text variant="normal" color="text100">
          {value}
        </Text>
      </Box>
    </Box>
  )
}

export const Demo = StoryTemplate.bind({})
Demo.args = {
  defaultValue: 'wallet',
  size: 'sm',
  tabs: [
    {
      label: 'Wallet',
      value: 'wallet',
      onLoad: () => {
        return true
      },
    },
    { label: 'Simple', value: 'simple' }, // no onClick
    {
      label: 'Another Tab',
      value: 'another',
      onLoad: () => {
        return true
      },
    },
    {
      label: (
        <Box gap="1">
          History
          <Badge value="3" />
        </Box>
      ),
      leftIcon: TransactionIcon,
      value: 'history',
      onLoad: async () => {
        console.log('processing...')
        await delay(1)
        return true
      },
    },
    {
      label: 'Contacts (Fails to load)',
      leftIcon: ProfileIcon,
      value: 'contacts',
      onLoad: async () => {
        console.log('expecting fail...')
        await delay(1)
        return false
      },
    },
    {
      label: 'Disabled',
      value: 'disabled',
      disabled: true,
    },
  ],
}
`,locationsMap:{demo:{startLoc:{col:56,line:18},endLoc:{col:1,line:38},startBody:{col:56,line:18},endBody:{col:1,line:38}}}}},title:"Components/TabbedNav",component:s},l=a(n=>new Promise(e=>setTimeout(e,n*1e3)),"delay"),f=a(({...n})=>{const[e,d]=u.exports.useState("wallet"),c=a(r=>{d(r)},"handleTabChange");return i(t,{flexDirection:"column",gap:"4",children:[o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(s,{...n,onTabChange:r=>c(r)})}),o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(p,{variant:"normal",color:"text100",children:e})})]})},"StoryTemplate"),T=f.bind({});T.args={defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:i(t,{gap:"1",children:["History",o(b,{value:"3"})]}),leftIcon:g,value:"history",onLoad:async()=>(console.log("processing..."),await l(1),!0)},{label:"Contacts (Fails to load)",leftIcon:v,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await l(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}]};const F=["Demo"];export{T as Demo,F as __namedExportsOrder,j as default};
//# sourceMappingURL=TabbedNav.stories-5ac43778.js.map
