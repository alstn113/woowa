import styled from '@emotion/styled';

const Toast = () => {
  return <Container>Toast</Container>;
};

const Container = styled.div`
  pointer-events: auto;
  max-width: 400px;
  min-width: 250px;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #3498db;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export default Toast;
