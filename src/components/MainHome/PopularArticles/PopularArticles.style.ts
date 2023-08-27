import Link from 'next/link';
import styled from 'styled-components';

export const Section = styled.section`
  background: var(--white);
  padding: 1.5rem 1rem;
  margin-bottom: 0.62rem;
  position: relative;
  h2 {
    color: var(--black);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625rem;
    padding-bottom: 1.5rem;
  }
`;

export const LinkH2 = styled(Link)`
  display: flex;
  justify-content: space-between;
`;
