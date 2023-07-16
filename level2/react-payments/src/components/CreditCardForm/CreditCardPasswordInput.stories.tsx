import type { Meta, StoryObj } from '@storybook/react';

import CreditCardPasswordInput from './CreditCardPasswordInput';

const meta = {
  title: 'components/CreditCardForm/CreditCardPasswordInput',
  component: CreditCardPasswordInput,
} satisfies Meta<typeof CreditCardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
