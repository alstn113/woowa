import useValidation from './useValidation';
import type {
  CreditCardNumber,
  CreditCardExpirationDate,
  CreditCardCVC,
  CreditCardPassword,
  CreditCardOwnerName,
} from '../types';
import {
  validateCreditCardCVC,
  validateCreditCardExpirationDate,
  validateCreditCardNumber,
  validateCreditCardOwnerName,
  validateCreditCardPassword,
} from '../validations/creditCardFormValidation';

interface CreditCardFormValidation {
  creditCardNumber: CreditCardNumber;
  creditCardExpirationDate: CreditCardExpirationDate;
  creditCardOwnerName: CreditCardOwnerName;
  creditCardCVC: CreditCardCVC;
  creditCardPassword: CreditCardPassword;
}

const useCreditCardFormValidation = () => {
  const { validateAllFields, validateField, validationResult } =
    useValidation<CreditCardFormValidation>({
      creditCardNumber: validateCreditCardNumber,
      creditCardExpirationDate: validateCreditCardExpirationDate,
      creditCardOwnerName: validateCreditCardOwnerName,
      creditCardCVC: validateCreditCardCVC,
      creditCardPassword: validateCreditCardPassword,
    });

  return {
    validateAllFields,
    validateField,
    validationResult,
  };
};

export default useCreditCardFormValidation;
