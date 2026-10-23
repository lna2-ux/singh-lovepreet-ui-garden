import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean; color?: string }>`
  font-family: sans-serif;
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled, color }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} color={color}>
      {text}
    </StyledLabel>
  );
};