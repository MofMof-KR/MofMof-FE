import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import Image from 'next/image';

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const Li = styled.li`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 30%;
  max-width: 15rem;
  gap: 0.25rem;
`;

export const MofButton = styled(motion.button)<{$picked: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  width: 5rem;
  height: 5rem;
  ${(props) =>
    props.$picked &&
    css`
      border-radius: 50%;
      border: 3px solid var(--primary-color);
      &:after {
        content: '';
        width: 2.625rem;
        height: 2.625rem;
        position: absolute;
        background: url('/images/login/preferedCheck.svg') no-repeat center
          center / cover;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;

export const MofImage = styled(Image)<{$picked: boolean}>`
  ${(props) =>
    props.$picked &&
    css`
      border-radius: 50%;
      border: 3px solid var(--primary-color);
    `}
`;

export const Name = styled.span`
  color: var(--gray-7);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`;
