import { useMemo, useReducer } from 'react';

import CreditCardFormDispatchContext from './CreditCardFormDispatchContext';
import CreditCardFormStateContext from './CreditCardFormStateContext';
import creditCardFormReducer from '../../reducers/creditCardFormReducer';
import { CreditCardFormState } from '../../types/creditCardForm.types';

interface CreditCardFormProviderProps {
  children: React.ReactNode;
}

const CreditCardFormProvider = ({ children }: CreditCardFormProviderProps) => {
  const initialState: CreditCardFormState = useMemo(
    () => ({
      creditCardCompany: '카카오뱅크',
      creditCardName: '',
      creditCardNumber: ['', '', '', ''],
      creditCardExpirationDate: ['', ''],
      creditCardOwnerName: '',
      creditCardCVC: '',
      creditCardPassword: ['', ''],
    }),
    [],
  );

  const [state, dispatch] = useReducer(creditCardFormReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <CreditCardFormDispatchContext.Provider value={memoizedDispatch}>
      <CreditCardFormStateContext.Provider value={memoizedState}>
        {children}
      </CreditCardFormStateContext.Provider>
    </CreditCardFormDispatchContext.Provider>
  );
};

export default CreditCardFormProvider;
