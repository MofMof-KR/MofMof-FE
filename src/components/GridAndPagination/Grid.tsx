import React, {ReactElement} from 'react';
import styled from 'styled-components';
import Card from './Card';

const GridWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: column nowrap;
  justify-content: center;
`;

interface GridProps {
  // cards: {title: string; description: string}[];
  cards: ReactElement[];
}

const Grid: React.FC<GridProps> = ({cards}) => {
  return (
    <GridWrapper>
      {/* {cards.map((Elem, index) => Elem)} */}

      {cards.map((Elem, index) => React.cloneElement(Elem, {key: index}))}
    </GridWrapper>
  );
};

export default Grid;
