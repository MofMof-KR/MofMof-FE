import Link from 'next/link';
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const Ul = styled.ul<{isOpen: number}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  @media (min-width: 355px) {
    height: 5rem;
  }
  @media (min-width: 440px) {
    height: 6rem;
  }
  @media (min-width: 576px) {
    height: 8rem;
  }
  background: url('/images/nav/archBar.svg') no-repeat 0 10% / 100%;
  bacgkround-color: ${(props) =>
    props.isOpen === 1 ? 'rgba(0, 0, 0, 0.7)' : 'white'};
`;

export const QuickButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  overflow: hidden;
  margin-bottom: 2.25rem;
  @media (min-width: 355px) {
    margin-bottom: 3rem;
  }
  @media (min-width: 440px) {
    margin-bottom: 4rem;
  }
  @media (min-width: 576px) {
    margin-bottom: 5rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const HiddenBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const HiddenUl = styled(motion.ul)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 1rem;
  padding-bottom: 4.25rem;
  @media (min-width: 355px) {
    padding-bottom: 6rem;
    gap: 2rem;
  }
  @media (min-width: 440px) {
    padding-bottom: 7rem;
    gap: 3rem;
  }
  @media (min-width: 576px) {
    padding-bottom: 9rem;
    gap: 4rem;
  }
`;

export const HiddenLi = styled(motion.li)``;

export const HiddenButton = styled(motion.button)<{active: number}>`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: ${(props) => (props.active === 1 ? '1.25rem' : 0)};
  @media (min-width: 355px) {
    margin-bottom: ${(props) => (props.active === 1 ? '2rem' : 0)};
  }
  @media (min-width: 440px) {
    margin-bottom: ${(props) => (props.active === 1 ? '3rem' : 0)};
  }
  @media (min-width: 576px) {
    margin-bottom: ${(props) => (props.active === 1 ? '4rem' : 0)};
  }
`;

export const Li = styled.li<{active: number}>`
  margin-left: ${(props) => (props.active === 1 ? '4rem' : 0)};
`;
