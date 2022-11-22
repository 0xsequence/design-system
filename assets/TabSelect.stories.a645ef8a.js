var m=Object.defineProperty;var o=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a,j as e}from"./jsx-runtime.df376e78.js";import{B as r}from"./Box.7a12e483.js";import{I as p}from"./InfoBubble.f5304a73.js";import{T as c}from"./Text.ac2ccab9.js";import{D as b,r as u}from"./TransactionIcon.c44d1c1c.js";import{T as i}from"./TabSelect.3cdf2343.js";import"./iframe.8bda80e6.js";/* empty css                             */import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";/* empty css                              */import"./Button.ffc2f1ec.js";const j={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
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
        <Box display="flex" gap="1">
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
`,locationsMap:{"page-demo":{startLoc:{col:29,line:33},endLoc:{col:1,line:83},startBody:{col:29,line:33},endBody:{col:1,line:83}}}}},title:"Components/TabSelect",component:i},s=o(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),g=o(({title:n,content:t})=>a(r,{padding:"4",color:"textBody",children:[e(c,{as:"h3",variant:"large",children:n}),e(c,{as:"p",children:t})]}),"DemoContent"),f=o(({...n})=>{const[t,l]=d.exports.useState({title:"",content:"Click tab to change"});return a(r,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[e(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(l({title:"Wallet Content",content:"body content"}),!0)},{label:a(r,{display:"flex",gap:"1",children:["History",e(p,{info:"3"})]}),LeftIcon:b,value:"history",onClick:async()=>(console.log("processing..."),await s(1),l({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await s(1),!1)}],marginBottom:"6",...n}),e(g,{...t})]})},"StoryTemplate"),y=f.bind({});y.args={activeTab:"wallet",size:"sm"};const M=["PageDemo"];export{y as PageDemo,M as __namedExportsOrder,j as default};
//# sourceMappingURL=TabSelect.stories.a645ef8a.js.map
