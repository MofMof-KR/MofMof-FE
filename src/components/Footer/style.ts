import styled from 'styled-components';
import {media} from '@/styles/theme/mediaQueries';

export const StyledFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0px -35px 50px 15px rgba(194, 195, 214, 0.5);
  background-color: #333333;
  p {
    margin: 5px 10px;
    text-align: center;
    color: white;
    font-weight: 300;
  }
  .bold {
    font-weight: 600;
  }
`;
export const SnsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media('sm')} {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
`;
