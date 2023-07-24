import { Global, css } from '@emotion/react';

import resetStyle from './resetStyle';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${resetStyle}
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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
        button {
          border: none;
          outline: none;
          background: transparent;
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
