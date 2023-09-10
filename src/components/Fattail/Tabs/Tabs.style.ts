import styled, {css} from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;
export const Li = styled.li<{$active?: boolean}>`
  padding: 1.25rem 0 0.5rem 0;
  cursor: pointer;
  font-weight: 600;
  ${(props) =>
    props.$active &&
    css`
      color: var(--primary-color);
      border-bottom: 3px solid var(--primary-color);
    `}
`;
