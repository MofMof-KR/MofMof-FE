import Image from 'next/image';
import * as S from './AllAboutMof.style';

export const AllAboutMof = () => {
  return (
    <S.Section>
      <h2>모프 서비스</h2>
      <S.LinkWrapper>
        <S.LinkCalculator href="#">
          <Image
            src={'/images/home/mofCalculator.png'}
            width={78}
            height={78}
            alt={'mof calculator'}
          />
          <S.FlexWrapper>
            <p>어떤 모프가 나올지 궁금해!</p>
            <h3>모프계산기 하러 가기</h3>
          </S.FlexWrapper>
          <Image
            src={'/images/home/iconamoon_arrow-up-2.svg'}
            width={24}
            height={24}
            alt={'mof calculator'}
          />
        </S.LinkCalculator>
        <S.LinkCommon href="#">
          <Image
            src={'/images/home/mofPedia.png'}
            width={78}
            height={78}
            alt={'mof pedia'}
          />
          <S.FlexWrapper>
            <p>내 도마뱀 모프는?</p>
            <h3>모프피디아 보러 가기</h3>
          </S.FlexWrapper>
          <Image
            src={'/images/home/iconamoon_arrow-up-2.svg'}
            width={24}
            height={24}
            alt={'mof calculator'}
          />
        </S.LinkCommon>
      </S.LinkWrapper>
    </S.Section>
  );
};
