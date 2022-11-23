var m=Object.defineProperty;var e=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a,j as o}from"./jsx-runtime.d03f155c.js";import{B as r}from"./Box.d334d3a6.js";import{I as p}from"./InfoBubble.8d195e59.js";import{T as l}from"./Text.da0cecc5.js";import{N as b,A as u}from"./WarningIcon.fbd3ec56.js";import{T as i}from"./TabSelect.8446470c.js";import"./iframe.8da40db0.js";/* empty css                             */import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./Button.83798c9b.js";const j={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import { useState } from 'react'

import { Box } from '~/components/Box'
import { InfoBubble } from '~/components/InfoBubble'
import { Text } from '~/components/Text'
import { ProfileIcon, TransactionIcon } from '~/icons'

import { TabOption, TabSelect } from './TabSelect'

export default {
  title: 'Components/TabSelect',
  component: TabSelect,
} as ComponentMeta<typeof TabSelect>

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
      <TabSelect tabs={tabs} marginBottom="6" {...args} />

      <DemoContent {...data} />
    </Box>
  )
}

export const PageDemo = StoryTemplate.bind({})
PageDemo.args = {
  activeTab: 'wallet',
  size: 'sm',
}
`,locationsMap:{"page-demo":{startLoc:{col:29,line:33},endLoc:{col:1,line:83},startBody:{col:29,line:33},endBody:{col:1,line:83}}}}},title:"Components/TabSelect",component:i},s=e(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),g=e(({title:n,content:t})=>a(r,{padding:"4",color:"textBody",children:[o(l,{as:"h3",variant:"large",children:n}),o(l,{as:"p",children:t})]}),"DemoContent"),f=e(({...n})=>{const[t,c]=d.exports.useState({title:"",content:"Click tab to change"});return a(r,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[o(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(c({title:"Wallet Content",content:"body content"}),!0)},{label:a(r,{gap:"1",children:["History",o(p,{info:"3"})]}),LeftIcon:b,value:"history",onClick:async()=>(console.log("processing..."),await s(1),c({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await s(1),!1)}],marginBottom:"6",...n}),o(g,{...t})]})},"StoryTemplate"),y=f.bind({});y.args={activeTab:"wallet",size:"sm"};const A=["PageDemo"];export{y as PageDemo,A as __namedExportsOrder,j as default};
//# sourceMappingURL=TabSelect.stories.a8a4dd63.js.map
