import type {
  CreditCardCVC,
  CreditCardCompany,
  CreditCardExpirationDate,
  CreditCardName,
  CreditCardNumber,
  CreditCardOwnerName,
  CreditCardPassword,
} from '../../types';
import {
  SET_CREDIT_CARD_COMPANY,
  SET_CREDIT_CARD_NAME,
  SET_CREDIT_CARD_NUMBER,
  SET_CREDIT_CARD_OWNER_NAME,
  SET_CREDIT_CARD_PASSWORD,
  SET_CREDIT_CARD_CVC,
  SET_CREDIT_CARD_EXPIRATION_DATE,
} from '../actions/creditCardActions';

export interface CreditCardFormState {
  creditCardCompany: CreditCardCompany;
  creditCardName: CreditCardName;
  creditCardNumber: CreditCardNumber;
  creditCardExpirationDate: CreditCardExpirationDate;
  creditCardOwnerName: CreditCardOwnerName;
  creditCardCVC: CreditCardCVC;
  creditCardPassword: CreditCardPassword;
}

export type CreditCardFormAction =
  | { type: typeof SET_CREDIT_CARD_COMPANY; payload: CreditCardCompany }
  | { type: typeof SET_CREDIT_CARD_NAME; payload: CreditCardName }
  | { type: typeof SET_CREDIT_CARD_NUMBER; payload: CreditCardNumber }
  | {
      type: typeof SET_CREDIT_CARD_EXPIRATION_DATE;
      payload: CreditCardExpirationDate;
    }
  | { type: typeof SET_CREDIT_CARD_OWNER_NAME; payload: CreditCardOwnerName }
  | { type: typeof SET_CREDIT_CARD_CVC; payload: CreditCardCVC }
  | { type: typeof SET_CREDIT_CARD_PASSWORD; payload: CreditCardPassword };
