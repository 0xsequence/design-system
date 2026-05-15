import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment, useState } from 'react'

import { Spinner } from '../Spinner/Spinner.js'

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxCreateItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from './Combobox.js'

const frameworks = [
  'Next.js',
  'SvelteKit',
  'Nuxt.js',
  'Remix',
  'Astro',
] as const

export default {
  title: 'Forms/Combobox',
} satisfies Meta

type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <Combobox items={[...frameworks]}>
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

const timezones = [
  {
    value: 'Americas',
    items: [
      '(GMT-5) New York',
      '(GMT-8) Los Angeles',
      '(GMT-6) Chicago',
      '(GMT-5) Toronto',
      '(GMT-8) Vancouver',
      '(GMT-3) São Paulo',
    ],
  },
  {
    value: 'Europe',
    items: [
      '(GMT+0) London',
      '(GMT+1) Paris',
      '(GMT+1) Berlin',
      '(GMT+1) Rome',
      '(GMT+1) Madrid',
      '(GMT+1) Amsterdam',
    ],
  },
  {
    value: 'Asia/Pacific',
    items: [
      '(GMT+9) Tokyo',
      '(GMT+8) Shanghai',
      '(GMT+8) Singapore',
      '(GMT+4) Dubai',
      '(GMT+11) Sydney',
      '(GMT+9) Seoul',
    ],
  },
] as const

export const Groups: Story = {
  render: () => (
    <Combobox items={[...timezones]}>
      <ComboboxTrigger className="w-80">
        <ComboboxValue placeholder="Select a timezone" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {group => (
            <ComboboxGroup key={group.value} items={[...group.items]}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {item => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

type FrameworkOption = {
  label: string
  value: string
}

const frameworkOptions: FrameworkOption[] = [
  { label: 'Next.js', value: 'next' },
  { label: 'SvelteKit', value: 'sveltekit' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Remix', value: 'remix' },
  { label: 'Astro', value: 'astro' },
]

export const CustomItems: Story = {
  name: 'Custom items (objects)',
  render: () => (
    <Combobox
      items={frameworkOptions}
      itemToStringValue={(framework: FrameworkOption) => framework.label}
    >
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(framework: FrameworkOption) => (
            <ComboboxItem key={framework.value} value={framework}>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{framework.label}</span>
                <span className="text-xs text-muted">{framework.value}</span>
              </div>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Combobox items={[...frameworks]}>
      <ComboboxTrigger className="w-72" aria-invalid>
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Combobox disabled items={[...frameworks]}>
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

export const AutoHighlight: Story = {
  name: 'Auto highlight',
  render: () => (
    <Combobox autoHighlight items={[...frameworks]}>
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}

function WithCreateStory() {
  const [items, setItems] = useState<string[]>([...frameworks])
  const [inputValue, setInputValue] = useState('')

  return (
    <Combobox
      items={items}
      inputValue={inputValue}
      onInputValueChange={setInputValue}
    >
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
        <ComboboxCreateItem
          value={inputValue}
          onSelect={value => {
            setItems(prev => [...prev, value])
            setInputValue('')
          }}
        />
      </ComboboxContent>
    </Combobox>
  )
}

export const WithCreate: Story = {
  name: 'With create',
  render: () => <WithCreateStory />,
}

function WithAsyncCreateStory() {
  const [items, setItems] = useState<string[]>([...frameworks])
  const [inputValue, setInputValue] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const handleCreate = async (value: string) => {
    if (!value || isCreating) {
      return
    }
    setIsCreating(true)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setItems(prev => [...prev, value])
    setInputValue('')
    setIsCreating(false)
  }

  return (
    <Combobox
      items={items}
      inputValue={inputValue}
      onInputValueChange={value => {
        if (!isCreating) {
          setInputValue(value)
        }
      }}
    >
      <ComboboxTrigger className="w-72">
        <ComboboxValue placeholder="Select a framework" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." disabled={isCreating} />
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
        <ComboboxCreateItem
          value={inputValue}
          onSelect={handleCreate}
          className={
            isCreating
              ? 'pointer-events-none opacity-70 [&>svg:first-child]:hidden'
              : undefined
          }
        >
          {isCreating ? (
            <>
              <Spinner size="sm" />
              Adding {inputValue}...
            </>
          ) : (
            `Add ${inputValue}`
          )}
        </ComboboxCreateItem>
      </ComboboxContent>
    </Combobox>
  )
}

export const WithAsyncCreate: Story = {
  name: 'With async create',
  render: () => <WithAsyncCreateStory />,
}

function ComboboxMultipleStory() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      defaultValue={[frameworks[0]]}
      items={[...frameworks]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {values => (
            <Fragment>
              {(values as string[]).map(value => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add framework" />
            </Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {item => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export const Multiple: Story = {
  name: 'Multiple (chips)',
  render: () => <ComboboxMultipleStory />,
}
