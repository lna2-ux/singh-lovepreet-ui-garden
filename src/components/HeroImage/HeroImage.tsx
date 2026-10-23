import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ bg: string; disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 350px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.disabled ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)')};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #ffffff;
  padding: 20px;
  font-family: sans-serif;
`;

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title, subtitle, disabled }) => {
  return (
    <HeroContainer bg={src} disabled={disabled} aria-label={alt}>
      <Overlay disabled={disabled} />
      <Content>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </Content>
    </HeroContainer>
  );
};