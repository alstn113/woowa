import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardOwnerNameInput = () => {
  const { creditCardOwnerName } = useCreditCardFormStates();
  const dispatch = useCreditCardFormActions();

  const ownerNameLength = creditCardOwnerName.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch({
      type: 'SET_CREDIT_CARD_OWNER_NAME',
      payload: value,
    });
  };

  return (
    <section>
      <SpaceBetween>
        <label htmlFor="credit-card-owner-name">카드 소유자 이름(선택)</label>
        <span>{ownerNameLength} / 30</span>
      </SpaceBetween>
      <Input
        type="text"
        id="credit-card-owner-name"
        required
        minLength={0}
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleChange}
      />
    </section>
  );
};

export default CreditCardOwnerNameInput;
