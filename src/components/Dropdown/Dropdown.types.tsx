export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}