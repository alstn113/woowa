import styled from '@emotion/styled';

import theme from '../../../styles/theme';

export const InputContainer = styled.input<{
  isInvalid: boolean;
  isCenter: boolean;
}>`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border-bottom: 2px solid;
  border-color: ${({ isInvalid }) =>
    isInvalid ? theme.colors.warning : theme.colors.gray};
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'left')};
  outline: none;
  transition: border-color 0.1s ease-in-out;
  font-size: 16px;
  line-height: 1.5;

  &:focus {
    border-color: ${({ isInvalid }) =>
      isInvalid ? theme.colors.warning : theme.colors.primary};
  }

  &::placeholder {
    color: #ccc;
  }

  &:disabled {
    background-color: #ccc;
  }
`;
