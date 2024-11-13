import * as Styles from './Button.styles';
import { ButtonPropsTypes } from './Button.types';
import Loader from '@ui/Loader';

const Button = (props: ButtonPropsTypes) => {
  const {
    variant = 'contained',
    color = 'primary',
    size = 'md',
    disabled,
    loading,
    iconLeading,
    iconTrailing,
    className,
    ...rest
  } = props;
  return (
    <Styles.Button isDisabled={disabled} className={`variant-${variant} color-${color} ${className}`} {...rest}>
      {loading && (
        <div className={'loader-overlay'}>
          <Loader className={'loader'} size={'inherit'} />
        </div>
      )}

      <div className={`inner size-${size}`}>
        {iconLeading && <div className={'icon icon-left'}>{iconLeading}</div>}
        {props.children}

        {iconTrailing && <div className={'icon icon-right'}>{iconTrailing}</div>}
      </div>
    </Styles.Button>
  );
};

export default Button;
