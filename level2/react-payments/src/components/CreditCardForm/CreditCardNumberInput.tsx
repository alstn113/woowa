import useCreditCardFormActions from '../../hooks/creditCardForm/useCreditCardFormActions';
import useCreditCardFormStates from '../../hooks/creditCardForm/useCreditCardFormStates';
import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  const dispatch = useCreditCardFormActions();
  const { creditCardNumber } = useCreditCardFormStates();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, dataset } = e.target;
    const formId = Number(dataset.formId);

    const newCreditCardNumber = creditCardNumber.map((number, index) => {
      if (index === formId) return value;
      return number;
    });

    dispatch({
      type: 'SET_CREDIT_CARD_NUMBER',
      payload: newCreditCardNumber,
    });
  };

  const inputProps = {
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 4,
    maxLength: 4,
    letterSpacing: 'medium',
    onChange: handleChange,
  } as const;

  const maskingInputProps = {
    ...inputProps,
    type: 'password',
    autoComplete: 'off',
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-number">카드 번호</label>
      <SpaceBetween gap={1} className="credit-card-number">
        <Input {...inputProps} data-form-id="0" />
        <Input {...inputProps} data-form-id="1" />
        <Input {...maskingInputProps} data-form-id="2" />
        <Input {...maskingInputProps} data-form-id="3" />
      </SpaceBetween>
    </section>
  );
};

export default CreditCardNumberInput;
