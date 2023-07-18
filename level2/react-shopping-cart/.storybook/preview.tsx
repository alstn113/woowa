import type { Preview } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/styles/GlobalStyle';

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
      <RecoilRoot>
        <GlobalStyle />
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default preview;
