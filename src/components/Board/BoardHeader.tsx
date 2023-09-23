import {useRouter} from 'next/router';
import React, {ReactElement, useState, ComponentProps} from 'react';
import styled from 'styled-components';

interface BoardHeaderProps {
  title: string;
  backButtonHandler?: ComponentProps<'button'>['onClick'];
  extraBtn?: ReactElement<'button'>;
  extraBtnHandler?: ComponentProps<'button'>['onClick'];
}

const BoardHeaderWrapper = styled.div`
  display: flex;
  width: 390px;
  height: 100px;
  padding: 16px 0px;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;

  border-bottom: 1px solid var(--gray-4, #e2e2e2);
  background: var(--white, #fff);
`;

const BoardHeaderContentWrapper = styled.div`
  display: flex;
  display: flex;
  padding: 0px 140px 0px 8px;
  align-items: center;
  gap: 108px;
  width: 100%;
  height: 24px;
`;

const BoardHeaderTitle = styled.div`
  /* overflow: hidden; */
  white-space: nowrap;
  display: flex;
  color: var(--gray-7, #444);

  /* HEADLINE/HEADLINE 6, 24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px; /* 141.667% */
  text-transform: capitalize;
`;

const BackBtn = styled.button`
  padding: unset;
  border: unset;
  background-color: #fff;
  object-fit: cover;
  display: flex;
  align-items: center;
`;

const BackBtnSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 5L8 12L15 19"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function BoardHeader({
  title: title = '펫테일 게코',
  backButtonHandler: backButtonHandler,
}: BoardHeaderProps) {
  const router = useRouter();

  const defaultBackButtonHandler = () => {
    // router.back();
    router.push(`/PostList`);
  };

  return (
    <BoardHeaderWrapper>
      <BoardHeaderContentWrapper>
        <BackBtn onClick={backButtonHandler || defaultBackButtonHandler}>
          <BackBtnSvg></BackBtnSvg>
        </BackBtn>
        <BoardHeaderTitle>{title}</BoardHeaderTitle>
      </BoardHeaderContentWrapper>
    </BoardHeaderWrapper>
  );
}

export default BoardHeader;
