import classNames from 'classnames';
import Icon from '@ui/Icons/Icon';
import { COLORS } from '@ui/Icons/Icon.types';
import Tooltip from '@ui/Tooltip/Tooltip';
import { Text } from '@ui/Typography/Typography';
import styles from './InputContainer.module.scss';
import { InputContainerComponentProps } from './InputContainer.types';

const InputContainer = ({
  id,
  children,
  inputSize,
  error,
  hint,
  success,
  label,
  labelIcon,
  iconLeft,
  iconRight,
  infoLabel,
  onIconLeftClick,
  onIconRightClick,
  className,
}: InputContainerComponentProps) => {
  return (
    <div
      className={
        classNames(
          styles.container,
          className,
        )
      }
    >
      {
        label && (
          <label htmlFor={id}>
            {labelIcon}
            {label}
            {
              !!infoLabel && (
                <Tooltip
                  className={styles.infoIcon}
                  content={infoLabel}
                  offsetHorizontal={-3}
                  offsetVertical={7}
                >
                  <Icon name={'InfoIcon'} />
                </Tooltip>
              )
            }
          </label>
        )
      }

      <div
        className={
          classNames(styles.fieldContainer, {
            [styles.smallSize]: inputSize === 'small',
            [styles.mediumSize]: inputSize !== 'small',
            [styles.leftSpace]: !!iconLeft,
            [styles.rightSpace]: !!iconRight,
            [styles.errorState]: !!error,
            [styles.successState]: !!(success && !error),
          })
        }
      >
        {
          iconLeft && (
            <div
              className={styles.iconLeft}
              onClick={
                (event) => {
                  event.stopPropagation();
                  onIconLeftClick?.();
                }
              }
            >
              {
                !error ?
                  iconLeft
                  :
                  <Icon color={COLORS.red100} name={'AlertIcon'} />
              }
            </div>
          )
        }

        {children}

        {
          iconRight && (
            <div
              className={styles.iconRight}
              onClick={
                (event) => {
                  event.stopPropagation();
                  onIconRightClick?.();
                }
              }
            >
              {
                !error ?
                  iconRight
                  :
                  <Icon color={COLORS.red100} name={'AlertIcon'} />
              }
            </div>
          )
        }
      </div>

      {hint && <Text className={styles.hintLabel} weight='normal'>{hint}</Text>}

      {error && typeof error === 'string' && <p className={styles.errorMessage} data-cy={'input-error'}>{error}</p>}
    </div>
  );
};

export default InputContainer;
