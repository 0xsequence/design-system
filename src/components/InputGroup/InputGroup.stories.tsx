import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import SearchIcon from '../../icons/SearchIcon.js'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './InputGroup.js'

export default {
  title: 'Forms/InputGroup',
} as Meta<typeof InputGroupInput>

type Story = StoryObj<typeof InputGroupInput>

export const Default: Story = {
  render: args => {
    return (
      <InputGroup>
        <InputGroupInput placeholder="Enter text..." {...args} />
      </InputGroup>
    )
  },
  args: {
    disabled: false,
    ['aria-invalid']: false,
  },
}

export const SearchInput: Story = {
  render: args => {
    return (
      <InputGroup>
        <InputGroupInput placeholder="Search..." {...args} />
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 items found.</InputGroupAddon>
      </InputGroup>
    )
  },
  args: {
    disabled: false,
  },
}

export const UrlInput: Story = {
  render: args => {
    return (
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="example.com"
          className="!pl-1"
          {...args}
        />
      </InputGroup>
    )
  },
  args: {
    disabled: false,
  },
}

export const WithError: Story = {
  render: args => {
    return (
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="example.com"
          value="invalid value"
          className="!pl-1"
          {...args}
        />
      </InputGroup>
    )
  },
  args: {
    disabled: false,
    ['aria-invalid']: true,
  },
}

export const TextareaInput: StoryObj<typeof InputGroupTextarea> = {
  render: args => {
    const [value, setValue] = useState('')
    return (
      <InputGroup>
        <InputGroupTextarea
          placeholder="Enter text..."
          value={value}
          onChange={e => setValue(e.target.value)}
          {...args}
        />
        <InputGroupAddon align="block-end">
          <InputGroupText>{value.length}/100 characters used</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    )
  },
  args: {
    disabled: false,
    ['aria-invalid']: false,
  },
}
