import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'components/common/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <div style={{ width: '300px' }}>
        <Input {...args} />
        <Input {...args} />
        <Input {...args} />
        <Input {...args} />
      </div>
    );
  },
};
