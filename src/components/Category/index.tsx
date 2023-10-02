import {useBlockScroll} from '@/hooks';
import * as S from './Category.style';
import {DefaultHeader} from '../Header';
import Image from 'next/image';
import BaseLayout from '../Layout';
import {useDispatch} from 'react-redux';
import {toggle} from '@/store/slices/portal/portalSlice';
import {useRouter} from 'next/router';

const tabObjs = [
  {name: 'fattail', ko: '펫테일'},
  {name: 'crested', ko: '크레스티드'},
  {name: 'leopard', ko: '레오파드'},
  {name: 'gargoyle', ko: '가고일'},
  {name: 'tokay', ko: '토케이'},
  {name: 'leachianus', ko: '리키에너스'},
  {name: 'knobtailed', ko: '납테일'},
];

const panelObjs = [
  {name: 'tabler_address-book', ko: '모프피디아'},
  {name: 'tabler_math-x-divide-y-2', ko: '모프계산기'},
  {name: 'tabler_clipboard-text', ko: '자유게시판'},
  {name: 'tabler_zoom-question', ko: 'Q&A 게시판'},
  {name: 'tabler_photo-edit', ko: 'Q&A 게시판'},
  {name: 'tabler_hand-click', ko: '가이드'},
];

const liObjs = [
  {
    href: '/',
    content: '홈',
    src: '/images/login/ant-design_home-filled.svg',
    alt: 'link home',
  },
  {
    href: '/',
    content: '피드',
    src: '/images/login/material-symbols_feed.svg',
    alt: 'link feed',
  },
  {
    href: '/',
    content: '마이페이지',
    src: '/images/login/fluent_person-32-filled.svg',
    alt: 'link my',
  },
  {
    href: '/',
    content: '카테고리',
    src: '/images/login/charm_menu-hamburger.svg',
    alt: 'link menu',
  },
];

export const Category = () => {
  useBlockScroll();
  const dispatch = useDispatch();
  const togglePortal = () => {
    dispatch(toggle());
  };
  const router = useRouter();
  const go2Login = () => {
    togglePortal();
    // TODO: not lgtm :(
    setTimeout(() => {
      router.push('/login');
    }, 300);
  };

  const leftSide = (
    <S.GoBackButton onClick={togglePortal}>
      <Image
        src={'/images/home/iconamoon_arrow-up-2.svg'}
        width={24}
        height={24}
        alt={'go back'}
      />
    </S.GoBackButton>
  );
  const rightSide = (
    <S.StyledButton>
      <Image
        src={'/images/home/nNotifications.svg'}
        width={40}
        height={40}
        alt={'notification'}
      />
    </S.StyledButton>
  );
  const header = (
    <DefaultHeader
      headText="카테고리"
      isHeadShown
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );
  const footer = (
    <S.FooterUl>
      {liObjs.map((item) => (
        <S.FooterLi key={item.content}>
          <S.NavButton>
            <Image src={item.src} width={30} height={30} alt={item.alt} />
            {item.content}
          </S.NavButton>
        </S.FooterLi>
      ))}
    </S.FooterUl>
  );
  return (
    <S.Wrapper>
      <BaseLayout isNavShown={false} headerSide={header} footerSide={footer}>
        <S.MainSection>
          <S.Ul>
            {tabObjs.map(({name, ko}) => (
              <S.Li key={name}>{ko}</S.Li>
            ))}
          </S.Ul>
          <S.Main>
            <S.Login onClick={go2Login}>
              <S.Texts>
                <S.Text>로그인하고 더 많은</S.Text>
                <S.Text2>모프모프 서비스 이용하기</S.Text2>
              </S.Texts>
              <S.LoginImage
                src={'/images/home/iconamoon_arrow-up-2.svg'}
                width={24}
                height={24}
                alt={'go login'}
              />
            </S.Login>
            <S.Panels>
              {panelObjs.map(({name, ko}) => (
                <S.PanelLi key={name}>
                  <S.PanelButton>
                    <Image
                      src={`/images/login/${name}.svg`}
                      width={50}
                      height={50}
                      alt={name}
                    />
                  </S.PanelButton>
                  <S.Ko>{ko}</S.Ko>
                </S.PanelLi>
              ))}
            </S.Panels>
          </S.Main>
        </S.MainSection>
      </BaseLayout>
    </S.Wrapper>
  );
};
