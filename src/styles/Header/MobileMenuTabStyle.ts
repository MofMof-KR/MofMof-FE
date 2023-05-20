import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: fixed;
  height: 100vh;
  border: 1px solid #000;
`;

export const MobileMenuHeader = styled.header`
  /* background-color: orange; */
  height: 30px;
  width: 100%;
  z-index: 100;
  display: flex;
`;

export const MobileMenuHeaderBtn = styled.button`
  background-image: url('/X.svg');
  background-size: 100%;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const MobileMenuContentDiv = styled.div`
  width: 100%;
  height: 20px;
`;

export const MobileMenuUserDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: purple;
`;

export const MobileMenuDropdownDiv = styled.div`
  width: 100%;
  height: 20px;
`;

export const MobileMenuFooterDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: #000;
`;

export const LoginBtn = styled.a`
  font-size: 16px;
  height: 17px;
  color: #ff5500;
  padding: 18px 20px;
  border: 1px solid #ff5500;
  border-radius: 4px;
  line-height: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUpBtn = styled.div`
  background-color: #ff5500;
  color: #fff;
  padding: 0 18px;
  font-size: 16px;
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
