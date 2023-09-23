import {css} from 'styled-components';

export const SignUpInput = css`
  border: 0;
  width: 100%;
  border-bottom: 1px solid var(--gray-5);
  display: flex;
  height: 3rem;
  text-indent: 1rem;
  &::placeholder {
    color: var(--gray-5);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.625rem;
  }
`;

export const SignUpCancelButton = css`
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 1.87rem;
`;
