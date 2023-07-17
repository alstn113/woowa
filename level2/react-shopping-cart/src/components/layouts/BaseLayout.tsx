import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../base/Header';

const BaseLayout = () => {
  const onNavigate = useNavigate();
  return (
    <>
      <Header onNavigate={onNavigate} />
      <Outlet />
    </>
  );
};

export default BaseLayout;
