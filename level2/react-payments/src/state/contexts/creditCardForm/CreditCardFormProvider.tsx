import { useMemo, useReducer } from 'react';

import CreditCardFormDispatchContext from './CreditCardFormDispatchContext';
import CreditCardFormStateContext from './CreditCardFormStateContext';
import {
  CreditCardFormInitialState,
  creditCardFormReducer,
} from '../../reducers/creditCardFormReducer';

interface CreditCardFormProviderProps {
  children: React.ReactNode;
}

const CreditCardFormProvider = ({ children }: CreditCardFormProviderProps) => {
  const [state, dispatch] = useReducer(
    creditCardFormReducer,
    CreditCardFormInitialState,
  );

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
