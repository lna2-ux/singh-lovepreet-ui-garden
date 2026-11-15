import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  color: ${(props) => (props.disabled ? "#999999" : "#333333")};
  input {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    margin-right: 8px;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <input type="radio" disabled={disabled} {...props} />
      {label}
    </StyledLabel>
  );
};
