import type { Meta, StoryObj } from '@storybook/react';

import CreditCardNamingPage from './CreditCardNamingPage';

const meta = {
  title: 'pages/CreditCardNamingPage',
  component: CreditCardNamingPage,
} satisfies Meta<typeof CreditCardNamingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
