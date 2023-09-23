import {DefaultHeader} from '@/components/Header';
import BaseLayout from '@/components/Layout';
import Image from 'next/image';
import * as S from './Login.style';
import {LoginContainer} from '@/containers/LoginContainer';
import Container from '@/components/Container';

const leftSide = (
  <S.GoBackButton>
    <Image
      src={'/images/home/iconamoon_arrow-up-2.svg'}
      width={24}
      height={24}
      alt={'go back'}
    />
  </S.GoBackButton>
);
const rightSide = (
  <S.CancelButton>
    <Image
      src={'/images/login/x.svg'}
      width={24}
      height={24}
      alt={'cancel button'}
    />
  </S.CancelButton>
);
const header = (
  <DefaultHeader
    headText="로그인"
    isHeadShown
    leftSide={leftSide}
    rightSide={rightSide}
  />
);
const footer = (
  <S.FooterLinks>
    <S.HomeLink href="/login">
      <Image
        src={'/images/login/ant-design_home-filled.svg'}
        width={28}
        height={28}
        alt={'home link'}
      />
      홈
    </S.HomeLink>
    <S.FeedLink href="/login">
      <Image
        src={'/images/login/material-symbols_feed.svg'}
        width={28}
        height={28}
        alt={'feed link'}
      />
      피드
    </S.FeedLink>
    <S.MyPageLink href="/login">
      <Image
        src={'/images/login/fluent_person-32-filled.svg'}
        width={28}
        height={28}
        alt={'my page link'}
      />
      마이페이지
    </S.MyPageLink>
    <S.CategoryLink href="/login">
      <Image
        src={'/images/login/charm_menu-hamburger.svg'}
        width={28}
        height={28}
        alt={'category link'}
      />
      카테고리
    </S.CategoryLink>
  </S.FooterLinks>
);

const Login = () => {
  return (
    <BaseLayout headerSide={header} isNavShown={false} footerSide={footer}>
      <Container>
        <LoginContainer />
      </Container>
    </BaseLayout>
  );
};

export default Login;
