import {HTMLAttributes} from 'react';
import {StyledFooter, InfoWrapper, SnsWrapper} from './style';
import Image from 'next/image';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Footer: React.FC<IProps> = ({className = '', ...restProps}) => {
  return (
    <StyledFooter className={className} {...restProps}>
      <p className="bold">MofMof Inc.</p>
      <InfoWrapper>
        <p>대표 : 함종석</p>
        <p>사업자 등록번호 : 001-01-00001</p>
      </InfoWrapper>
      <InfoWrapper>
        <p>대표번호 : +82)1-234-5678</p>
        <p>홈페이지 : mofmof.com</p>
      </InfoWrapper>
      <p className="bold">COPYRIGHT ALL RESERVED. 2023 © MofMof-KR</p>
      <SnsWrapper>
        <Link href="https://www.instagram.com/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={'/instagram.svg'}
              alt="인스타그램"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={'/facebook.svg'}
              alt="페이스북"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={'/youtube.svg'} alt="유튜브" width={30} height={30} />
          </a>
        </Link>
      </SnsWrapper>
    </StyledFooter>
  );
};

export default Footer;
