import type { Meta, StoryObj } from '@storybook/react';

import NumberInput from './NumberInput';

const meta = {
  title: 'components/common/NumberInput',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
