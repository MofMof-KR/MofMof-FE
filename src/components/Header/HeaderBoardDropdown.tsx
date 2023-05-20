import * as M from '@/styles/Header/HeaderMainDropStyle';
import Link from 'next/link';
import Image from 'next/image';
import {DoubleDropdown} from '@/components/Header/DoubleDropdown';
import {useState} from 'react';

export const HeaderBoardDropdown = ({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const [isDoubleDrop, setDoubleDrop] = useState<string | null>(null);

  return (
    <>
      <M.MainDropdownWrapper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{position: 'absolute', left: '490px'}}
      >
        <M.DropContentsWrapper>
          <M.ContentTitle>Board</M.ContentTitle>
          <M.ContentWrapper>
            <Link href={'/Fattail'} legacyBehavior>
              <M.ContentLi
                onMouseEnter={() => setDoubleDrop('fattail')}
                onMouseLeave={() => setDoubleDrop(null)}
              >
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Fattail Geacko</span>
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
            {isDoubleDrop === 'fattail' && (
              <DoubleDropdown
                onMouseEnter={() => setDoubleDrop('fattail')}
                onMouseLeave={() => setDoubleDrop(null)}
              />
            )}

            <Link href={'/'} legacyBehavior>
              <M.ContentLi
                onMouseEnter={() => setDoubleDrop('crested')}
                onMouseLeave={() => setDoubleDrop(null)}
              >
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Creasted Geacko</span>
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
            {isDoubleDrop === 'crested' && (
              <DoubleDropdown
                onMouseEnter={() => setDoubleDrop('crested')}
                onMouseLeave={() => setDoubleDrop(null)}
              />
            )}

            <Link href={'/'} legacyBehavior>
              <M.ContentLi
                onMouseEnter={() => setDoubleDrop('leopard')}
                onMouseLeave={() => setDoubleDrop(null)}
              >
                <Image
                  src={'/마우스호버-03.svg'}
                  alt="헤더 로고"
                  width={70}
                  height={44}
                ></Image>
                <span>Leopard Geacko</span>
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
            {isDoubleDrop === 'leopard' && (
              <DoubleDropdown
                onMouseEnter={() => setDoubleDrop('leopard')}
                onMouseLeave={() => setDoubleDrop(null)}
              />
            )}
          </M.ContentWrapper>
        </M.DropContentsWrapper>
      </M.MainDropdownWrapper>
    </>
  );
};
