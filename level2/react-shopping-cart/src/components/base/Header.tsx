import styled from '@emotion/styled';

import CartLogoSVG from '../vectors/CartLogoSVG';

interface HeaderProps {
  onNavigate: (to: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo onClick={() => onNavigate('/')}>
          <CartLogoSVG />
          <span>SHOP</span>
        </Logo>
        <CartButton onClick={() => onNavigate('/cart')}>
          <CartButtonText>장바구니</CartButtonText>
          <CartCountBadge>3</CartCountBadge>
        </CartButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
`;

const HeaderWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  svg {
    width: 45px;
    height: 45px;
  }
  span {
    font-size: 40px;
    font-weight: 900;
  }
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  height: 32px;
`;

export const CartButtonText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`;

export const CartCountBadge = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #04c09e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export default Header;
