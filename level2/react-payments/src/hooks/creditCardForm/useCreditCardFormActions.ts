import { useContext } from 'react';

import CreditCardFormDispatchContext from '../../state/contexts/creditCardForm/CreditCardFormDispatchContext';

const useCreditCardFormActions = () => {
  const value = useContext(CreditCardFormDispatchContext);
  if (!value)
    throw new Error(
      'useCreditCardFormActions must be used within a CreditCardFormProvider',
    );
  return value;
};

export default useCreditCardFormActions;
