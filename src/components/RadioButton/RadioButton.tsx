import React from 'react';
import styled from 'styled-components';
import { RadioProps } from './Radio.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? '#888888' : '#333333')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-family: sans-serif;
`;

const StyledInput = styled.input`
  cursor: inherit;
`;

export const RadioButton: React.FC<RadioProps> = ({ label, name, value, checked, disabled, onChange }) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput 
        type="radio" 
        name={name} 
        value={value} 
        checked={checked} 
        disabled={disabled} 
        onChange={onChange}
      />
      {label}
    </StyledLabel>
  );
};