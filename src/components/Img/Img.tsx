import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImg 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      disabled={disabled} 
    />
  );
};