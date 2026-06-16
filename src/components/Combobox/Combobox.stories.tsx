import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
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
      <ComboboxInput className="w-72" placeholder="Select a framework" />
      <ComboboxContent>
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

export const WithClear: Story = {
  name: 'With clear',
  render: () => (
    <Combobox defaultValue={frameworks[0]} items={[...frameworks]}>
      <ComboboxInput
        className="w-72"
        placeholder="Select a framework"
        showClear
      />
      <ComboboxContent>
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
      <ComboboxInput className="w-80" placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={[...group.items]}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {item => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < timezones.length - 1 ? <ComboboxSeparator /> : null}
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
      <ComboboxInput className="w-72" placeholder="Select a framework" />
      <ComboboxContent>
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
      <ComboboxInput
        className="w-72"
        placeholder="Select a framework"
        aria-invalid
      />
      <ComboboxContent>
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
    <Combobox items={[...frameworks]}>
      <ComboboxInput
        className="w-72"
        placeholder="Select a framework"
        disabled
      />
      <ComboboxContent>
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
      <ComboboxInput className="w-72" placeholder="Select a framework" />
      <ComboboxContent>
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
