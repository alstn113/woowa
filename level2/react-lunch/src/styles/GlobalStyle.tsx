import { Global, css } from '@emotion/react';

import resetStyle from './resetStyle';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${resetStyle}
        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyle;
