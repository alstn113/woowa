import Input from '../common/Input/Input';

const CreditCardNumberInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-number">카드 번호</label>
      <Input type="text" id="credit-card-number" />
    </div>
  );
};

export default CreditCardNumberInput;
