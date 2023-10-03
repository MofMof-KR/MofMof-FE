import {SignUpSection} from '@/components/Layout/SignUpSection';
import Image from 'next/image';
import * as S from './SignUpAddress.style';
import Portal from '@/components/Portal';
import {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {openPortal} from '@/store/slices/portal/portalSlice';
import {DaumPost} from '@/components/DaumPostCode';
import {PortalChildren} from '@/constants/PortalChildren';

interface SignUpSectionProps {
  completed: number;
  address: string;
  changeAddress: (address: string) => void;
  clearAddress: () => void;
}
export const SignUpAddress = ({
  completed,
  address,
  changeAddress,
  clearAddress,
}: SignUpSectionProps) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const focusInput = () => {
    setFocused(true);
  };
  const cancelFocusInput = () => {
    setFocused(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (focused) {
      dispatch(openPortal(PortalChildren.DAUM_POST_CODE));
    }
  }, [focused]);
  return (
    <SignUpSection
      headerText={'주소를\n입력해주세요.'}
      isNeedAddition={false}
      completed={completed}
      isValidated={!!address}
      isNeedProgressBar
    >
      <>
        <S.AddressInput
          ref={inputRef}
          onFocus={focusInput}
          placeholder={'지번 또는 도로명 주소'}
          value={address}
          readOnly
        />
        <S.CancelButton onClick={clearAddress}>
          <Image
            src="/images/login/cancel.svg"
            width={24}
            height={24}
            alt={'cancel button'}
          />
        </S.CancelButton>
        <Portal>
          <DaumPost
            changeAddress={changeAddress}
            cancelFocusInput={cancelFocusInput}
          />
        </Portal>
      </>
    </SignUpSection>
  );
};
