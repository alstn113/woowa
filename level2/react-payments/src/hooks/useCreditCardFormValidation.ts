import useValidation from './useValidation';
import type {
  CreditCardNumber,
  CreditCardExpirationDate,
  CreditCardCVC,
  CreditCardPassword,
} from '../types';

interface CreditCardFormValidation {
  creditCardNumber: CreditCardNumber;
  creditCardExpirationDate: CreditCardExpirationDate;
  creditCardCVC: CreditCardCVC;
  creditCardPassword: CreditCardPassword;
}

const useCreditCardFormValidation = () => {
  const { validateAllFields, validateField, validationResult } =
    useValidation<CreditCardFormValidation>({
      creditCardNumber: () => {
        return true;
      },
      creditCardExpirationDate: () => {
        return true;
      },
      creditCardCVC: () => {
        return true;
      },
      creditCardPassword: () => {
        return true;
      },
    });

  return {
    validateAllFields,
    validateField,
    validationResult,
  };
};

export default useCreditCardFormValidation;
