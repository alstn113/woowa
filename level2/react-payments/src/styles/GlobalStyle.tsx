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
        html,
        body,
        #root {
          height: 100%;
        }
        input {
          outline: none;
          border: none;
        }
        input:focus {
          outline: none;
        }
        button {
          border: none;
          background: none;
          cursor: pointer;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      `}
    />
  );
};

export default GlobalStyle;
