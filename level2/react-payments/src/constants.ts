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
