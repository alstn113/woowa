import Input from '../common/Input/Input';

const CreditCardPasswordInput = () => {
  return (
    <div>
      <label htmlFor="credit-card-password">카드 비밀번호</label>
      <Input type="password" id="credit-card-password" />
    </div>
  );
};

export default CreditCardPasswordInput;
