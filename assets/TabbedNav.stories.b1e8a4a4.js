var m=Object.defineProperty;var e=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a,j as o}from"./jsx-runtime.77b8b000.js";import{B as r}from"./Box.4f616bff.js";import{I as b}from"./InfoBubble.4b42d04c.js";import{T as c}from"./Text.593fb801.js";import{N as p,A as u}from"./WarningIcon.63454647.js";import{T as i}from"./TabbedNav.3c157468.js";import"./iframe.9dfc9a39.js";/* empty css                             */import"./atoms.css.439e7cbc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./Button.3d20011e.js";const W={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:29,line:33},endLoc:{col:1,line:83},startBody:{col:29,line:33},endBody:{col:1,line:83}}}}},title:"Components/TabbedNav",component:i},l=e(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),f=e(({title:n,content:t})=>a(r,{padding:"4",color:"textBody",children:[o(c,{as:"h3",variant:"large",children:n}),o(c,{as:"p",children:t})]}),"DemoContent"),g=e(({...n})=>{const[t,s]=d.exports.useState({title:"",content:"Click tab to change"});return a(r,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[o(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(s({title:"Wallet Content",content:"body content"}),!0)},{label:a(r,{gap:"1",children:["History",o(b,{info:"3"})]}),LeftIcon:p,value:"history",onClick:async()=>(console.log("processing..."),await l(1),s({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await l(1),!1)}],marginBottom:"6",...n}),o(f,{...t})]})},"StoryTemplate"),y=g.bind({});y.args={activeTab:"wallet",size:"sm"};const j=["Demo"];export{y as Demo,j as __namedExportsOrder,W as default};
//# sourceMappingURL=TabbedNav.stories.b1e8a4a4.js.map
