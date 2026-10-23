import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const fontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
};

const StyledText = styled.p<{ size?: 'small' | 'medium' | 'large'; color?: string; disabled?: boolean }>`
  font-family: sans-serif;
  font-size: ${(props) => fontSizes[props.size || 'medium']};
  color: ${(props) => (props.disabled ? '#888888' : props.color || '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({ content, size = 'medium', color, disabled }) => {
  return (
    <StyledText size={size} color={color} disabled={disabled}>
      {content}
    </StyledText>
  );
};