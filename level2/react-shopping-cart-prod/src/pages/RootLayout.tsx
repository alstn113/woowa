import { Outlet, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Header from '../components/base/Header';

const RootLayout = () => {
  const onNavigate = useNavigate();

  return (
    <>
      <Header onNavigate={onNavigate} />
      <Content>
        <Outlet />
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
