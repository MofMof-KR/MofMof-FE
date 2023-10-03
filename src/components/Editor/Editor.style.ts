import styled, {css} from 'styled-components';
import {Button} from '@/components/Button';

const button = css`
  border: none;
  background: transparent;
  cursor: pointer;
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

export const GoBackButton = styled(Button)`
  ${button}
  transform: rotate(180deg);
`;

export const EnrollButton = styled(Button)`
  ${button}
  padding: 0.25rem 0.625rem;
  align-items: center;
  border-radius: 0.5rem;
  background: var(--primary-color);
  color: var(--white);
  line-height: 1.5rem;
`;
