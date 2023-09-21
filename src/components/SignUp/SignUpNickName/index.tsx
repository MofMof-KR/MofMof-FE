import {SignUpSection} from '@/components/Layout/SignUpSection';
import Image from 'next/image';
import * as S from './SignUpNickName.style';
import {ChangeEvent} from 'react';
import {clear} from 'console';

interface SignUpSectionProps {
  completed: number;
  nickName: string;
  changeNickName: (e: ChangeEvent<HTMLInputElement>) => void;
  checkNickNameAvailability: () => void;
  nickNameError: Error | null | unknown;
  isNickNameLoading: boolean;
  checkNickNameResult: string;
  clearNickName: () => void;
}
export const SignUpNickName = ({
  completed,
  nickName,
  changeNickName,
  checkNickNameAvailability,
  checkNickNameResult,
  isNickNameLoading,
  nickNameError,
  clearNickName,
}: SignUpSectionProps) => {
  return (
    <SignUpSection
      headerText={'원하시는 닉네임을\n작성해주세요.'}
      isNeedAddition={false}
      completed={completed}
      isValidated={!!nickName && !!checkNickNameResult && !nickNameError}
    >
      <>
        <S.NickNameInput
          value={nickName}
          onChange={changeNickName}
          placeholder={'닉네임을 입력해주세요.'}
        />
        <S.CancelButton onClick={clearNickName}>
          <Image
            src="/images/login/cancel.svg"
            width={24}
            height={24}
            alt={'cancel button'}
          />
        </S.CancelButton>
        <S.CheckDuplicationButton onClick={checkNickNameAvailability}>
          중복확인
        </S.CheckDuplicationButton>
        {checkNickNameResult && (
          <S.ResponseInfo>{checkNickNameResult}</S.ResponseInfo>
        )}
        {isNickNameLoading && <S.ResponseInfo>검색 중...</S.ResponseInfo>}
        {nickNameError && <S.ResponseInfo>에러가 발생했습니다.</S.ResponseInfo>}
      </>
    </SignUpSection>
  );
};
