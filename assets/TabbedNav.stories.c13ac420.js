var m=Object.defineProperty;var o=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a as r,j as e}from"./jsx-runtime.62fd101c.js";import{B as b}from"./Badge.8640a3fd.js";import{B as l}from"./Box.4a8275e8.js";import{T as s}from"./Text.ea662e0e.js";/* empty css                             *//* empty css                              */import{N as p,A as u}from"./WarningIcon.89e10e0f.js";import{T as i}from"./TabbedNav.a891f887.js";import"./iframe.e31f7670.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.ccb5b5eb.js";import"./Button.793dd394.js";const P={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import { useState } from 'react'

import { Badge } from '~/components/Badge'
import { Box } from '~/components/Box'
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
          <Badge value="3" />
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
`,locationsMap:{demo:{startLoc:{col:29,line:33},endLoc:{col:1,line:91},startBody:{col:29,line:33},endBody:{col:1,line:91}}}}},title:"Components/TabbedNav",component:i},c=o(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),g=o(({title:n,content:t})=>r(l,{padding:"4",color:"textBody",children:[e(s,{as:"h3",variant:"large",children:n}),e(s,{as:"p",children:t})]}),"DemoContent"),T=o(({...n})=>{const[t,a]=d.exports.useState({title:"",content:"Click tab to change"});return r(l,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[e(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(a({title:"Wallet Content",content:"body content"}),!0)},{label:"Another Tab",value:"another",onClick:()=>(a({title:"Some Content Title",content:"some body content"}),!0)},{label:r(l,{gap:"1",children:["History",e(b,{value:"3"})]}),LeftIcon:p,value:"history",onClick:async()=>(console.log("processing..."),await c(1),a({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await c(1),!1)}],marginBottom:"6",...n}),e(g,{...t})]})},"StoryTemplate"),y=T.bind({});y.args={activeTab:"wallet",size:"sm"};const W=["Demo"];export{y as Demo,W as __namedExportsOrder,P as default};
//# sourceMappingURL=TabbedNav.stories.c13ac420.js.map