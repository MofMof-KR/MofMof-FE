import styled, {css} from 'styled-components';
import {Button} from '../Button';
import Image from 'next/image';

const button = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const GoBackButton = styled(Button)`
  ${button}
  transform: rotate(180deg);
`;

export const StyledButton = styled(Button)`
  ${button}
`;

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--white);
`;

export const MainSection = styled.section`
  width: 100%;
  border-top: 1px solid var(--gray-4);
  border-bottom: 1px solid var(--gray-4);
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

export const Li = styled.li`
  display: flex;
  width: 6.75rem;
  height: 3.75rem;
  padding: 0.5rem 0rem 0.5rem 1rem;
  align-items: center;
  color: var(--gray-6);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  border-left: 0.625rem solid var(--primary-color);
`;

export const Main = styled.article`
  padding: 1.63rem 1.75rem 0 0.75rem;
  width: 100%;
`;

export const Login = styled(Button)`
  ${button}
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-color);
  padding: 0.65625rem 0rem 0.65625rem 1.25rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.25rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: start;
  gap: 0.25rem;
`;

export const Text = styled.p`
  color: var(--black);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const Text2 = styled.p`
  color: var(--primary-color);
  font-weight: 600;
  line-height: 1.5rem;
`;

export const LoginImage = styled(Image)`
  ${button}
`;

export const Panels = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const PanelLi = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 30%;
  padding-bottom: 1rem;
`;

export const PanelButton = styled(Button)`
  ${button}
  padding: 0.46875rem;
  border-radius: 0.75rem;
  background: var(--gray-3);
`;

export const Ko = styled.span`
  font-size: 0.625rem;
  line-height: 1rem;
`;

export const FooterUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export const FooterLi = styled.li`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;

export const NavButton = styled(Button)`
  ${button}
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
