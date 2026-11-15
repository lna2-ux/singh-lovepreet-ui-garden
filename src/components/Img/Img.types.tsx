import React from "react";

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  disabled?: boolean;
}
