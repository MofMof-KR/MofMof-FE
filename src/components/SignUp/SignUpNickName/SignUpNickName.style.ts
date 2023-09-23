import {Button} from '@/components/Button';
import {Input} from '@/components/Input';
import styled from 'styled-components';
import {SignUpCancelButton, SignUpInput} from '../SignUp.style';

export const NickNameInput = styled(Input)`
  ${SignUpInput}
  position: relative;
  &::after {
    position: absolute;
  }
`;

export const CancelButton = styled(Button)`
  ${SignUpCancelButton}
  right: 7.5625rem;
`;

export const CheckDuplicationButton = styled(Button)`
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1.87rem;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const ResponseInfo = styled.div`
  position: absolute;
  top: 57%;
  left: 2.25rem;
  color: var(--gray-6);
`;
