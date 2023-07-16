import { useEffect, useState } from 'react';

import { CreditCard } from '../types';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';

const useCreditCardList = () => {
  const [creditCardList, setCreditCardList] = useState<CreditCard[]>([]);

  useEffect(() => {
    loadCreditCardList();
  }, []);

  const loadCreditCardList = () => {
    setCreditCardList(
      getFromLocalStorage<CreditCard[]>('CREDIT_CARD_LIST') ?? [],
    );
  };

  const addCreditCard = (creditCard: CreditCard) => {
    setToLocalStorage('CREDIT_CARD_LIST', [...creditCardList, creditCard]);
    loadCreditCardList();
  };

  return {
    creditCardList,
    addCreditCard,
  };
};

export default useCreditCardList;
