import { useState } from 'react';

import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './calendar';

const meta = {
  title: 'components/common/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledCalendar: Story = {
  render: () => {
    const [calendarState, setCalendarState] = useState(new Date());

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>Selected Date: {format(calendarState, 'yyyy-MM-dd')}</div>
        <Calendar
          value={calendarState}
          onChange={(date) => setCalendarState(date)}
        />
      </div>
    );
  },
};

export const UncontrolledCalendar: Story = {
  render: () => {
    return <Calendar />;
  },
};
