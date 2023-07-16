import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Modal from './Modal';

const meta = {
  title: 'components/common/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Modal',
    isOpen: false,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        <Modal isOpen={isOpen} onCancel={() => setIsOpen(false)}>
          {args.children}
        </Modal>
      </>
    );
  },
};
