import React from 'react';
import type { Preview } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastProvider from '../src/components/common/toast/toast-provider';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Story />
          <ToastProvider />
        </RecoilRoot>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
