import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}>`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: inline-block;
  line-height: 1;
  background-color: ${(props) => {
    if (props.disabled) return "#d3d3d3 !important";
    if (props.backgroundColor) return props.backgroundColor;
    return props.primary ? "#1ea7fd" : "transparent";
  }};
  color: ${(props) => (props.primary && !props.disabled ? "white" : "#333")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  padding: 11px 20px;
  font-size: 14px;
`;

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
