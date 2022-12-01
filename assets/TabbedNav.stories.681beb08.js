var m=Object.defineProperty;var e=(n,t)=>m(n,"name",{value:t,configurable:!0});import{r as d,a as r,j as o}from"./jsx-runtime.655074f6.js";import{B as b}from"./Badge.321f6193.js";import{B as s}from"./Box.ea923cc5.js";import{T as c}from"./Text.74946eb6.js";import{N as p,A as u}from"./WarningIcon.d487cc82.js";import{T as i}from"./TabbedNav.67680d84.js";import"./iframe.b13b755b.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.b06098ab.js";/* empty css                              */import"./Button.aab49ecb.js";const P={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
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
          <Badge info="3" />
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
`,locationsMap:{demo:{startLoc:{col:29,line:33},endLoc:{col:1,line:91},startBody:{col:29,line:33},endBody:{col:1,line:91}}}}},title:"Components/TabbedNav",component:i},l=e(n=>new Promise(t=>setTimeout(t,n*1e3)),"delay"),g=e(({title:n,content:t})=>r(s,{padding:"4",color:"textBody",children:[o(c,{as:"h3",variant:"large",children:n}),o(c,{as:"p",children:t})]}),"DemoContent"),T=e(({...n})=>{const[t,a]=d.exports.useState({title:"",content:"Click tab to change"});return r(s,{background:"backgroundSecondary",padding:"6",borderRadius:"md",children:[o(i,{tabs:[{label:"Wallet",value:"wallet",onClick:()=>(a({title:"Wallet Content",content:"body content"}),!0)},{label:"Another Tab",value:"another",onClick:()=>(a({title:"Some Content Title",content:"some body content"}),!0)},{label:r(s,{gap:"1",children:["History",o(b,{info:"3"})]}),LeftIcon:p,value:"history",onClick:async()=>(console.log("processing..."),await l(1),a({title:"Async Loaded Content",content:"demo content"}),!0)},{label:"Contacts (Fails to load)",LeftIcon:u,value:"contacts",onClick:async()=>(console.log("expecting fail..."),await l(1),!1)}],marginBottom:"6",...n}),o(g,{...t})]})},"StoryTemplate"),y=T.bind({});y.args={activeTab:"wallet",size:"sm"};const W=["Demo"];export{y as Demo,W as __namedExportsOrder,P as default};
//# sourceMappingURL=TabbedNav.stories.681beb08.js.map
