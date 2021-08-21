import React from 'react';
import Heading from 'components/Heading';
import Container from 'components/Container';
import type { SectionTechProps, TechIcon } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';
import * as S from './styles';

const SectionTech = ({ title, techIcons }: SectionTechProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {techIcons.map(({ title, icon }: TechIcon) => (
            <S.Icon key={title}>
              <S.Icons src={getImageUrl(icon.url)} alt={title} loading="lazy" />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          ))}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
};

export default SectionTech;
