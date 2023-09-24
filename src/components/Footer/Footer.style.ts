import styled from 'styled-components';

export const Footer = styled.footer`
  flex-flow: column nowrap;
  align-items: center;
  gap: 1.98rem;
  background: var(--gray-6);
  padding: 1.49rem 1rem;
  color: var(--white);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  padding-bottom: 7rem;
  @media (min-width: 355px) {
    padding-bottom: 8rem;
  }
  @media (min-width: 440px) {
    padding-bottom: 9rem;
  }
  @media (min-width: 576px) {
    padding-bottom: 12rem;
  }
  @media (min-width: 767px) {
    padding-bottom: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.49rem;
`;
