import { createContext, useContext } from 'react';
import { NotificationsContextProps } from './NotificationsProvider.types';

const NotificationsContext = createContext<NotificationsContextProps | null>(null);

export const useNotificationsContext = () => {
  return useContext(NotificationsContext);
};

export default NotificationsContext;
