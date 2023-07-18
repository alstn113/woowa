import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../base/Header';

const BaseLayout = () => {
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
  padding-top: 80px;
`;

export default BaseLayout;
