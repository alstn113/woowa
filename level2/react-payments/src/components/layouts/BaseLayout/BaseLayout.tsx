import * as S from './BaseLayout.styles';
import Header from '../../base/Header/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  withBackButton?: boolean;
}

const BaseLayout = ({ children, title, withBackButton }: BaseLayoutProps) => {
  return (
    <S.Container>
      <Header title={title} withBackButton={withBackButton} />
      <main>{children}</main>
    </S.Container>
  );
};

export default BaseLayout;
