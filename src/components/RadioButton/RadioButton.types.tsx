import React from "react";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  disabled?: boolean;
}
