import {SignUpSection} from '@/components/Layout/SignUpSection';
import Image from 'next/image';
import * as S from './SignUpEmail.style';
import {ChangeEvent} from 'react';
import {validator} from '@/utils/validator';

interface SignUpSectionProps {
  completed: number;
  email: string;
  changeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  clearEmail: () => void;
}
export const SignUpEmail = ({
  completed,
  email,
  changeEmail,
  clearEmail,
}: SignUpSectionProps) => {
  return (
    <SignUpSection
      headerText={'가입을 축하드려요!\n이메일을 입력해주세요.'}
      isNeedAddition={false}
      completed={completed}
      isValidated={validator.isEmail(email)}
      isNeedProgressBar
    >
      <>
        <S.EmailInput
          value={email}
          onChange={changeEmail}
          placeholder={'mofmof@naver.com'}
        />
        <S.CancelButton onClick={clearEmail}>
          <Image
            src="/images/login/cancel.svg"
            width={24}
            height={24}
            alt={'cancel button'}
          />
        </S.CancelButton>
      </>
    </SignUpSection>
  );
};
