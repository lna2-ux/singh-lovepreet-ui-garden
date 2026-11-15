import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
  disabled?: boolean;
  size?: string;
  color?: string;
}>`
  font-family: "Nunito Sans", sans-serif;
  color: ${(props) => (props.disabled ? "#999999" : props.color || "#333333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "large":
        return "18px";
      default:
        return "14px";
    }
  }};
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  size = "medium",
  color,
}) => {
  return (
    <StyledText disabled={disabled} size={size} color={color}>
      {content}
    </StyledText>
  );
};
