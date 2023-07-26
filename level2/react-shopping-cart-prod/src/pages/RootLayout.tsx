import { Outlet, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import ErrorBoundary from '../components/utils/ErrorBoundary';
import Header from '../components/base/Header';

const RootLayout = () => {
  const onNavigate = useNavigate();

  return (
    <>
      <Header onNavigate={onNavigate} />
      <Content>
        <ErrorBoundary catchStatus={[500]} fallback={<div>500 Error</div>}>
          <Outlet />
        </ErrorBoundary>
      </Content>
    </>
  );
};

const Content = styled.main`
  padding: 140px 20px 80px 20px;
  max-width: 1280px;
  margin: 0 auto;
`;

export default RootLayout;
