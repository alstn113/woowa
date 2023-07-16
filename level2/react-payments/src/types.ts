import { CREDIT_CARD_COMPANY } from './constants/creditCard';

export type CreditCardCompany = (typeof CREDIT_CARD_COMPANY)[number];
export type CreditCardNumber = string;
export type CreditCardExpirationDate = [string, string];
export type CreditCardOwnerName = string;
export type CreditCardCVC = string;
export type CreditCardPassword = string;
export type CreditCardName = string;

export interface CreditCard {
  creditCardCompany: CreditCardCompany;
  creditCardNumber: CreditCardNumber;
  creditCardExpirationDate: CreditCardExpirationDate;
  creditCardOwnerName: CreditCardOwnerName;
  creditCardCVC: CreditCardCVC;
  creditCardPassword: CreditCardPassword;
  creditCardName: CreditCardName;
}
