import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  min-height: 100vh;

  main {
    min-height: 100vh;
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
