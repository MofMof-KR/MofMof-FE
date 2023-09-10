import styled from 'styled-components';
import Image from 'next/image';

export const Ul = styled.ul`
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 0.375rem;
`;

export const Li = styled.li`
  position: relative;
  border-radius: 0.375rem;
  width: 7.75rem;
  overflow: hidden;
  cursor: pointer;
`;

export const MofImage = styled(Image)`
  border-radius: 0.375rem;
`;

export const WriterImage = styled(Image)`
  position: absolute;
  left: 0.5rem;
  bottom: 4rem;
`;

export const H3 = styled.h3`
  padding: 0.1rem;
  text-overflow: ellipsis;
  whitespace: nowrap;
  line-height: 1.5rem;
`;
