import {LocalStorage} from '@/storage/LocalStorage';
import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, authorizationService} from '@/store/rootReducer';
import BaseLayout from '@/components/Layout';
import Container from '@/components/Container';
import {DefaultHeader} from '@/components/Header';
import Image from 'next/image';
import * as S from './OAuth.style';
import SignUpContainer from '@/containers/SignUpContainer';
import {decreaseStep} from '@/store/slices/auth/signupStepSlice';
import {SignUpStep} from '@/constants/SignUpStep';

interface OAuthServerSideProps {
  statusCode: number;
  responseValue: string | any;
}

const OAuth = ({statusCode, responseValue}: OAuthServerSideProps) => {
  const router = useRouter();
  const signUpStep = useSelector((state: RootState) => {
    return state.signUpStep;
  });
  const dispatch = useDispatch();
  const prevStep = () => {
    if (signUpStep === SignUpStep.EMAIL) {
      router.push('/login');
    }
    dispatch(decreaseStep());
  };
  useEffect(() => {
    if (statusCode === 200) {
      const localStorage = new LocalStorage();
      localStorage.save(responseValue);
      router.push('/');
    }
  }, []);
  const leftSide = (
    <S.GoBackButton onClick={prevStep}>
      <Image
        src={'/images/home/iconamoon_arrow-up-2.svg'}
        width={24}
        height={24}
        alt={'go back'}
      />
    </S.GoBackButton>
  );
  const rightSide = <S.Step>{signUpStep}/4</S.Step>;
  const header = (
    <DefaultHeader
      headText="회원가입"
      isHeadShown={false}
      leftSide={leftSide}
      rightSide={rightSide}
    />
  );

  return (
    <BaseLayout
      headerSide={signUpStep !== SignUpStep.END && header}
      isNavShown={false}
    >
      <Container>
        <SignUpContainer />
      </Container>
    </BaseLayout>
  );
};

//TODO:: change to next-redux-wrapper
export const getServerSideProps = async ({query}: any) => {
  const category = query.code;
  const response = await authorizationService.login(category);
  const signInResponse = {
    statusCode: response.status,
    responseValue: response.data?.responseValue,
  };
  return {props: signInResponse};
};

export default OAuth;
