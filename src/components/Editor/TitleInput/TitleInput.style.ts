import {Input} from '@/components/Input';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const StyledInput = styled(Input)`
  border: 0;
  display: flex;
  height: 3.1875rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--gray-4);
  &::placeholder {
    font-size: 1.25rem;
    line-height: 2.125rem;
    color: var(--gray-5);
  }
`;
