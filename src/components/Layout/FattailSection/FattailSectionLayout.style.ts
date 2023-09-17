import styled from 'styled-components';
import Link from 'next/link';

export const Section = styled.section`
  background: var(--white);
  padding: 1.5rem 1rem;
  margin-bottom: 0.62rem;
  position: relative;
  h2 {
    color: #000;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625rem;
    padding-bottom: 1.5rem;
  }
`;

export const LinkH2 = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  > p {
    font-size: 0.75rem;
    color: var(--gray-6);
  }
  > h2 {
    font-size: 1.25rem;
  }
`;

export const Etc = styled.div`
  color: var(--primary-color);
  display: flex;
  align-items: center;
`;
