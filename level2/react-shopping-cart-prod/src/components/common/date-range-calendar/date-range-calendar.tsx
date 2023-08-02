interface DateRangeCalendarProps {
  selectedDateRange?: [Date, Date];
  onSelectedRangeChange?: (value: [Date, Date]) => void;
}

const DateRangeCalendar = ({
  selectedDateRange,
  onSelectedRangeChange,
}: DateRangeCalendarProps) => {
  return <div>DateRangeCalendar</div>;
};

export default DateRangeCalendar;
