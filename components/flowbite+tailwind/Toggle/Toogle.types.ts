export interface ToggleProps {
  className?: string;
  isActive?: boolean;
  name?: string;
  disabled?: boolean;
  onToggle: (isActive: boolean) => void;
}
