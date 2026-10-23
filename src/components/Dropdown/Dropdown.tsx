import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  color: #333333;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: 100%;
  font-family: sans-serif;
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, disabled, value, onChange }) => {
  return (
    <StyledSelect disabled={disabled} value={value} onChange={onChange}>
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};