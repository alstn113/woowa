import * as S from './Header.styles';
import { useGoBack } from '../../../hooks/useGoBack';
import SvgArrowLeft from '../../vectors/SvgArrowLeft';

interface HeaderProps {
  title?: string;
  withBackButton?: boolean;
}

const Header = ({ title, withBackButton }: HeaderProps) => {
  const goBack = useGoBack();

  return (
    <S.HeaderContainer>
      {withBackButton && (
        <S.IconButton onClick={goBack}>
          <SvgArrowLeft width={24} height={24} />
        </S.IconButton>
      )}
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.HeaderContainer>
  );
};

export default Header;
