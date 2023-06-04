import {
  CardListWrapper,
  CardWrapper,
  CardTextTitle,
} from './GeckoMenuListStyle';
import Image from 'next/image';
import Link from 'next/link';

export const GeckoMenuList = () => {
  return (
    <div>
      <CardListWrapper>
        <li>
          <Link href="/FattailMainHome" legacyBehavior>
            <CardWrapper>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  maxWidth: '157px',
                  maxHeight: '221px',
                }}
              >
                <Image
                  className="responsive"
                  src={'/images/Gecko_page1.png'}
                  alt="펫테일 게코 홈"
                  width={157}
                  height={221}
                  layout="responsive"
                ></Image>
              </div>
              <CardTextTitle>Fat-tail Gecko</CardTextTitle>
            </CardWrapper>
          </Link>
        </li>
        <li>
          <Link href="/CrestedMainHome" legacyBehavior>
            <CardWrapper>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  maxWidth: '157px',
                  maxHeight: '221px',
                }}
              >
                <Image
                  src={'/images/Gecko_page2.png'}
                  alt="크레스티드 게코 홈"
                  width={157}
                  height={221}
                  layout="responsive"
                ></Image>
              </div>
              <CardTextTitle>Crested Gecko</CardTextTitle>
            </CardWrapper>
          </Link>
        </li>
        <li>
          <Link href="/LeopardMainHome" legacyBehavior>
            <CardWrapper>
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  maxWidth: '157px',
                  maxHeight: '221px',
                }}
              >
                <Image
                  src={'/images/Gecko_page3.png'}
                  alt="레오파드 게코 홈"
                  width={160}
                  height={225}
                  layout="responsive"
                ></Image>
              </div>
              <CardTextTitle>Leopard Gecko</CardTextTitle>
            </CardWrapper>
          </Link>
        </li>
      </CardListWrapper>
    </div>
  );
};
