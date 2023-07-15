import {
  CreditCardCVC,
  CreditCardExpirationDate,
  CreditCardNumber,
  CreditCardOwnerName,
  CreditCardPassword,
} from '../types';

export const validateCreditCardNumber = (value: CreditCardNumber) => {
  if (!/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/.test(value))
    throw new Error('OOOO-OOOO-OOOO-OOOO 형식으로 입력해주세요.');
  return true;
};

export const validateCreditCardExpirationDate = (
  value: CreditCardExpirationDate,
) => {
  const [MM, YY] = value;

  if (!/^0[1-9]|1[0-2]$/.test(MM)) {
    throw new Error('01-12 사이의 월을 입력해주세요.');
  }

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  const YYNumber = parseInt(YY, 10);
  if (
    YYNumber < currentYear ||
    (YYNumber === currentYear && parseInt(MM, 10) < currentMonth)
  ) {
    throw new Error('유효기간은 현재 날짜보다 이후여야 합니다.');
  }

  return true;
};

export const validateCreditCardOwnerName = (value: CreditCardOwnerName) => {
  if (!/^[A-Za-z]{0,30}$/.test(value))
    throw new Error('영어로 이루어진 30자 이하의 문자열을 입력해주세요.');
  return true;
};

export const validateCreditCardCVC = (value: CreditCardCVC) => {
  if (!/^[0-9]{3}$/.test(value))
    throw new Error('3자리의 숫자를 입력해주세요.');
  return true;
};

export const validateCreditCardPassword = (value: CreditCardPassword) => {
  if (!/^[0-9]{2}$/.test(value))
    throw new Error('2자리의 숫자를 입력해주세요.');
  return true;
};
