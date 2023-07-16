import type { Meta, StoryObj } from '@storybook/react';

import CreditCardCompanyListModal from './CreditCardCompanyListModal';
import useDisclosure from '../../hooks/useDisclosure';
import Modal from '../common/Modal/Modal';

const meta = {
  title: 'components/CreditCardCompanyListModal',
  component: CreditCardCompanyListModal,
} satisfies Meta<typeof CreditCardCompanyListModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <>
        <button onClick={open}>모달 열기</button>
        <Modal isOpen={isOpen} onCancel={close}>
          <CreditCardCompanyListModal />
        </Modal>
      </>
    );
  },
};
