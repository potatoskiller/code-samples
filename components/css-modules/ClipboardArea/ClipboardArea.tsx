import { MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { addToast } from '@providers/ToastProvider/ToastProvider';
import { copyToClipboard } from '@utils/common';
import Icon from '@ui/Icons/Icon';
import styles from './ClipboardArea.module.scss';
import { ClipboardAreaProps } from './ClipboardArea.types';

const ClipboardArea = ({
  className,
  errorMessage,
  successMessage,
  children,
}: ClipboardAreaProps) => {
  const [showCopyIcon, setShowCopyIcon] = useState(false);

  const copyHandler = async (event: MouseEvent<HTMLSpanElement>) => {
    try {
      if (event.currentTarget.textContent) {
        await copyToClipboard(event.currentTarget.textContent);

        if (successMessage) {
          addToast({
            type: 'success',
            duration: 2000,
            message: successMessage,
          });
        }
      }
    } catch (error) {
      if (errorMessage) {
        addToast({
          type: 'error',
          duration: 2000,
          message: errorMessage,
        });
      }
    }
  };

  return (
    <div
      className={classNames(styles.container, className)}
      onClick={copyHandler}
      onMouseEnter={() => setShowCopyIcon(true)}
      onMouseLeave={() => setShowCopyIcon(false)}
    >
      {children}

      {
        showCopyIcon && (
          <span className={styles.copyButton}>
            <Icon name={'CopyIcon'} />
          </span>
        )
      }
    </div>
  );
};

export default ClipboardArea;
