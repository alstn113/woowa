import styled from '@emotion/styled';

interface HeaderProps {
  onNavigate: (to: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo onClick={() => onNavigate('/')}>SHOP</Logo>
        <CartButton onClick={() => onNavigate('/cart')}>
          <span>장바구니</span>
          <div>3</div>
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
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
