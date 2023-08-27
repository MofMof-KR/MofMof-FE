import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import {motion} from 'framer-motion';

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

export const MofsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 6px 0px 3.5px 0px;
  align-items: center;
  gap: 0.75rem;
`;

export const MofWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.25rem;
  align-items: center;
  color: var(--gray-7);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const MofCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const MofButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
`;

export const ETCImageWrapper = styled.div`
  background: var(--gray-3);
  width: 2.815rem;
  height: 2.815rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EtcImage = styled(Image)`
  transform: rotate(90deg);
`;
