import { generateStringId } from '@utils/common';
import store, { useAppSelector } from '@state/store';
import { addToastMessage, removeToastMessage } from '@state/toasts/actions';
import { getAllToasts } from '@state/toasts/selectors';
import { ToastType } from '@commonTypes/types';
import Toast from '@ui/Toast/Toast';
import styles from './ToastProvider.module.scss';
import { ToastParams, ToastProviderProps } from './ToastProvider.type';

export const addToast = (toast: ToastParams) => {
  store.dispatch(addToastMessage({
    ...toast,
    id: generateStringId(),
  }));
};

export const removeToast = (id: string) => {
  store.dispatch(removeToastMessage(id));
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const toasts = useAppSelector(getAllToasts);

  return (
    <>
      {children}
      <div className={styles.container}>
        {
          !!toasts?.length && (
            toasts.map((toast: ToastType) => {
              return (
                <Toast
                  actionComponent={toast.actionComponent}
                  className={styles.toast}
                  duration={toast.duration}
                  id={toast.id}
                  key={toast.id}
                  message={toast.message}
                  type={toast.type}
                  onClose={removeToast}
                />
              );
            })
          )
        }
      </div>
    </>
  );
};

export default ToastProvider;
