import { BadgePropsTypes } from './Badge.types.ts';
import * as Styles from './Badge.styles.ts';

const Badge = (props: BadgePropsTypes) => {
  const { children, size = 'md', color = 'secondary', className } = props;
  return <Styles.Badge className={`size-${size} color-${color} ${className}`}>{children}</Styles.Badge>;
};

export default Badge;
