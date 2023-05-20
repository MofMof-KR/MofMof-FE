import styled from 'styled-components';
import {media} from '../theme';

export const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 30px;
  height: 64px;
  justify-content: space-between;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  /* border-bottom: 1px solid #000; */
`;

export const MainMenuAndUserBoxWrapper = styled.div`
  display: flex;
  flex-grow: 1; // 추가된 코드
  position: relative; /* 추가된 코드 */
`;

export const LogoBox = styled.div`
  display: flex;
  padding-right: 24px;
  height: 50px;
  align-items: center;
  cursor: pointer;
`;

export const LoginBox = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
  /* height: 50px; */
  display: flex;
  align-items: center;
  /* @media (max-width: 1024px) {
    display: none;
  } */
  ${media('lg')} {
    display: none;
  }
`;

export const LoginBtn = styled.a`
  font-size: ${(props) => props.theme.text.base};
  height: 17px;
  color: ${(props) => props.theme.colors.primary};
  padding: 18px 20px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  line-height: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUpBtn = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  padding: 0 18px;
  font-size: ${(props) => props.theme.text.base};
  line-height: 38px;
  border-radius: 4px;
  margin-right: 10px;
  @media (max-width: 1024px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const UserBox = styled.div`
  display: flex;
`;

export const MenuBox = styled.div`
  width: 24px;
  height: 50px;
  display: none;
  @media (max-width: 1023px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const UserBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

//메인 메뉴 박스

export const MainMenuBox = styled.div`
  margin-right: 24px;
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export const MaintToggleIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 60px;
  height: 50px;
  background-image: url('/마우스호버-03.svg');
  background-size: cover;

  &:hover {
    background-image: url('/마우스호버 주황-04.svg');
  }
`;

export const SubToggleCon = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 30px;
`;

export const SubToggleIcon = styled.div`
  /* width: 100px; */
  height: 10px;
  /* position: absolute; */
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10;

  & > img {
    margin-left: 10px; // 아이콘의 왼쪽 여백을 조절합니다.
  }
`;
