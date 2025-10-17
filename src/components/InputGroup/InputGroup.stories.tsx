import type { Meta, StoryObj } from '@storybook/react-vite'

import SearchIcon from '../../icons/SearchIcon.js'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
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
