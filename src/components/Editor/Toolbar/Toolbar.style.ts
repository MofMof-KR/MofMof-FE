import {Button} from '@/components/Button';
import styled, {css} from 'styled-components';

const button = css`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  padding: 0 1rem;
  height: 3.375rem;
  background: var(--white);
`;

export const StyledToolbar = styled.div`
  padding: 0.69rem 0;
  border: 0 !important;
  height: 100%;
  border-top: 1px solid var(--gray-4) !important;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ImageLabel = styled.label`
  ${button}
`;

export const BoldButton = styled(Button)`
  ${button}
`;

export const QuillButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
`;

export const SaveButton = styled(Button)`
  ${button}
`;
