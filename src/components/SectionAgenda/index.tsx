import React from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import type { SectionAgendaProps } from 'types/api';

const SectionAgenda = ({ title, description }: SectionAgendaProps) => {
  return (
    <Container id="agenda">
      <Heading reverseColor>{title}</Heading>
      <S.Text dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
};

export default SectionAgenda;
