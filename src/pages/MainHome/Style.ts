import styled from 'styled-components';
import {media} from '@/styles/theme/mediaQueries';
export const GeckoCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin: 100px auto;
  ${media('md')} {
    flex-direction: column;
  }
`;
export const GeckoCategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${media('md')} {
    /* flex-direction: row; */
    align-items: center;
  }
`;

export const GeckoCategoryTitle = styled.h2`
  font-weight: 800;
  font-size: 45px;
  width: 150px;
  margin: 0;
  ${media('md')} {
    /* margin-bottom: 10px; */
    width: auto;
  }
  ${media('sm')} {
    font-size: 36px;
  }
`;
export const GeckoCategoryDescription = styled.h3`
  font-weight: 400;
  font-size: ${(props) => props.theme.text.base};
  color: ${(props) => props.theme.colors.gray200};
  line-height: 25px;
  ${media('md')} {
    margin-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

export const GeckoTag = styled.div`
  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  width: auto;
  height: auto;
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.text.sm};
  p {
    margin: 0;
  }
  ${media('md')} {
    display: none;
  }
`;

export const Line = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
  margin: 50px;
`;
