import {useId} from 'react';
import {A11yHidden} from '@/components/A11yHidden';
import * as S from './TitleInput.style';

export const TitleInput = () => {
  const titleId = useId();
  return (
    <S.Wrapper>
      <A11yHidden as="label" htmlFor={titleId}>
        제목
      </A11yHidden>
      <S.StyledInput id={titleId} placeholder="제목을 입력해주세요." />
    </S.Wrapper>
  );
};
