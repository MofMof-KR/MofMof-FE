import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const PaginationItem = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background: #eee;
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastClick = () => {
    if (!isLastPage) {
      onPageChange(totalPages);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationItem onClick={handlePrevClick} disabled={isFirstPage}>
        이전
      </PaginationItem>
      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i} onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </PaginationItem>
      ))}
      <PaginationItem onClick={handleNextClick} disabled={isLastPage}>
        다음
      </PaginationItem>
      <PaginationItem onClick={handleLastClick} disabled={isLastPage}>
        맨 마지막
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;
