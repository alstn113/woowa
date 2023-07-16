import { CreditCardCompany } from '../types';

export const CREDIT_CARD_COMPANY = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export const CREDIT_CARD_COMPANY_COLOR = {
  BC카드: {
    background: '#fc4d56',
    color: '#fff',
  },
  신한카드: {
    background: '#39b7ff',
    color: '#fff',
  },
  카카오뱅크: {
    background: '#f9e000',
    color: '#000',
  },
  현대카드: {
    background: '#1e1e1e',
    color: '#fff',
  },
  우리카드: {
    background: '#469fff',
    color: '#fff',
  },
  롯데카드: {
    background: '#fe4d59',
    color: '#fff',
  },
  하나카드: {
    background: '#45a37e',
    color: '#fff',
  },
  국민카드: {
    background: '#78732f',
    color: '#fff',
  },
} satisfies Record<
  CreditCardCompany,
  {
    background: string;
    color: string;
  }
>;
