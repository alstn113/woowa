import { CREDIT_CARD_COMPANY } from './constants';

export type CreditCardCompany = (typeof CREDIT_CARD_COMPANY)[number];
export type CreditCardNumber = string;
export type CreditCardExpirationDate = [string, string];
export type CreditCardOwnerName = string;
export type CreditCardCVC = string;
export type CreditCardPassword = string;
export type CreditCardName = string;
