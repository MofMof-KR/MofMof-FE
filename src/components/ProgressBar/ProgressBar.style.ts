import styled, {css} from 'styled-components';

export const ProgressBarContainer = styled.div`
  height: 0.5rem;
  background: #ffaa80;
  border-radius: 0.25rem;
  margin: 1rem;
`;

export const Filler = styled.div<{bgcolor: string; completed: number}>`
  height: 0.5rem;
  text-aglin: right;
  border-radius: inherit;
  text-aglin: right;
  ${({bgcolor, completed}) => css`
    background: ${bgcolor};
    width: ${completed}%;
  `}
`;

export const Label = styled.span`
  padding: 0.5rem;
  color: var(--black);
  font-weight: bold;
`;
