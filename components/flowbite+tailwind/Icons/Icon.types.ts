type IconName =
  | 'search'
  | 'arrow-back'
  | 'close'
  | 'delete'
  | 'visibility'
  | 'visibility-off'
  | 'add'
  | 'cloud-up-arrow'
  | 'user';

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
  name: IconName;
}
