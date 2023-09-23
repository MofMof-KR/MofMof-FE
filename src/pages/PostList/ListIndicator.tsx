import React, {ReactElement} from 'react';
import styled from 'styled-components';

const ListIndicatorWrapper = styled.div`
  display: flex;
  width: 390px;
  padding: 16px 9.5px 16px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-4, #e2e2e2);
  background: var(--white, #fff);
`;

const TotalCountWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  color: #444444;
  overflow: hidden;
  > span {
    display: flex;

    /* Body/Body 1, 16 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

const OrderSelectWrapper = styled.div`
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"%3E%3Cpath d="M10.4997 2.4997L1.49971 2.4997C1.40859 2.49999 1.31928 2.52512 1.24138 2.57239C1.16348 2.61966 1.09994 2.68728 1.05762 2.76798C1.01529 2.84867 0.995771 2.93938 1.00116 3.03034C1.00655 3.1213 1.03665 3.20907 1.08821 3.2842L5.58821 9.7842C5.77471 10.0537 6.22371 10.0537 6.41071 9.7842L10.9107 3.2842C10.9628 3.20923 10.9933 3.12142 10.999 3.0303C11.0047 2.93919 10.9853 2.84826 10.943 2.7674C10.9006 2.68653 10.8369 2.61883 10.7587 2.57163C10.6806 2.52444 10.591 2.49956 10.4997 2.4997Z" fill="%23808080"/%3E%3C/svg%3E')
      no-repeat;
    pointer-events: none;
  }
`;

const OrderSelect = styled.select`
  appearance: none;
  border: none;
  display: flex;
  width: 69px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  color: var(--gray-7, #444);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  > option {
  }
`;

interface GridProps {
  // cards: {title: string; description: string}[];
  cards: ReactElement[];
}

function ListIndicator() {
  return (
    <ListIndicatorWrapper>
      <OrderSelectWrapper>
        <OrderSelect>
          {/* 조회수 순서 */}
          <option value="viewed order">인기순</option>
          <option value="newest order">최신순</option>
        </OrderSelect>
      </OrderSelectWrapper>
      {/* <TotalCountWrapper>
        <span>전체</span>
        <span>1,234</span>
      </TotalCountWrapper> */}
    </ListIndicatorWrapper>
  );
}

export default ListIndicator;
