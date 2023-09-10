import styled from 'styled-components';
import {motion} from 'framer-motion';
import Image from 'next/image';

export const Ul = styled.ul`
  display: flex;
  flex-flow: row rap;
  padding: 1rem 1rem 0 1rem;
  align-items: center;
  gap: 0.85rem;
`;

export const MofButton = styled(motion.button)`
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  width: 8.75rem;
  height: 11.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border-radius: 8px;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: var(--white);
`;

export const ImageWrapper = styled.div`
  height: 8.5rem;
  background: #f6eeeb;
  position: relative;
`;

export const MofInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  padding-left: 1rem;
`;

export const Ko = styled.span`
  color: var(--black);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;
export const Eng = styled.span`
  color: var(--gray-6);
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1rem;
`;

export const HeartIcon = styled(Image)`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
`;
