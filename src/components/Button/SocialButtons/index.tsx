import * as React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
type IProps = React.HTMLAttributes<HTMLDivElement>;
import * as S from './SocialButtons.style';

export const SocialButtons: React.FC<IProps> = ({children, ...restProps}) => {
  const router = useRouter();
  const handleNaverLogin = () => {
    const clientID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const callbackUrl = `http://localhost:3002/oauth`;
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientID}&redirect_uri=${callbackUrl}`;
    router.push(naverAuthUrl);
  };

  const onKeyDown = (e: any) => {
    e.preventDefault();
    if (e.key === 'Enter' || e.key === '') {
      handleNaverLogin();
    }
  };

  return (
    <S.Container {...restProps}>
      {children}
      <S.NaverButton
        type="button"
        tabIndex="0"
        role="button"
        onClick={handleNaverLogin}
        onKeyDown={onKeyDown}
      >
        <Image
          src="/images/login/naver.svg"
          width={20}
          height={20}
          alt="naver logo"
        />
        <S.Span>네이버로 시작하기</S.Span>
      </S.NaverButton>
    </S.Container>
  );
};
