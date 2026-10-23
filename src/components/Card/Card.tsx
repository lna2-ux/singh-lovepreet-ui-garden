import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#f0f0f0' : props.backgroundColor || '#ffffff')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  border: 1px solid ${(props) => (props.disabled ? '#d0d0d0' : '#cccccc')};
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)}T;
  transition: all 0.3s ease;
`;

export const Card: React.FC<CardProps> = ({ title, description, backgroundColor, disabled }) => {
  return (
    <StyledCard backgroundColor={backgroundColor} disabled={disabled}>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};