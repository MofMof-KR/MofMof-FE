import {FattailSectionLayout} from '@/components/Layout/FattailSection';
import React, {HTMLAttributes} from 'react';
import * as S from './MofCalculator.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string;
  additionalText: string;
  link: string;
}
export const MofCaculator: React.FC<IProps> = ({
  headerText,
  additionalText,
  link,
}) => {
  return (
    <FattailSectionLayout
      headerText={headerText}
      additionalText={additionalText}
      link={link}
    >
      <S.CalculatorLink href="#">
        <S.H3>모프 계산하러 가기</S.H3>
        <S.CalculatorImage
          src={'/images/home/mofCalculator.png'}
          width={100}
          height={100}
          alt={'mof calculator'}
        />
      </S.CalculatorLink>
    </FattailSectionLayout>
  );
};
