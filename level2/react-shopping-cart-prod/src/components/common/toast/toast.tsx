import styled from '@emotion/styled';

const Toast = () => {
  return <Container>Toast</Container>;
};

const Container = styled.div`
  pointer-events: auto;
  max-width: 560px;
  min-width: 300px;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: red;
`;

export default Toast;
