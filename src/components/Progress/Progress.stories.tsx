import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useState } from 'react'

import { Progress, ProgressLabel, ProgressValue } from './Progress.js'

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

/** Matches [shadcn usage](https://ui.shadcn.com/docs/components/base/progress): `<Progress value={33} />`. */
export const Default: Story = {
  args: {
    value: 33,
    className: 'w-[60%]',
  },
}

/** Animates from 13 to 66 after a short delay, like the docs demo. */
export const AnimatedDemo: Story = {
  render: function AnimatedDemoRender() {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
      const timer = setTimeout(() => {
        setProgress(66)
      }, 500)
      return () => {
        clearTimeout(timer)
      }
    }, [])
    return <Progress value={progress} />
  },
}

/** Label and percentage via `ProgressLabel` and `ProgressValue`. */
export const WithLabel: Story = {
  render: args => (
    <Progress {...args}>
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  ),
  args: {
    value: 56,
  },
}

/**
 * Progress driven by a control. The docs use `Slider`; this repo uses a range input
 * for the same interaction.
 */
export const Controlled: Story = {
  render: function ControlledRender() {
    const [value, setValue] = useState(50)
    return (
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Progress value={value} />
        <input
          aria-label="Progress"
          className="w-full accent-primary"
          max={100}
          min={0}
          onChange={event => {
            setValue(Number(event.target.value))
          }}
          step={1}
          type="range"
          value={value}
        />
      </div>
    )
  },
}

/** RTL layout and localized label, following the docs’ RTL example pattern. */
export const Rtl: Story = {
  render: args => (
    <Progress value={args.value} dir="rtl">
      <ProgressLabel>تقدم الرفع</ProgressLabel>
      <ProgressValue>
        {(formatted, value) => (
          <span className="ms-auto">
            {value == null ? formatted : `${Math.round(Number(value))}%`}
          </span>
        )}
      </ProgressValue>
    </Progress>
  ),

  args: {
    value: 56,
  },
}

/** Custom colors via `indicatorClassName` and `trackClassName` props. */
export const CustomColors: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <Progress
        value={75}
        trackClassName="bg-green-50"
        indicatorClassName="bg-green-500"
      />
      <Progress
        value={50}
        trackClassName="bg-blue-50"
        indicatorClassName="bg-blue-500"
      />
      <Progress
        value={25}
        trackClassName="bg-red-50"
        indicatorClassName="bg-red-500"
      />
      <Progress
        value={60}
        trackClassName="bg-purple-50"
        indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </div>
  ),
}

/** Different sizes via `trackClassName` prop. */
export const CustomSizes: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-6">
      <Progress size="xs" value={60} />
      <Progress size="sm" value={60} />
      <Progress size="md" value={60} />
      <Progress size="lg" value={60} />
    </div>
  ),
}
