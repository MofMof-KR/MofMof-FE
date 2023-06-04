import styled from 'styled-components';
import {media} from '@/styles/theme/mediaQueries';
export const CardListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin: 0 ${(props) => props.theme.spacing.base};
  padding: 0;
  li {
    list-style: none;
  }
  ${media('md')} {
    gap: 50px;
  }
  ${media('sm')} {
    gap: ${(props) => props.theme.spacing.xl};
  }
  ${media('xs')} {
    gap: ${(props) => props.theme.spacing.sm};
  }
`;

export const CardWrapper = styled.div`
  /* width: 170px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
    transition-duration: 0.5s;
  }
`;

export const CardTextTitle = styled.p`
  margin-top: ${(props) => props.theme.spacing.base};
  font-size: ${(props) => props.theme.text.md};
  font-weight: 600;
  width: auto;
  ${media('md')} {
    font-size: ${(props) => props.theme.text.sm};
  }
  ${media('sm')} {
    font-size: ${(props) => props.theme.text.xs};
    width: 50px;
    text-align: center;
    margin: 5px auto;
  }
`;
