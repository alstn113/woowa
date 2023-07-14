import { useContext } from 'react';

import CreditCardFormStateContext from '../../state/contexts/creditCardForm/CreditCardFormStateContext';

const useCreditCardFormStates = () => {
  const value = useContext(CreditCardFormStateContext);
  if (!value)
    throw new Error(
      'useCreditCardFormStates must be used within a CreditCardFormProvider',
    );
  return value;
};

export default useCreditCardFormStates;
