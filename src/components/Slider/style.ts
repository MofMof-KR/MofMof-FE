import styled from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.xl};
  height: 50vh;
  .swiper {
    width: 90%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadius.xl};
    &-wrapper,
    &-container {
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.colors.white};
  }
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.colors.white};
  }
  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors.primaryColor};
  }
`;
