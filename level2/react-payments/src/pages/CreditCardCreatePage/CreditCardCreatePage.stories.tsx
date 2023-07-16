import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCreatePage from './CreditCardCreatePage';

const meta = {
  title: 'pages/CreditCardCreatePage',
  component: CreditCardCreatePage,
} satisfies Meta<typeof CreditCardCreatePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
