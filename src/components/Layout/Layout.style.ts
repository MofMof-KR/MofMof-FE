import styled from 'styled-components';

export const BaseLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1 1 auto;
`;

export const NavBottom = styled.div`
  width: 100%;
  height: 9rem;
  background: var(--gray-6);
`;
