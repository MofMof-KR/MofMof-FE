import {ProgressBar} from '@/components/ProgressBar';
import {ReactNode} from 'react';
import * as S from './SignUpSection.style';
import {useDispatch} from 'react-redux';
import {increaseStep} from '@/store/slices/auth/signupStepSlice';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/rootReducer';
import {SignUpStep} from '@/constants/SignUpStep';
import {useRouter} from 'next/router';

interface signUpSectionProps {
  children: ReactNode;
  headerText?: string;
  isNeedAddition?: boolean;
  isNeedProgressBar: boolean;
  addtionText?: string;
  completed: number;
  isValidated: boolean;
  finishSignUp?: () => void;
}

export const SignUpSection = ({
  children,
  headerText,
  isNeedAddition,
  isNeedProgressBar,
  addtionText,
  completed,
  isValidated,
  finishSignUp,
}: signUpSectionProps) => {
  const signUpStep = useSelector((state: RootState) => {
    return state.signUpStep;
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const nextStep = () => {
    if (signUpStep === SignUpStep.END) {
      router.push('/');
    }
    dispatch(increaseStep());
  };
  return (
    <S.SignUpSection>
      <S.Header>
        {isNeedProgressBar && (
          <ProgressBar
            bgColor="var(--primary-color)"
            isNeedCompleted={false}
            completed={completed}
          />
        )}
        <S.H2>{headerText}</S.H2>
        {isNeedAddition && <S.Additional>{addtionText}</S.Additional>}
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.ButtonWrapper>
        <S.NextButton
          onClick={signUpStep !== SignUpStep.END ? nextStep : finishSignUp}
          disabled={!isValidated}
        >
          {signUpStep !== SignUpStep.END ? '다음' : '시작하기'}
          {isValidated}
        </S.NextButton>
      </S.ButtonWrapper>
    </S.SignUpSection>
  );
};
