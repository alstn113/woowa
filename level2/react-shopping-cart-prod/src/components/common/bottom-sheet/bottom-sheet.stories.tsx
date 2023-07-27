import type { Meta } from '@storybook/react';

import BottomSheet from './index';

const meta = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <BottomSheet>
      <BottomSheet.Header />
      <BottomSheet.Content />
    </BottomSheet>
  );
};
