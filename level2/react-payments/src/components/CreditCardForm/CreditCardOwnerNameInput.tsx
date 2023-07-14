import Input from '../common/Input/Input';

const CreditCardOwnerNameInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-owner-name">카드 소유자 이름(선택)</label>
      <Input type="text" id="credit-card-owner-name" />
    </div>
  );
};

export default CreditCardOwnerNameInput;
