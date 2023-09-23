import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 30%;
  padding: 16px;
  background: #f0f0f0;
  margin-bottom: 16px;
  border-radius: 8px;
`;

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({title, description}) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;
