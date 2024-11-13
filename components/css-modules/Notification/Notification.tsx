import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Notification.module.scss';
import { NotificationProps } from './Notification.types';

const Notification = ({
  title,
  content,
  timeout = 5000,
  leftComponent,
  rightComponent,
  className,
  onClose,
  ...rest
}: NotificationProps) => {
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRemoving(true);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  return (
    <div
      {...rest}
      className={
        classNames(styles.container, className, {
          [styles.removing]: isRemoving,
          [styles.showing]: !isRemoving,
        })
      }
      onAnimationEnd={
        () => {
          if (isRemoving) {
            onClose?.();
          }
        }
      }
    >
      {leftComponent && <div>{leftComponent}</div>}

      <div
        className={
          classNames(styles.content, {
            [styles.rightBorder]: !!rightComponent,
          })
        }
      >
        {title && <h5 className={styles.title}>{title}</h5>}

        {content}
      </div>

      {rightComponent && <div>{rightComponent}</div>}
    </div>
  );
};

export default Notification;
