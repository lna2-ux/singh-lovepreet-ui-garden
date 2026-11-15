import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ disabled?: boolean; textColor?: string }>`
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "#999999" : props.textColor || "#333333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  textColor,
  htmlFor,
}) => {
  return (
    <StyledLabel disabled={disabled} textColor={textColor} htmlFor={htmlFor}>
      {text}
    </StyledLabel>
  );
};
