import { CreditCardCompany } from '../../types';
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
  creditCardName: string;
  creditCardNumber: number;
  creditCardExpirationDate: [number, number];
  creditCardOwnerName: string;
  creditCardCVC: number;
  creditCardPassword: string;
}

export type CreditCardFormAction =
  | { type: typeof SET_CREDIT_CARD_COMPANY; payload: CreditCardCompany }
  | { type: typeof SET_CREDIT_CARD_NAME; payload: string }
  | { type: typeof SET_CREDIT_CARD_NUMBER; payload: number }
  | { type: typeof SET_CREDIT_CARD_EXPIRATION_DATE; payload: [number, number] }
  | { type: typeof SET_CREDIT_CARD_OWNER_NAME; payload: string }
  | { type: typeof SET_CREDIT_CARD_CVC; payload: number }
  | { type: typeof SET_CREDIT_CARD_PASSWORD; payload: string };
