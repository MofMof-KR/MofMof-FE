import Container from '@/components/Container';
import Footer from '@/components/Footer';
import {DefaultHeader} from '@/components/Header';
import BaseLayout from '@/components/Layout';
import * as S from './Fattail.style';
import Image from 'next/image';
import FattailContainer from '@/containers/FattailContainer';
import {useRouter} from 'next/router';

const Fattail = () => {
  const router = useRouter();
  const leftSide = (
    <S.GoBackButton
      onClick={() => {
        router.back();
      }}
    >
      <Image
        src={'/images/home/iconamoon_arrow-up-2.svg'}
        width={24}
        height={24}
        alt={'go back'}
      />
    </S.GoBackButton>
  );
  const header = (
    <DefaultHeader headText="펫테일 게코" isHeadShown leftSide={leftSide} />
  );

  return (
    <BaseLayout headerSide={header} isNavShown footerSide={<Footer />}>
      <Container>
        <FattailContainer />
      </Container>
    </BaseLayout>
  );
};

export default Fattail;
