import {
  CreditCardFormAction,
  CreditCardFormState,
} from '../types/creditCardForm.types';

const CreditCardFormInitialState: CreditCardFormState = {
  creditCardCompany: '카카오뱅크',
  creditCardNumber: '',
  creditCardExpirationDate: ['', ''],
  creditCardOwnerName: '',
  creditCardCVC: '',
  creditCardPassword: '',
  creditCardName: '',
};

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
    case 'SET_CREDIT_CARD_EXPIRATION_DATE':
      return {
        ...state,
        creditCardExpirationDate: action.payload,
      };
    case 'SET_CREDIT_CARD_OWNER_NAME':
      return {
        ...state,
        creditCardOwnerName: action.payload,
      };
    case 'SET_CREDIT_CARD_CVC':
      return {
        ...state,
        creditCardCVC: action.payload,
      };
    case 'SET_CREDIT_CARD_PASSWORD':
      return {
        ...state,
        creditCardPassword: action.payload,
      };
    case 'RESET':
      return {
        ...CreditCardFormInitialState,
      };
    default:
      return state;
  }
};

export { creditCardFormReducer, CreditCardFormInitialState };
