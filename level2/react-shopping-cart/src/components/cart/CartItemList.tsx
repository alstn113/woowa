import styled from '@emotion/styled';

const CartItemList = () => {
  return (
    <CartItemListContainer>
      <CartItemCount>배송 상품 ({3}개)</CartItemCount>
    </CartItemListContainer>
  );
};

const CartItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 736px;
`;

const CartItemCount = styled.p`
  font-size: 20px;
  font-weight: 400;
  border-bottom: 4px solid #aaa;
  padding-bottom: 16px;
`;

export default CartItemList;
