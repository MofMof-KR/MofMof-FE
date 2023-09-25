import styled from 'styled-components';

export const BaseLayout = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

export const Header = styled.header`
  flex: 0 1 auto;
`;

export const Footer = styled.footer`
  flex: 0 1 auto;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
`;

export const NavBottom = styled.div`
  width: 100%;
  height: 9rem;
  background: var(--gray-6);
`;
