import * as M from '@/styles/Header/MobileMenuTabStyle';
import Image from 'next/image';

export const MobileMenuTab = () => {
  return (
    <M.MobileMenuWrapper>
      <M.MobileMenuHeader>
        <M.MobileMenuHeaderBtn>
          <span></span>
          {/* <Image
            src={'/X.svg'}
            alt="메뉴 아이콘"
            width={24}
            height={24}
          ></Image> */}
        </M.MobileMenuHeaderBtn>
      </M.MobileMenuHeader>
      <M.MobileMenuUserDiv>
        <M.LoginBtn>Login</M.LoginBtn>
        <M.SignUpBtn>Sign up</M.SignUpBtn>
      </M.MobileMenuUserDiv>
      <M.MobileMenuDropdownDiv></M.MobileMenuDropdownDiv>
      <M.MobileMenuFooterDiv></M.MobileMenuFooterDiv>
    </M.MobileMenuWrapper>
  );
};
