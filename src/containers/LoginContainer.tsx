import React from 'react';
import {LoginLogo, LoginSocialButtons, LoginInfo} from '@/components/Login';

export const LoginContainer = () => {
  return (
    <>
      <LoginLogo />
      <LoginInfo
        info={
          '네이버 아이디로 간편하게\n 모프모프 서비스를 이용하실 수 있습니다.'
        }
      />
      <LoginSocialButtons />
      <LoginInfo
        info={
          '로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을\n의미하며, 서비스 이용을 위해 이메일과 이름, 프로필 이미지를\n수집합니다.'
        }
      />
    </>
  );
};
