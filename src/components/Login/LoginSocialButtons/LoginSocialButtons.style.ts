import {Button} from '@/components/Button';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  padding: 0 1rem;
`;

export const NaverButton = styled(Button)`
  width: 100%;
  border: 0;
  padding: 0.625rem 2rem;
  display: flex;
  cursor: pointer;
  background-color: #03cf5d;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
`;

export const Span = styled.span`
  flex: 1 1 auto;
  font: normal 400 1rem / 1.5rem Pretendard;
  text-align: center;
  color: var(--white);
`;
