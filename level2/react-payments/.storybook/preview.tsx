import type { Preview } from '@storybook/react';
import AppProvider from '../src/AppProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AppProvider>
          <Story />
        </AppProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
