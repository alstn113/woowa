import { useState } from 'react';

import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react';

import DateCalendar from './index';

const meta = {
  title: 'components/common/DateCalendar',
  component: DateCalendar,
  tags: ['autodocs'],
} satisfies Meta<typeof DateCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledDateCalendar: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleSelectedDateChange = (newDate: Date) => {
      setSelectedDate(newDate);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>Selected Date: {format(selectedDate, 'yyyy-MM-dd')}</div>
        <DateCalendar
          selectedDate={selectedDate}
          onSelectedDateChange={handleSelectedDateChange}
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
