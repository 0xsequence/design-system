var m=Object.defineProperty;var e=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a as r,j as o}from"./jsx-runtime.7e8213e7.js";import{B as l}from"./Box.00b658ba.js";import{I as b}from"./InfoBubble.a6fae28d.js";import{T as s}from"./Text.449010d9.js";import{N as p,A as u}from"./WarningIcon.b42c5b69.js";import{T as i}from"./TabbedNav.5c3d982f.js";import"./iframe.24c713f0.js";/* empty css                             */import"./atoms.css.4b799120.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./Button.229f1cde.js";const P={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import { useState } from 'react'

import { Box } from '~/components/Box'
import { InfoBubble } from '~/components/InfoBubble'
import { Text } from '~/components/Text'
import { ProfileIcon, TransactionIcon } from '~/icons'

import { TabOption, TabbedNav } from './TabbedNav'

export default {
  title: 'Components/TabbedNav',
  component: TabbedNav,
} as ComponentMeta<typeof TabbedNav>

const delay = (sec: number) => new Promise(res => setTimeout(res, sec * 1000))

const DemoContent = ({
  title,
  content,
}: {
  title: string
  content: string
}) => (
  <Box padding="4" color="textBody">
    <Text as="h3" variant="large">
      {title}
    </Text>
    <Text as="p">{content}</Text>
  </Box>
)

const StoryTemplate: Story = ({ ...args }) => {
  const [data, setData] = useState({
    title: '',
    content: 'Click tab to change',
  })

  const tabs: TabOption[] = [
    {
      label: 'Wallet',
      value: 'wallet',
      onClick: () => {
        setData({ title: 'Wallet Content', content: 'body content' })
        return true
      },
    },
    {
      label: 'Another Tab',
      value: 'another',
      onClick: () => {
        setData({ title: 'Some Content Title', content: 'some body content' })
        return true
      },
    },
    {
      label: (
        <Box gap="1">
          History
          <InfoBubble info="3" />
        </Box>
      ),
      LeftIcon: TransactionIcon,
      value: 'history',
      onClick: async () => {
        console.log('processing...')
        await delay(1)
        setData({ title: 'Async Loaded Content', content: 'demo content' })
        return true
      },
    },
    {
      label: 'Contacts (Fails to load)',
      LeftIcon: ProfileIcon,
      value: 'contacts',
      onClick: async () => {
        console.log('expecting fail...')
        await delay(1)
        return false
      },
    },
  ]

  return (
    <Box background="backgroundSecondary" padding="6" borderRadius="md">
      <TabbedNav tabs={tabs} marginBottom="6" {...args} />

      <DemoContent {...data} />
    </Box>
  )
}

export const Demo = StoryTemplate.bind({})
Demo.args = {
  activeTab: 'wallet',
  size: 'sm',
}
`,locationsMap:{demo:{startLoc:{col:29,line:33},endLoc:{col:1,line:91},startBody:{col:29,line:33},endBody:{col:1,line:91}}}}},title:"Components/TabbedNav",component:i},c=e(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),T=e(({title:n,content:t})=>r(l,{padding:"4",color:"textBody",children:[o(s,{as:"h3",variant:"large",children:n}),o(s,{as:"p",children:t})]}),"DemoContent"),f=e(({...n})=>{const[t,a]=d.exports.useState({title:"",content:"Click tab to change"});return r(l,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[o(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(a({title:"Wallet Content",content:"body content"}),!0)},{label:"Another Tab",value:"another",onClick:()=>(a({title:"Some Content Title",content:"some body content"}),!0)},{label:r(l,{gap:"1",children:["History",o(b,{info:"3"})]}),LeftIcon:p,value:"history",onClick:async()=>(console.log("processing..."),await c(1),a({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await c(1),!1)}],marginBottom:"6",...n}),o(T,{...t})]})},"StoryTemplate"),g=f.bind({});g.args={activeTab:"wallet",size:"sm"};const W=["Demo"];export{g as Demo,W as __namedExportsOrder,P as default};
//# sourceMappingURL=TabbedNav.stories.2965d56e.js.map
