import BaseLayout from '@/components/Layout';
import {DefaultHeader} from '@/components/Header';
import Image from 'next/image';
import {useRouter} from 'next/router';
import * as S from './Editor.style';
import Container from '@/components/Container';
import EditorContainer from '@/containers/EditorContainer';

const MainEditor = () => {
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
  const rightSide = <S.EnrollButton>등록</S.EnrollButton>;
  const header = (
    <DefaultHeader
      headText="새 게시물"
      isHeadShown
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );

  return (
    <BaseLayout headerSide={header} isNavShown={false}>
      <Container>
        <EditorContainer />
      </Container>
    </BaseLayout>
  );
};

export default MainEditor;
