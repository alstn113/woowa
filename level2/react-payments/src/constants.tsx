import { CreditCardCompany } from './types';

export const PAGE_ROUTES = {
  CREDIT_CARD_LIST: '/',
  CREDIT_CARD: {
    CREATE: '/credit-card/create',
    NAMING: '/credit-card/naming',
  },
  NOT_FOUND: '*',
};

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
  BC카드: '#fc4d56',
  신한카드: '#39b7ff',
  카카오뱅크: '#ffe600',
  현대카드: '#1e1e1e',
  우리카드: '#469fff',
  롯데카드: '#fe4d59',
  하나카드: '#45a37e',
  국민카드: '#78732f',
} satisfies Record<CreditCardCompany, string>;
