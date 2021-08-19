import React from 'react';
import type { LogoProps } from 'types/api';
import * as S from './styles';

const Logo = ({ alternativeText, url }: LogoProps) => {
  return (
    <S.LogoWrapper src={`http://localhost:1337${url}`} alt={alternativeText} />
  );
};

export default Logo;
