import { SpaceBetween } from '../../styles/shared';
import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  const inputProps = {
    type: 'text',
    isCenter: true,
    required: true,
    minLength: 4,
    maxLength: 4,
    letterSpacing: 'medium',
  } as const;

  return (
    <section>
      <label htmlFor="credit-card-number">카드 번호</label>
      <SpaceBetween gap={1} className="credit-card-number">
        <Input {...inputProps} data-form-id="credit-card-number-0" />
        <Input {...inputProps} data-form-id="credit-card-number-1" />
        <Input
          {...inputProps}
          type="password"
          autoComplete="off"
          data-form-id="credit-card-number-2"
        />
        <Input
          {...inputProps}
          type="password"
          autoComplete="off"
          data-form-id="credit-card-number-3"
        />
      </SpaceBetween>
    </section>
  );
};

export default CreditCardNumberInput;
