import { CREDIT_CARD_COMPANY } from './constants';

export type CreditCardCompany =
  (typeof CREDIT_CARD_COMPANY)[keyof typeof CREDIT_CARD_COMPANY];
