import type { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './index';

const meta = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'BottomSheet',
  },
  render: () => {
    return (
      <BottomSheet>
        <BottomSheet.Header />
        <BottomSheet.Content />
      </BottomSheet>
    );
  },
};
