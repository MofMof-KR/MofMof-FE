import React, {ReactElement, useState} from 'react';
import Grid from './Grid';
import Pagination from './Pagination';
import styled from 'styled-components';

interface GridAndPaginationProps {
  cards: ReactElement[];
  perPage: number;
}

function GridAndPagination({cards}: GridAndPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const currentItems = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <GridAndPaginationWrapper>
      <Grid cards={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </GridAndPaginationWrapper>
  );
}

export default GridAndPagination;

const GridAndPaginationWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
