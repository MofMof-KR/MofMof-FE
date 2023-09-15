import {Button} from '@/components/Button';
import Link from 'next/link';
import styled, {css} from 'styled-components';

const button = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const footerButtons = css`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--black);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;

export const CancelButton = styled(Button)`
  ${button}
`;

export const GoBackButton = styled(Button)`
  ${button}
  transform: rotate(180deg);
`;

export const FooterLinks = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 1rem 0;
  border-top: 1px solid var(--gray-3);
`;

export const HomeLink = styled(Link)`
  ${button}
  ${footerButtons}
`;
export const FeedLink = styled(Link)`
  ${button}
  ${footerButtons}
`;
export const MyPageLink = styled(Link)`
  ${button}
  ${footerButtons}
`;
export const CategoryLink = styled(Link)`
  ${button}
  ${footerButtons}
`;
