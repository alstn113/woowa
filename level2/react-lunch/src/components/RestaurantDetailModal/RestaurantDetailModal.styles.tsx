import styled from '@emotion/styled';

import { palette, typography } from '../../styles/theme';

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 90vh;
  overflow: scroll;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: ${palette.grey[100]};
`;

export const RestaurantDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  gap: 8px;
`;

export const RestaurantCategoryIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: ${palette.lighten};
`;

export const RestaurantInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RestaurantName = styled.h3`
  ${typography.subtitle}
  margin: 0;
`;

export const RestaurantDistance = styled.span`
  ${typography.body}
  color: ${palette.primary}
`;

export const RestaurantDescription = styled.p`
  ${typography.body}
  display: block;
  padding-top: 8px;
  width: 100%;
  word-wrap: break-word;
  height: 100%;
`;

export const RestaurantLink = styled.div`
  margin-top: 8px;
  a {
    ${typography.body}
    text-decoration: none;
    color: ${palette.primary};
  }
`;

export const CancelButton = styled.button`
  ${typography.caption}
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: ${palette.primary};
  color: ${palette.grey[100]};
`;
