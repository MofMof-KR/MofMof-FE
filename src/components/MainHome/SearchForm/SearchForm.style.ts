import styled from 'styled-components';
import {Button} from '@/components/Button';

export const Section = styled.section`
  background: var(--white);
  padding: 1.5rem 1rem;
  margin-bottom: 0.62rem;
  position: relative;
`;

export const StyledButton = styled(Button)`
  background: transparent;
  border: none;
  cursor: pointer;
`;
