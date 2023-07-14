import Input from '../common/Input/Input';

const CreditCardCVCInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-cvc">보안 코드(CVC/CVV)</label>
      <Input type="text" id="credit-card-cvc" />
    </div>
  );
};

export default CreditCardCVCInput;
