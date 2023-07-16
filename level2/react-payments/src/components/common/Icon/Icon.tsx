import { ImgHTMLAttributes } from 'react';

import * as S from './Icon.styles';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  w?: number;
  h?: number;
  src: string;
  alt: string;
}

const Icon = ({ w = 20, h = 20, src, alt, ...props }: IconProps) => {
  return (
    <S.Icon src={src} alt={alt} w={w} h={h} {...props}>
      Icon
    </S.Icon>
  );
};

export default Icon;
