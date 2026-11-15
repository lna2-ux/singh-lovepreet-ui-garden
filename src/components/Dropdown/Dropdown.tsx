import React from "react";
import styled from "styled-components";

// Define the structure for dropdown options
export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

// Define props for the Dropdown component
export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
  placeholder?: string;
  error?: boolean;
}

// Styled Select Element
const StyledSelect = styled.select<{ error?: boolean }>`
  width: 100%;
  max-width: 280px;
  padding: 10px 14px;
  border: 1px solid ${(props) => (props.error ? "#ef4444" : "#cbd5e1")};
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.95rem;
  color: #1e293b;
  outline: none;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${(props) => (props.error ? "#dc2626" : "#94a3b8")};
  }

  &:focus {
    border-color: ${(props) => (props.error ? "#ef4444" : "#2563eb")};
    box-shadow: 0 0 0 3px
      ${(props) => (props.error ? "rgba(239, 68, 68, 0.15)" : "rgba(37, 99, 235, 0.15)")};
  }

  &:disabled {
    background-color: #f1f5f9;
    color: #94a3b8;
    border-color: #e2e8f0;
    cursor: not-allowed;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option...",
  error = false,
  disabled,
  value,
  onChange,
  ...rest
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      error={error}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
