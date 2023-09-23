import styled from 'styled-components';
import {Button} from '../Button';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: absolute;
  content: '';
  background: var(--white);
  height: 55%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(Button)`
  cursor: pointer;
  border: none;
  padding: 0.75rem;
  background: var(--white);
`;
