import { ImgHTMLAttributes } from 'react';

import * as S from './Icon.styles';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  src: string;
  alt: string;
}

const Icon = ({ size = 20, src, alt, ...props }: IconProps) => {
  return (
    <S.Icon src={src} alt={alt} size={size} {...props}>
      Icon
    </S.Icon>
  );
};

export default Icon;
