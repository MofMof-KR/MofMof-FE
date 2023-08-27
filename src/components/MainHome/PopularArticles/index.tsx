import Image from 'next/image';
import {HTMLAttributes} from 'react';
import * as S from './PopularArticles.style';

type IProps = HTMLAttributes<HTMLDivElement>;

export const PopularArticles: React.FC<IProps> = () => {
  return (
    <S.Section>
      <S.LinkH2 href={'#'}>
        <h2>🔥 주간 인기글</h2>
        <Image
          src={'/images/home/iconamoon_arrow-up-2.svg'}
          width={24}
          height={24}
          alt={'mof calculator'}
        />
      </S.LinkH2>
    </S.Section>
  );
};
