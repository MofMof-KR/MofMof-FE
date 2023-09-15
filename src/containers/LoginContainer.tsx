import React from 'react';
import {LoginLogo, LoginSocialButtons, LoginInfo} from '@/components/Login';
import {useRouter} from 'next/router';
import {AUTH_URL} from '@/constants/Login';

export const LoginContainer = () => {
  const router = useRouter();
  const getAuthorizationNaverCode = () => {
    const clientID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const callbackUrl = `${process.env.NEXT_PUBLIC_CLIENT_SERVER_BASE_URL}/oauth`;
    const naverAuthUrl = `${AUTH_URL.NAVER}&client_id=${clientID}&redirect_uri=${callbackUrl}`;
    router.push(naverAuthUrl);
  };
  return (
    <>
      <LoginLogo />
      <LoginInfo
        info={
          '네이버 아이디로 간편하게\n 모프모프 서비스를 이용하실 수 있습니다.'
        }
      />
      <LoginSocialButtons
        getAuthorizationNaverCode={getAuthorizationNaverCode}
      />
      <LoginInfo
        info={
          '로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을\n의미하며, 서비스 이용을 위해 이메일과 이름, 프로필 이미지를\n수집합니다.'
        }
      />
    </>
  );
};
