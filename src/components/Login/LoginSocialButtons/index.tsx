import * as S from './LoginSocialButtons.style';
import Image from 'next/image';

interface LoginSocialButtonsProps {
  getAuthorizationNaverCode: () => void;
}
export const LoginSocialButtons = ({
  getAuthorizationNaverCode,
}: LoginSocialButtonsProps) => {
  return (
    <S.Container>
      <S.NaverButton
        type="button"
        tabIndex="0"
        role="button"
        onClick={getAuthorizationNaverCode}
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
