import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta = {
  title: 'components/common/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    label: '체크박스',
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (checked: boolean) => {
      setIsChecked(checked);
    };

    return (
      <Checkbox
        checked={isChecked}
        label={args.label}
        onChange={handleChange}
      />
    );
  },
};
