import {A11yHidden} from '@/components/A11yHidden';
import React, {HTMLAttributes, ReactNode} from 'react';
import * as S from './DefaultHeader.style';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  headText: string;
  isHeadShown: boolean;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

export const DefaultHeader: React.FC<IProps> = ({
  headText,
  isHeadShown,
  leftSide,
  rightSide,
}) => {
  return (
    <S.Header>
      <span>{leftSide}</span>
      {isHeadShown && <S.Heading>{headText}</S.Heading>}
      <span>{!isHeadShown && <A11yHidden as="h1">headText</A11yHidden>}</span>
      <span>{rightSide}</span>
    </S.Header>
  );
};
