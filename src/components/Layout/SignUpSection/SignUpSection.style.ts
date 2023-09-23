import {Button} from '@/components/Button';
import styled, {css} from 'styled-components';

const paddingGap = css`
  padding: 0 1rem;
`;

export const SignUpSection = styled.section`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 2.69rem;
`;

export const H2 = styled.h2`
  ${paddingGap}
  padding-top: 2.38rem;
  color: var(--black);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.125rem;
  white-space: pre-wrap;
`;

export const Additional = styled.p`
  ${paddingGap}
  color: var(--gray-5);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.625rem;
`;

export const Main = styled.div`
  ${paddingGap}
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  padding: 3.75rem 1rem;
`;

export const NextButton = styled(Button)<{disabled: boolean}>`
  border: 0;
  width: 100%;
  padding: 0.6875rem 0;
  border-radius: 0.5rem;
  color: var(--white);
  background: var(--primary-color);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.625rem;
  ${({disabled}) => css`
    opacity: ${disabled ? '0.1' : '1'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
`;
