import { css } from '@emotion/react';

export const palette = {
  primary: '#ec4a0a',
  lighten: '#f6a88a',
  grey: {
    100: '#ffffff',
    200: '#d0d5dd',
    300: '#667085',
    400: '#344054',
    500: '#000000',
  },
};

export const typography = {
  title: css`
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  `,
  subtitle: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  `,
  body: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
  caption: css`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  `,
};
