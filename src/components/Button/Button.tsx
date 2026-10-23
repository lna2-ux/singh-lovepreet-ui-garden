import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.backgroundColor || '#007bff')};
  color: ${(props) => (props.disabled ? '#888888' : '#ffffff')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Button: React.FC<ButtonProps> = ({ label, backgroundColor, disabled, onClick }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};