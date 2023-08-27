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

export const LinkWrapper = styled.div`
  padding: 0 2rem;
  border-radius: 1rem;
  border: 1px solid var(--gray-4);
  display: flex;
  flex-flow: column nowrap;
`;

export const LinkCommon = styled(Link)`
  padding: 1rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const LinkCalculator = styled(LinkCommon)`
  border-bottom: 1px solid var(--gray-4);
`;

export const FlexWrapper = styled.div`
  flex: 1 1 auto;
  padding-left: 1rem;
  & > h3 {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
  & > p {
    color: var(--gray-6, #808080);
  }
`;
