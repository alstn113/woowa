import { useState } from 'react';

import { format } from 'date-fns';
import type { Meta, StoryObj } from '@storybook/react';

import DateRangeCalendar from './index';

const meta = {
  title: 'components/common/DateRangeCalendar',
  component: DateRangeCalendar,
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangeCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledDateRangeCalendar: Story = {
  render: () => {
    const [selectedDateRange, setSelectedDateRange] = useState<[Date?, Date?]>(
      [],
    );

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {selectedDateRange[0] ? (
          <div>Start Date: {format(selectedDateRange[0], 'yyyy-MM-dd')}</div>
        ) : (
          <div>Start Date: None</div>
        )}
        {selectedDateRange[1] ? (
          <div>End Date: {format(selectedDateRange[1], 'yyyy-MM-dd')}</div>
        ) : (
          <div>End Date: None</div>
        )}
        <DateRangeCalendar
          selectedDateRange={selectedDateRange}
          onSelectedDateRangeChange={setSelectedDateRange}
        />
      </div>
    );
  },
};

export const UncontrolledDateRangeCalendar: Story = {
  render: () => {
    return <DateRangeCalendar />;
  },
};
