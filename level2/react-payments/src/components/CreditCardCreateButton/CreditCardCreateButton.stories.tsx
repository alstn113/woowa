import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCreateButton from './CreditCardCreateButton';

const meta = {
  title: 'components/CreditCardCreateButton',
  component: CreditCardCreateButton,
} satisfies Meta<typeof CreditCardCreateButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
