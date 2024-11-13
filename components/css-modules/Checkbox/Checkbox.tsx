import { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Icon from '@ui/Icons/Icon';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({
  label,
  onChange,
  checked,
  className,
  error,
  ...rest
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);

    onChange?.(event);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className={classNames(styles.container, className)}>
      <label>
        <input
          checked={isChecked}
          className={styles.hiddenCheckbox}
          type='checkbox'
          onChange={onChangeHandler}
          {...rest}
        />
        <div
          className={
            classNames(styles.styledCheckbox, {
              [styles.checked]: isChecked,
            })
          }
          data-cy={`checkbox-container${isChecked ? '-checked' : '-unchecked'}`}
        >
          <Icon name={'CheckIcon'} />
        </div>

        {label && <span className={styles.label}>{label}</span>}
      </label>

      {
        error && (
          <p className={styles.errorMessage} data-cy={'input-error'}>
            {error}
          </p>
        )
      }
    </div>
  );
};

export default Checkbox;
