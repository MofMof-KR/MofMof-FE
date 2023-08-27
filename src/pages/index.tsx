import Container from '@/components/Container';
import {DefaultHeader} from '@/components/Header';
import BaseLayout from '@/components/Layout';
import Logo from '@/components/Logo';
import {MainHomeContainer} from '@/containers/MainHomeContainer';
import Image from 'next/image';
import Footer from '@/components/Footer';
import * as S from './Home.style';

export default function Home() {
  const rightSide = (
    <>
      <S.StyledButton>
        <Image
          src={'/images/home/Chat.svg'}
          width={40}
          height={40}
          alt={'notification'}
        />
      </S.StyledButton>
      <S.StyledButton>
        <Image
          src={'/images/home/nNotifications.svg'}
          width={40}
          height={40}
          alt={'notification'}
        />
      </S.StyledButton>
    </>
  );
  const header = (
    <DefaultHeader
      headText="mofmof"
      isHeadShown={false}
      leftSide={<Logo />}
      rightSide={rightSide}
    />
  );
  return (
    <BaseLayout headerSide={header} isNavShown footerSide={<Footer />}>
      <Container>
        <MainHomeContainer />
      </Container>
    </BaseLayout>
  );
}
