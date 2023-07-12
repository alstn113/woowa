import {
  CreditCardFormAction,
  CreditCardFormState,
} from '../types/creditCardForm.types';

const creditCardFormReducer = (
  state: CreditCardFormState,
  action: CreditCardFormAction,
): CreditCardFormState => {
  switch (action.type) {
    case 'SET_CREDIT_CARD_COMPANY':
      return {
        ...state,
        creditCardCompany: action.payload,
      };
    case 'SET_CREDIT_CARD_NAME':
      return {
        ...state,
        creditCardName: action.payload,
      };
    case 'SET_CREDIT_CARD_NUMBER':
      return {
        ...state,
        creditCardNumber: action.payload,
      };
    case 'SET_CREDIT_EXPIRATION_DATE':
      return {
        ...state,
        creditExpirationDate: action.payload,
      };
    case 'SET_CREDIT_CARD_OWNER_NAME':
      return {
        ...state,
        creditCardOwnerName: action.payload,
      };
    case 'SET_CREDIT_SECURITY_CODE':
      return {
        ...state,
        creditSecurityCode: action.payload,
      };
    case 'SET_CREDIT_CARD_PASSWORD':
      return {
        ...state,
        creditCardPassword: action.payload,
      };
    default:
      return state;
  }
};

export default creditCardFormReducer;
