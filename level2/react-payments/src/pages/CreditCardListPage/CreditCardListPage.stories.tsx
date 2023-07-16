import type { Meta, StoryObj } from '@storybook/react';

import CreditCardListPage from './CreditCardListPage';

const meta = {
  title: 'pages/CreditCardListPage',
  component: CreditCardListPage,
} satisfies Meta<typeof CreditCardListPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
