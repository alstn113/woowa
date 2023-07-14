import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '../../../styles/theme';

export const InputContainer = styled.input<{
  isInvalid: boolean;
  isCenter: boolean;
  letterSpacing: 'small' | 'medium' | 'large';
}>`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
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

  ${({ letterSpacing }) => {
    switch (letterSpacing) {
      case 'small':
        return css`
          letter-spacing: 1px;
        `;
      case 'medium':
        return css`
          letter-spacing: 5px;
        `;
      case 'large':
        return css`
          letter-spacing: 10px;
        `;
    }
  }}

  &::placeholder {
    color: #ccc;
  }

  &:disabled {
    background-color: #ccc;
  }
`;
