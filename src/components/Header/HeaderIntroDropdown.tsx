import * as M from '@/styles/Header/HeaderMainDropStyle';
import Link from 'next/link';
import Image from 'next/image';

export const HeaderIntroDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <>
      <M.MainDropdownWrapper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{position: 'absolute', left: '360px'}}
      >
        <M.DropContentsWrapper>
          <M.ContentTitle>Morph intro</M.ContentTitle>
          <M.ContentWrapper>
            <Link href={'/Fattail'} legacyBehavior>
              <M.ContentLi>
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Fattail Gecko</span>
                <M.IconWrapper>
                  <Image
                    src={'/ArrowCircleRight.svg'}
                    alt="페이지 이동화살표"
                    width={45}
                    height={30}
                  ></Image>
                </M.IconWrapper>
              </M.ContentLi>
            </Link>

            <Link href={'/'} legacyBehavior>
              <M.ContentLi>
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Creasted Gecko</span>
                <M.IconWrapper>
                  <Image
                    src={'/ArrowCircleRight.svg'}
                    alt="페이지 이동화살표"
                    width={45}
                    height={30}
                  ></Image>
                </M.IconWrapper>
              </M.ContentLi>
            </Link>

            <Link href={'/'} legacyBehavior>
              <M.ContentLi>
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Leopard Gecko</span>
                <M.IconWrapper>
                  <Image
                    src={'/ArrowCircleRight.svg'}
                    alt="페이지 이동화살표"
                    width={45}
                    height={30}
                  ></Image>
                </M.IconWrapper>
              </M.ContentLi>
            </Link>
          </M.ContentWrapper>
        </M.DropContentsWrapper>
      </M.MainDropdownWrapper>
    </>
  );
};
