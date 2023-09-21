import {Button} from '@/components/Button';
import {Input} from '@/components/Input';
import styled from 'styled-components';
import {SignUpCancelButton, SignUpInput} from '../SignUp.style';

export const AddressInput = styled(Input)`
  ${SignUpInput}
`;

export const CancelButton = styled(Button)`
  ${SignUpCancelButton}
`;
