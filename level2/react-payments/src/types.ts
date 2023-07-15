import { CREDIT_CARD_COMPANY } from './constants';

export type CreditCardCompany = (typeof CREDIT_CARD_COMPANY)[number];
export type CreditCardName = string;
export type CreditCardNumber = [string, string, string, string];
export type CreditCardExpirationDate = [number, number];
export type CreditCardOwnerName = string;
export type CreditCardCVC = number;
export type CreditCardPassword = [number, number];
