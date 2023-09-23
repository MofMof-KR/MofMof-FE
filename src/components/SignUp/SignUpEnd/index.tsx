import Image from 'next/image';
import * as S from './SignUpEnd.style';
import {SignUpSection} from '@/components/Layout/SignUpSection';

interface SignUpEndProps {
  nickName: string;
  finishSignUp: () => void;
}

export const SignUpEnd = ({nickName, finishSignUp}: SignUpEndProps) => {
  return (
    <SignUpSection
      isValidated={true}
      completed={100}
      isNeedProgressBar={false}
      finishSignUp={finishSignUp}
    >
      <S.SignUpEndSection>
        <Image
          src="images/login/signupComplete.svg"
          width={300}
          height={300}
          alt={'welcom mof image'}
        />
        <S.Span>{`${nickName}님,\n 환영해요!`}</S.Span>
        <S.P>모프모프에서 다양한 활동을 즐겨보세요!</S.P>
      </S.SignUpEndSection>
    </SignUpSection>
  );
};
