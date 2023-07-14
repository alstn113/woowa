import styled from '@emotion/styled';

import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardOwnerNameInput = () => {
  const { creditCardOwnerName } = useCreditCardFormStates();

  const ownerNameLength = creditCardOwnerName.length;

  return (
    <section>
      <SpaceBetween>
        <label htmlFor="credit-card-owner-name">카드 소유자 이름(선택)</label>
        <span>{ownerNameLength} / 30</span>
      </SpaceBetween>
      <Input
        type="text"
        id="credit-card-owner-name"
        minLength={0}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        data-form-id="credit-card-owner-name"
      />
    </section>
  );
};

export default CreditCardOwnerNameInput;
