import styled from '@emotion/styled';

import BaseLayout from '../../components/layouts/BaseLayout/BaseLayout';

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <Container>
        <h1>404 Not Found</h1>
      </Container>
    </BaseLayout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export default NotFoundPage;
