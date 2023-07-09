import styled from '@emotion/styled';

import { palette, typography } from '../../styles/theme';

export const RestaurantItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

export const RestaurantCategoryIcon = styled.div`
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

  img {
    width: 36px;
    height: 36px;
  }
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
  color: ${palette.primary};
`;

export const RestaurantDescription = styled.p`
  ${typography.body}
  display: -webkit-box;

  padding-top: 8px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
