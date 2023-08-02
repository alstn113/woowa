import { useState } from 'react';

import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react';

import DateCalendar from './date-calendar';

const meta = {
  title: 'components/common/DateCalendar',
  component: DateCalendar,
  tags: ['autodocs'],
} satisfies Meta<typeof DateCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledDateCalendar: Story = {
  render: () => {
    const [dateCalendarState, setDateCalendarState] = useState(new Date());

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>Selected Date: {format(dateCalendarState, 'yyyy-MM-dd')}</div>
        <DateCalendar
          value={dateCalendarState}
          onChange={(date) => setDateCalendarState(date)}
        />
      </div>
    );
  },
};

export const UncontrolledDateCalendar: Story = {
  render: () => {
    return <DateCalendar />;
  },
};
