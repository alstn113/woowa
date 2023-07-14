import Input from '../common/Input/Input';

const CreditCardExpirationDateInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-expiration-date">만료일</label>
      <Input type="text" id="credit-card-expiration-date" />
    </div>
  );
};

export default CreditCardExpirationDateInput;
