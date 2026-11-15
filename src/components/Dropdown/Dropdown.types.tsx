import React from "react";

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  disabled?: boolean;
  backgroundColor?: string;
  placeholder?: string; // Add this line
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
