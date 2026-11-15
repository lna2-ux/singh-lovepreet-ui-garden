import styled from "styled-components";

interface CardProps {
  disabled?: boolean;
}

export const Card = styled.div<CardProps>`
  background: ${(props) => (props.disabled ? "#f1f5f9" : "#ffffff")};
  border: 1px solid ${(props) => (props.disabled ? "#cbd5e1" : "#e2e8f0")};
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1.0)};
  box-shadow: ${(props) =>
    props.disabled
      ? "none"
      : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)"};
  transition: all 0.2s ease;

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-3px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "none"
        : "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)"};
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 1.1rem;
    color: ${(props) => (props.disabled ? "#64748b" : "#0f172a")};
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #64748b;
  }
`;
