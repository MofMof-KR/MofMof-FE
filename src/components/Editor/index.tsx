import BaseLayout from '@/components/Layout';
import {DefaultHeader} from '@/components/Header';
import Image from 'next/image';
import * as S from './Editor.style';
import Container from '@/components/Container';
import EditorContainer from '@/containers/EditorContainer';
import {useBlockScroll} from '@/hooks';
import {useDispatch} from 'react-redux';
import {closePortal} from '@/store/slices/portal/portalSlice';

const Editor = () => {
  useBlockScroll();
  const dispatch = useDispatch();
  const closeEditor = () => {
    dispatch(closePortal());
  };
  const leftSide = (
    <S.GoBackButton onClick={closeEditor}>
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
    <S.Wrapper>
      <BaseLayout headerSide={header} isNavShown={false}>
        <Container>
          <EditorContainer />
        </Container>
      </BaseLayout>
    </S.Wrapper>
  );
};

export {Editor};
export {TitleInput} from './TitleInput';
export {QuillEditor} from './QuillEditor';
export {Toolbar} from './Toolbar';
