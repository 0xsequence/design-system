var m=Object.defineProperty;var a=(n,e)=>m(n,"name",{value:e,configurable:!0});import{a as s,j as o,r as u}from"./jsx-runtime.45971c93.js";import{B as b}from"./Badge.bfbbbc10.js";import{B as t}from"./Box.9ad41e42.js";import{T as p}from"./Text.843dffc6.js";/* empty css                             *//* empty css                              */import{U as g,F as v}from"./WarningIcon.1d3393be.js";import{T as d}from"./TabbedNav.07afd64b.js";import"./iframe.c4333eae.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.79225c60.js";import"./Button.d6081e13.js";const V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:18},endLoc:{col:1,line:38},startBody:{col:56,line:18},endBody:{col:1,line:38}}}}},title:"Components/TabbedNav",component:d},l=a(n=>new Promise(e=>setTimeout(e,n*1e3)),"delay"),f=a(({...n})=>{const[e,i]=u.exports.useState("wallet"),c=a(r=>{i(r)},"handleTabChange");return s(t,{flexDirection:"column",gap:"4",children:[o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(d,{...n,onTabChange:r=>c(r)})}),o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(p,{variant:"normal",color:"text100",children:e})})]})},"StoryTemplate"),T=f.bind({});T.args={defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:s(t,{gap:"1",children:["History",o(b,{value:"3"})]}),leftIcon:g,value:"history",onLoad:async()=>(console.log("processing..."),await l(1),!0)},{label:"Contacts (Fails to load)",leftIcon:v,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await l(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}]};const R=["Demo"];export{T as Demo,R as __namedExportsOrder,V as default};
//# sourceMappingURL=TabbedNav.stories.999d029d.js.map
