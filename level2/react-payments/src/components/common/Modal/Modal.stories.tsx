import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import useDisclosure from '../../../hooks/useDisclosure';

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
    const { close, isOpen, open } = useDisclosure();

    return (
      <>
        <button onClick={open}>모달 열기</button>
        <Modal isOpen={isOpen} onCancel={close}>
          {args.children}
        </Modal>
      </>
    );
  },
};
