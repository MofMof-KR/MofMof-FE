import DaumPostCode from 'react-daum-postcode';
import * as S from './DaumPost.style';
import {Address} from 'react-daum-postcode';
import {useDispatch} from 'react-redux';
import {closePortal} from '@/store/slices/portal/portalSlice';

interface DaumPostProps {
  changeAddress: (address: string) => void;
  cancelFocusInput: () => void;
}

export const DaumPost = ({changeAddress, cancelFocusInput}: DaumPostProps) => {
  const dispatch = useDispatch();
  const closeDaumPostCode = () => {
    dispatch(closePortal());
    cancelFocusInput();
  };
  const completed = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      changeAddress(fullAddress);
    }
  };
  return (
    <S.Wrapper>
      <DaumPostCode
        style={{height: '44rem'}}
        onClose={closeDaumPostCode}
        onComplete={completed}
      />
      <S.CloseButton onClick={closePortal}>닫기</S.CloseButton>
    </S.Wrapper>
  );
};
