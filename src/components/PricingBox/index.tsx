import React from 'react';
import Button from 'components/Button';
import { gaEvent } from 'utils/ga';
import * as S from './styles';
import type { PricingBoxProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const onClick = () => {
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' });
};

const PricingBox = ({
  totalPrice,
  priceInstallment,
  numberInstallments,
  benefits,
  button,
}: PricingBoxProps) => {
  return (
    <S.Box>
      <S.Prices>
        <S.FullPrice>
          De <span>{totalPrice}</span> por apenas
        </S.FullPrice>
        <S.DiscountPrice>
          <span>{numberInstallments}</span> R${priceInstallment}
        </S.DiscountPrice>
      </S.Prices>
      <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

      <Button href={getImageUrl(button.url)} onClick={onClick} withPrice>
        <p>{button.label}</p>
        <div>
          <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
          <S.ButtonDiscountPrice>
            R${numberInstallments * priceInstallment}
          </S.ButtonDiscountPrice>
        </div>
      </Button>
    </S.Box>
  );
};

export default PricingBox;
