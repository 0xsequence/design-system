var m=Object.defineProperty;var a=(n,e)=>m(n,"name",{value:e,configurable:!0});import{a as s,j as o,r as u}from"./jsx-runtime.f636af4d.js";import{B as p}from"./Badge.c399faa4.js";import{B as t}from"./Box.2d3bce7f.js";import{T as b}from"./Text.184e3bef.js";/* empty css                             *//* empty css                              */import{U as g,F as v}from"./WarningIcon.2bf9e3d8.js";import{T as c}from"./TabbedNav.b08d6504.js";import"./iframe.e363e4ff.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.b9e53546.js";import"./Button.372f4ba6.js";const V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
        <Text variant="normal" color="textBody">
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
  ],
}
`,locationsMap:{demo:{startLoc:{col:56,line:18},endLoc:{col:1,line:38},startBody:{col:56,line:18},endBody:{col:1,line:38}}}}},title:"Components/TabbedNav",component:c},l=a(n=>new Promise(e=>setTimeout(e,n*1e3)),"delay"),f=a(({...n})=>{const[e,i]=u.exports.useState("wallet"),d=a(r=>{i(r)},"handleTabChange");return s(t,{flexDirection:"column",gap:"4",children:[o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(c,{...n,onTabChange:r=>d(r)})}),o(t,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:o(b,{variant:"normal",color:"textBody",children:e})})]})},"StoryTemplate"),T=f.bind({});T.args={defaultValue:"wallet",size:"sm",tabs:[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:s(t,{gap:"1",children:["History",o(p,{value:"3"})]}),leftIcon:g,value:"history",onLoad:async()=>(console.log("processing..."),await l(1),!0)},{label:"Contacts (Fails to load)",leftIcon:v,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await l(1),!1)}]};const R=["Demo"];export{T as Demo,R as __namedExportsOrder,V as default};
//# sourceMappingURL=TabbedNav.stories.73dffab0.js.map
