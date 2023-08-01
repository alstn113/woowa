import createReactContext from '../hooks/use-create-context';

export interface CalendarContextProps {
  now: Date;
}

const [CalendarProvider, useCalendarContext] =
  createReactContext<CalendarContextProps>({
    name: 'CalendarContext',
    errorMessage: 'useCalendarContext must be used within a CalendarProvider',
  });

export { CalendarProvider, useCalendarContext };
