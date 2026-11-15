import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  font-family: "Nunito Sans", sans-serif;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : props.backgroundColor || "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  color: #333;
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}
    >
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};
