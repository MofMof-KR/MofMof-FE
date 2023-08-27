import React, {HTMLAttributes, useMemo} from 'react';
import Image from 'next/image';
import {useMediaQuery} from '@/hooks';
import {motion, useCycle} from 'framer-motion';
import {useRouter} from 'next/router';
import * as S from './Nav.style';

type IProps = HTMLAttributes<HTMLUListElement>;

const quickLiObjs = [
  {
    href: '/',
    src: '/images/nav/go2calculator.svg',
    alt: 'link to mof-calculator',
  },
  {href: '/', src: '/images/nav/go2write.svg', alt: 'link to writting'},
  {href: '/', src: '/images/nav/go2mofpedia.svg', alt: 'link to mofpedia'},
];

const liObjs = [
  {
    href: '/',
    content: '홈',
    src: '/images/nav/tabler_smart-home.svg',
    alt: 'link home',
  },
  {
    href: '/',
    content: '피드',
    src: '/images/nav/tabler_align-box-left-bottom.svg',
    alt: 'link feed',
  },
  {
    href: '/',
    content: '마이',
    src: '/images/nav/fluent-emoji-high-contrast_lizard.svg',
    alt: 'link my',
  },
  {
    href: '/',
    content: '메뉴',
    src: '/images/nav/charm_menu-hamburger.svg',
    alt: 'link menu',
  },
];

const quickLiVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const buttonVariants = {
  rest: {scale: 1},
  hover: {scale: 1.1},
  pressed: {scale: 0.95},
};

const hiddenBackgroundVariants = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 90%)`,
  }),
  closed: {
    clipPath: 'circle(0% at 50% 90%)',
  },
};

export const Nav: React.FC<IProps> = () => {
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isXsReached = useMediaQuery(355);
  const isSmReached = useMediaQuery(440);
  const isLandScapeMobileReached = useMediaQuery(576);
  const isTabletReached = useMediaQuery(768);
  const calQuickButtonSize = useMemo(
    () => () => {
      let size = 48;
      if (isLandScapeMobileReached) size = 100;
      else if (isSmReached) size = 80;
      else if (isXsReached) size = 60;
      return size;
    },
    [isXsReached, isSmReached, isLandScapeMobileReached, isTabletReached],
  );
  const calLinkButtonSize = useMemo(
    () => () => {
      let size = 24;
      if (isXsReached) size = 32;
      else if (isLandScapeMobileReached) size = 40;
      return size;
    },
    [isXsReached, isLandScapeMobileReached],
  );
  if (isTabletReached) return null;
  return (
    <>
      <motion.div initial={false} animate={isOpen ? 'open' : 'closed'}>
        <S.HiddenBackground
          variants={hiddenBackgroundVariants}
          onClick={() => toggleOpen()}
        >
          <S.HiddenUl>
            {quickLiObjs.map((obj, idx) => (
              <S.HiddenLi
                initial="false"
                animate="animate"
                exit="exit"
                key={obj.alt}
                variants={quickLiVariants}
              >
                <S.HiddenButton
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="pressed"
                  active={quickLiObjs.length >>> 1 === idx ? 1 : 0}
                  onClick={() => {
                    router.push(obj.href);
                  }}
                >
                  <Image
                    src={obj.src}
                    width={calQuickButtonSize()}
                    height={calQuickButtonSize()}
                    alt={obj.alt}
                  />
                </S.HiddenButton>
              </S.HiddenLi>
            ))}
          </S.HiddenUl>
        </S.HiddenBackground>
      </motion.div>
      <S.Ul isOpen={isOpen ? 1 : 0}>
        <S.QuickButton
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
          onClick={() => toggleOpen()}
        >
          <Image
            src={'/images/mofmof3.svg'}
            width={calQuickButtonSize()}
            height={calQuickButtonSize()}
            alt={'qucik navigation button'}
          />
        </S.QuickButton>{' '}
        {liObjs.map((item, idx) => (
          <S.Li key={item.content} active={liObjs.length >>> 1 === idx ? 1 : 0}>
            <S.StyledLink href={item.href}>
              <Image
                src={item.src}
                width={calLinkButtonSize()}
                height={calLinkButtonSize()}
                alt={item.alt}
              />
              {item.content}
            </S.StyledLink>
          </S.Li>
        ))}
      </S.Ul>
    </>
  );
};
