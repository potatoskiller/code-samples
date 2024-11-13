import { ReactElement } from 'react';
import NotificationsContext from './useNotificationsContext';
import useNotificationsProvider from './useNotificationsProvider';

export interface NotificationsProviderProps {
  children: ReactElement;
}

const NotificationsProvider = ({ children }: NotificationsProviderProps): ReactElement => {
  const {
    notificationsActivated,
    notificationEnabledStatusLoading,
    enableNotifications,
    disableNotifications,
    removeInterest,
    addInterest,
  } = useNotificationsProvider();

  return (
    <NotificationsContext.Provider
      value={
        {
          notificationEnabledStatusLoading,
          notificationsActivated,
          enableNotifications,
          disableNotifications,
          removeInterest,
          addInterest,
        }
      }
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
