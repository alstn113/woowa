import {
  CreditCardCVC,
  CreditCardExpirationDate,
  CreditCardNumber,
  CreditCardOwnerName,
  CreditCardPassword,
} from '../types';

export const validateCreditCardNumber = (value: CreditCardNumber) => {
  return true;
};

export const validateCreditCardExpirationDate = (
  value: CreditCardExpirationDate,
) => {
  return true;
};

export const validateCreditCardOwnerName = (value: CreditCardOwnerName) => {
  if (!/^[A-Za-z]{1,30}$/.test(value))
    throw new Error('영어로 이루어진 30자 이하의 문자열을 입력해주세요.');

  return true;
};

export const validateCreditCardCVC = (value: CreditCardCVC) => {
  if (!/^[0-9]{3}$/.test(value))
    throw new Error('3자리의 숫자를 입력해주세요.');
};

export const validateCreditCardPassword = (value: CreditCardPassword) => {
  if (!/^[0-9]{2}$/.test(value)) return true;
};
