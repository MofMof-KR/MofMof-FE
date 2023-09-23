import {
  SignUpAddress,
  SignUpEmail,
  SignUpEnd,
  SignUpNickName,
  SignUpPickMof,
} from '@/components/SignUp';
import {SignUpStep} from '@/constants/SignUpStep';
import {RootState} from '@/store/rootReducer';
import {ChangeEvent, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
  checkNickName,
  initState,
} from '@/store/slices/auth/checkNickNameAvailabilitySlice';
import {UserResponse} from '@/types/login';
import store from '@/store/store';
import {signup} from '@/store/slices/auth/signUpNaver';
import {useRouter} from 'next/router';

const mofObjs = [
  {name: 'fat-tailed', ko: '펫테일'},
  {name: 'crested', ko: '크레스티드'},
  {name: 'leopard', ko: '레오파드'},
  {name: 'gargoyle', ko: '가고일'},
  {name: 'tokay', ko: '토케이'},
  {name: 'leachianus', ko: '리키에너스'},
  {name: 'naphthalene', ko: '납테일'},
  {name: 'bearded-dragon', ko: '비어디드래곤'},
  {name: 'skink', ko: '스킨크'},
];

interface SignUpContainerProps {
  userInfo: UserResponse;
}

const getCompletedPercent = (step: number) =>
  (step / (Object.keys(SignUpStep).length / 2 - 1)) * 100;

const SignUpContainer = ({userInfo}: SignUpContainerProps) => {
  const router = useRouter();
  const dispatch = useDispatch<typeof store.dispatch>();
  const step = useSelector((state: RootState) => {
    return state.signUpStep;
  });
  const {
    value: checkNickNameResult,
    isLoading: isNickNameLoding,
    error: nickNameError,
  } = useSelector((state: RootState) => {
    return state.checkNickNameAvailability;
  });
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [address, setAddress] = useState('');
  const [likeGaeko, setLikeGaeko] = useState('');
  const changeAddress = (address: string) => {
    setAddress(address);
  };
  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const clearEmail = () => {
    setEmail('');
  };
  const clearNickName = () => {
    setNickName('');
    dispatch(initState());
  };
  const clearAddress = () => {
    setAddress('');
  };
  const checkNickNameAvailbility = async () => {
    await dispatch(checkNickName(nickName));
  };
  const changeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    dispatch(initState());
  };
  const pickLikeGaeko = (gaeko: string) => {
    setLikeGaeko(gaeko);
  };
  const {
    value: signUpResult,
    isLoading: isSignUpLoading,
    error: signUpError,
  } = useSelector((state: RootState) => {
    return state.signUpNaver;
  });
  const signUpRequest = {
    ...userInfo,
    address,
    age: '',
    email: email,
    likeGaeko,
    mobile: userInfo.phone,
    nickname: nickName,
  };

  const finishSignUp = async () => {
    await dispatch(signup(signUpRequest));
  };

  //TODO: convert to custom hook
  useEffect(() => {
    if (signUpResult && !signUpError) {
      router.push('/');
    }
  }, [signUpResult]);

  return (
    <>
      {step === SignUpStep.EMAIL && (
        <SignUpEmail
          completed={getCompletedPercent(SignUpStep.EMAIL)}
          email={email}
          changeEmail={changeEmail}
          clearEmail={clearEmail}
        />
      )}
      {step === SignUpStep.NICKNAME && (
        <SignUpNickName
          completed={getCompletedPercent(SignUpStep.NICKNAME)}
          nickName={nickName}
          changeNickName={changeNickName}
          checkNickNameAvailability={checkNickNameAvailbility}
          checkNickNameResult={checkNickNameResult}
          isNickNameLoading={isNickNameLoding}
          nickNameError={nickNameError}
          clearNickName={clearNickName}
        />
      )}
      {step === SignUpStep.ADDRESS && (
        <SignUpAddress
          completed={getCompletedPercent(SignUpStep.ADDRESS)}
          address={address}
          changeAddress={changeAddress}
          clearAddress={clearAddress}
        />
      )}
      {step === SignUpStep.PICKMOF && (
        <SignUpPickMof
          completed={getCompletedPercent(SignUpStep.PICKMOF)}
          mofObjs={mofObjs}
          likeGaeko={likeGaeko}
          pickLikeGaeko={pickLikeGaeko}
        />
      )}
      {step === SignUpStep.END && (
        <SignUpEnd nickName={nickName} finishSignUp={finishSignUp} />
      )}
    </>
  );
};

export default SignUpContainer;
