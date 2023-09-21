import {Button} from '@/components/Button';
import styled from 'styled-components';

export const GoBackButton = styled(Button)`
  background: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const Step = styled.span`
  display: flex;
  width: 11.5rem;
  height: 3.25rem;
  padding: 0.71875rem 1.8125rem 0.71875rem 7.75rem;
  color: var(--gray-6);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;
`;
