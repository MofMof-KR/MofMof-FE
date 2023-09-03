import Image from 'next/image';
import React, {HTMLAttributes} from 'react';
import * as S from './FAQ.style';

interface IQuestionObjs {
  id: number;
  title: string;
  content: string;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  questionObjs: IQuestionObjs;
}

export const FAQ: React.FC<IProps> = ({questionObjs}) => {
  return (
    <S.Section>
      <S.LinkH2 href={'#'}>
        <h2>🧐 자주하는 질문들</h2>
        <Image
          src={'/images/home/iconamoon_arrow-up-2.svg'}
          width={24}
          height={24}
          alt={'mof calculator'}
        />
      </S.LinkH2>
      <S.QuestionWrapper>
        <S.QuestionTitle>
          <Image
            src={'/images/home/question.svg'}
            width={24}
            height={24}
            alt="question image"
          />
          {questionObjs.title}
        </S.QuestionTitle>
        <S.QuestionContent>
          <S.Circle />
          <S.Content>{questionObjs.content}</S.Content>
        </S.QuestionContent>
      </S.QuestionWrapper>
    </S.Section>
  );
};
