import Image from 'next/image';
import {HTMLAttributes} from 'react';
import * as S from './RecentTopSearches.style';

interface IPopularityObjs {
  name: string;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  popularityObjs: IPopularityObjs[];
}

export const RecentTopSearches: React.FC<IProps> = ({popularityObjs}) => {
  return (
    <S.Section>
      <S.LinkH2 href={'#'}>
        <h2>📈 최근 인기 검색어</h2>
        <Image
          src={'/images/home/iconamoon_arrow-up-2.svg'}
          width={24}
          height={24}
          alt={'mof calculator'}
        />
      </S.LinkH2>
      <S.PopularityWrapper>
        {popularityObjs.map(({name}) => (
          <S.PopularityCard key={name}>{name}</S.PopularityCard>
        ))}
      </S.PopularityWrapper>
    </S.Section>
  );
};
