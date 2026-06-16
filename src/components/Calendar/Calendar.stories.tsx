import type { DateRange } from '@daypicker/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'

import { Button } from '../Button/Button.js'
import { Card, CardContent, CardFooter } from '../Card/Card.js'

import { Calendar, CalendarDayButton } from './Calendar.js'

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta<typeof Calendar>

type Story = StoryObj<typeof Calendar>

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    )
  },
}

export const Basic: Story = {
  render: () => <Calendar mode="single" />,
}

export const Range: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(new Date().getFullYear(), 0, 12),
      to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
    })

    return (
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
      />
    )
  },
}

export const Caption: Story = {
  name: 'Month & Year Selector',
  render: () => <Calendar mode="single" captionLayout="dropdown" />,
}

export const Multiple: Story = {
  render: () => (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  ),
}

export const WithPresets: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(new Date().getFullYear(), 1, 12)
    )
    const [currentMonth, setCurrentMonth] = React.useState<Date>(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    )

    return (
      <Card className="mx-auto w-fit max-w-[300px]">
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            fixedWeeks
            className="p-0 [--cell-size:--spacing(9.5)]"
          />
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t">
          {[
            { label: 'Today', value: 0 },
            { label: 'Tomorrow', value: 1 },
            { label: 'In 3 days', value: 3 },
            { label: 'In a week', value: 7 },
            { label: 'In 2 weeks', value: 14 },
          ].map(preset => (
            <Button
              key={preset.value}
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => {
                const newDate = addDays(new Date(), preset.value)
                setDate(newDate)
                setCurrentMonth(
                  new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                )
              }}
            >
              {preset.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    )
  },
}

export const BookedDates: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(new Date().getFullYear(), 0, 6)
    )
    const bookedDates = Array.from(
      { length: 15 },
      (_, i) => new Date(new Date().getFullYear(), 0, 12 + i)
    )

    return (
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            disabled={bookedDates}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: '[&>button]:line-through opacity-100',
            }}
          />
        </CardContent>
      </Card>
    )
  },
}

export const CustomDays: Story = {
  name: 'Custom Cell Size & Days',
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(new Date().getFullYear(), 11, 8),
      to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
    })

    return (
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            numberOfMonths={1}
            captionLayout="dropdown"
            className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
            formatters={{
              formatMonthDropdown: date => {
                return date.toLocaleString('default', { month: 'long' })
              },
            }}
            components={{
              DayButton: ({ children, modifiers, day, ...props }) => {
                const isWeekend =
                  day.date.getDay() === 0 || day.date.getDay() === 6

                return (
                  <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                    {children}
                    {!modifiers.outside && (
                      <span>{isWeekend ? '$120' : '$100'}</span>
                    )}
                  </CalendarDayButton>
                )
              },
            }}
          />
        </CardContent>
      </Card>
    )
  },
}

export const WeekNumbers: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(new Date().getFullYear(), 0, 12)
    )

    return (
      <Card className="mx-auto w-fit p-0">
        <CardContent className="p-0">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            showWeekNumber
          />
        </CardContent>
      </Card>
    )
  },
}
