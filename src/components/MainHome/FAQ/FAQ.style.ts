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

export const QuestionWrapper = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 1rem;
  height: 10.18rem;
  overflow: hidden;
`;

export const QuestionTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  color: #000;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.625rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const QuestionContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: var(--gray-7, #444);
  gap: 0.5rem;
  line-height: 1.5rem;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #bebebe;
  flex: 0 0 auto;
`;

export const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
